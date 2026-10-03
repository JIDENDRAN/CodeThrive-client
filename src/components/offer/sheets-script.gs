// ============================================================
//  CodeThrive Infotech — Offer Registration Sheet Handler
//  Deploy as: Web App → Execute as: Me → Access: Anyone
// ============================================================

const SHEET_NAME = 'Registrations';  // Tab name in your Google Sheet
const DRIVE_FOLDER_NAME = 'CodeThrive Payment Screenshots'; // Folder created in Google Drive

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    let   sheet = ss.getSheetByName(SHEET_NAME);

    // Auto-create the sheet + header row on first run
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow([
        'Ref ID', 'Submitted At',
        'Full Name', 'Phone', 'Email',
        'Business Name', 'Business Type',
        'City', 'State',
        'Website Idea',
        'Transaction ID', 'UPI App Used',
        'Payment File Name',
        'Payment Screenshot Link'
      ]);
      // Style header row
      const header = sheet.getRange(1, 1, 1, 14);
      header.setBackground('#1C1005');
      header.setFontColor('#F3D77F');
      header.setFontWeight('bold');
      sheet.setFrozenRows(1);
    }

    // Save image file to Google Drive if base64 data is provided
    let imageUrl = '';
    if (data.paymentBase64) {
      try {
        const folderIter = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
        const folder = folderIter.hasNext() ? folderIter.next() : DriveApp.createFolder(DRIVE_FOLDER_NAME);
        
        // Parse base64 string
        const base64Data = data.paymentBase64.split(',')[1] || data.paymentBase64;
        const mimeType = data.paymentMimeType || 'image/png';
        const fileName = (data.refId || 'Payment') + '_' + (data.paymentFileName || 'screenshot.png');
        
        const blob = Utilities.newBlob(Utilities.base64Decode(base64Data), mimeType, fileName);
        const file = folder.createFile(blob);
        file.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
        imageUrl = file.getUrl();
      } catch (driveErr) {
        imageUrl = 'Drive upload note: ' + driveErr.message;
      }
    }

    // Append registration row
    sheet.appendRow([
      data.refId         || ('CTI-' + Date.now().toString().slice(-6)),
      data.submittedAt   || new Date().toLocaleString('en-IN'),
      data.name          || '',
      data.phone         || '',
      data.email         || '',
      data.businessName  || '',
      data.businessType  || '',
      data.city          || '',
      data.state         || '',
      data.websiteIdea   || '',
      data.transactionId || '',
      data.upiId         || '',
      data.paymentFileName || '',
      imageUrl
    ]);

    // Auto-resize columns for readability
    sheet.autoResizeColumns(1, 14);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', imageUrl }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS / Get recent registrations
function doGet(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);
    
    if (!sheet) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    if (values.length <= 1) {
      return ContentService
        .createTextOutput(JSON.stringify({ status: 'success', data: [] }))
        .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Skip header row
    const rows = values.slice(1);
    
    // Format data for frontend (latest first)
    const clients = rows.map((row, index) => ({
      id: index.toString(),
      name: row[5] || row[2] || 'Registered Business', // Business Name or Full Name
      type: row[6] || 'Business',                      // Business Type
      city: row[7] || 'India',                         // City
      date: row[1] ? row[1].toString() : 'Recently'    // Submitted At
    })).reverse().slice(0, 20); // Top 20 latest registrations

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success', data: clients }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ============================================================
//  ONE-TIME AUTHORIZATION HELPER
//  Select this function in the top dropdown of Apps Script and click "Run"
//  to authorize Google Drive permissions!
// ============================================================
function authorizeDrivePermissions() {
  const folders = DriveApp.getFoldersByName(DRIVE_FOLDER_NAME);
  if (!folders.hasNext()) {
    DriveApp.createFolder(DRIVE_FOLDER_NAME);
  }
  Logger.log('✅ Google Drive permissions granted successfully!');
}

