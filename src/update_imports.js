import fs from 'fs';
import path from 'path';

const filesToUpdate = [
  { tsx: 'src/component/Footer.tsx', cssName: 'Footer' },
  { tsx: 'src/component/TitleBar.tsx', cssName: 'TitleBar' },
  { tsx: 'src/pages/Home.tsx', cssName: 'home' }, // Home.tsx imports 'home.css' or 'HomePro.css'
  { tsx: 'src/pages/Projects.tsx', cssName: 'ProjectsPage'}, // let's check what it imports
  { tsx: 'src/pages/Industries.tsx', cssName: 'Industries' },
  { tsx: 'src/pages/Contact.tsx', cssName: 'Contact' }
];

const SEARCH_DIR = [
  'src/component',
  'src/pages'
];

// Instead of hardcoding the pairs, let's just grep all .tsx files and look for the imports we know we have separated.

const CSS_BASENAMES = [
  'Footer', 'TitleBar', 'HomePro', 'Industries', 'ProjectsPage', 'home'
];

function processTsx() {
  const tsxFiles = [];

  for (const dir of SEARCH_DIR) {
    const files = fs.readdirSync(path.join(process.cwd(), dir));
    for (const file of files) {
      if (file.endsWith('.tsx') || file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.ts')) {
        tsxFiles.push(path.join(process.cwd(), dir, file));
      }
    }
  }

  for (const tsxPath of tsxFiles) {
    let content = fs.readFileSync(tsxPath, 'utf8');
    let modified = false;

    for (const cssBase of CSS_BASENAMES) {
      const importRegex = new RegExp(`import\\s+["']\\.\\/${cssBase}\\.css["'];?`, 'g');
      
      const mobileCSS = `${cssBase}Mobile.css`;
      const tabletCSS = `${cssBase}Tablet.css`;
      
      // Let's see if the mobile exists and tablet exists
      const dirPath = path.dirname(tsxPath);
      const mobileExists = fs.existsSync(path.join(dirPath, mobileCSS));
      const tabletExists = fs.existsSync(path.join(dirPath, tabletCSS));

      if ((mobileExists || tabletExists) && importRegex.test(content)) {
        // Find if they are already imported so we don't duplicate
        const hasMobile = content.includes(mobileCSS);
        const hasTablet = content.includes(tabletCSS);
        
        let newImports = `import "./${cssBase}.css";\n`;
        if (tabletExists && !hasTablet) newImports += `import "./${tabletCSS}";\n`;
        if (mobileExists && !hasMobile) newImports += `import "./${mobileCSS}";\n`;

        if (!hasMobile || !hasTablet) {
          content = content.replace(importRegex, newImports.trim());
          modified = true;
        }
      }
    }

    if (modified) {
      fs.writeFileSync(tsxPath, content);
      console.log(`Updated imports in ${tsxPath}`);
    }
  }
}

processTsx();
