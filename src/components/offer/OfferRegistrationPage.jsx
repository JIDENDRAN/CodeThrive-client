import React, { useState, useRef, useCallback } from 'react';
import Tesseract from 'tesseract.js';
import {
  User, Phone, Mail, Building2, MapPin, Globe, Upload,
  CheckCircle2, Star, Trophy, Zap, Shield,
  Camera, X, Sparkles, ArrowRight, Clock,
  IndianRupee, FileImage, AlertCircle, Copy, Check, WifiOff,
  ArrowLeft, ChevronRight, MessageSquare, QrCode, CreditCard,
  Lock, Smartphone, HelpCircle, Award, Headphones
} from 'lucide-react';

// ─── Google Sheets Web App URL ────────────────────────────────────────────────
const SHEETS_URL = import.meta.env.VITE_SHEETS_URL || '';

// ─── UPI Details ──────────────────────────────────────────────────────────────
const UPI_ID = '341783757801954@cnrb';
const UPI_NAME = 'CodeThrive Infotech';

// ─── Offer Tiers ─────────────────────────────────────────────────────────────
const OFFER_TIERS = [
  {
    rank: '🏆 1st Prize',
    label: '1 Lucky Winner',
    highlight: '₹1,000 Total',
    sub: 'Full 5-Page Website (100% Balance Waived!)',
    badge: '₹0 Extra Balance',
    borderColor: 'border-amber-300',
    tagBg: 'bg-amber-500 text-white',
  },
  {
    rank: '🥈 2nd Prize',
    label: '2 Lucky Winners',
    highlight: '₹2,999 Total',
    sub: 'Full 5-Page Website (₹1,000 Already Paid)',
    badge: 'Pay ₹1,999 only',
    borderColor: 'border-slate-300',
    tagBg: 'bg-slate-800 text-white',
  },
  {
    rank: '🎯 All Participants',
    label: 'Every Business',
    highlight: '50% Flat OFF',
    sub: 'Standard ₹15,000 package at ₹7,500',
    badge: '₹1,000 Fee Credited',
    borderColor: 'border-indigo-200',
  },
];

// ─── Live Registered Clients Modal ─────────────────────────────────────────────
const RegisteredClientsModal = ({ onClose }) => {
  const [clients, setClients] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    if (!SHEETS_URL) {
      setError('Google Sheets URL not configured in environment variables.');
      setLoading(false);
      return;
    }

    fetch(SHEETS_URL)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'success') {
          setClients(data.data || []);
        } else {
          setError(data.message || 'Failed to fetch registrations from sheet.');
        }
      })
      .catch(err => {
        console.error('Failed to fetch from sheet:', err);
        setError('Could not connect to Google Sheets server. CORS or Network error.');
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[80vh] animate-slide-in-up">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Trophy size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-lg">Recently Registered Businesses</h3>
              <p className="text-xs text-slate-500 font-medium">Join these businesses in claiming the offer!</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-6 overflow-y-auto bg-slate-50/50 flex-1">
          <div className="space-y-3">
            
            {loading && (
              <div className="flex flex-col items-center justify-center py-10 gap-3">
                <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
                <p className="text-sm font-bold text-slate-500">Fetching live registrations...</p>
              </div>
            )}
            
            {!loading && error && (
              <div className="flex flex-col items-center justify-center py-10 gap-2 text-center">
                <p className="text-sm font-bold text-rose-500">{error}</p>
                <p className="text-xs text-slate-500">Please make sure you have deployed the latest Google Apps Script code.</p>
              </div>
            )}

            {!loading && !error && clients.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <p className="text-sm font-bold text-slate-500">No registrations found yet. Be the first!</p>
              </div>
            )}

            {!loading && !error && clients.map(client => (
              <div key={client.id} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-indigo-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 font-black text-lg uppercase">
                    {client.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-800 text-sm">{client.name}</h4>
                    <div className="flex items-center gap-2 mt-1 text-[11px] font-bold text-slate-500">
                      <span className="flex items-center gap-1"><Building2 size={12}/> {client.type}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><MapPin size={12}/> {client.city}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-extrabold border border-emerald-200">
                    <CheckCircle2 size={10} /> Registered
                  </span>
                  <p className="text-[10px] text-slate-400 mt-1.5 font-medium">{client.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── Input Field Component ───────────────────────────────────────────────────
const Field = ({ icon: Icon, label, id, type = 'text', value, onChange, placeholder, required, options }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
      <span>{label}{required && <span className="text-rose-500 ml-1">*</span>}</span>
    </label>
    <div className="relative">
      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <Icon size={18} />
      </span>
      {type === 'select' ? (
        <select
          id={id}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          className="w-full pl-11 pr-8 py-3.5 rounded-2xl text-base sm:text-sm font-medium outline-none border border-slate-300 bg-white text-slate-900 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all appearance-none cursor-pointer shadow-sm"
        >
          <option value="" disabled className="text-slate-400">Select option…</option>
          {options.map(o => (
            <option key={o} value={o} className="text-slate-800">{o}</option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="w-full pl-11 pr-4 py-3.5 rounded-2xl text-base sm:text-sm font-medium outline-none border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all shadow-sm"
        />
      )}
    </div>
  </div>
);

// ─── Copy Button Component ────────────────────────────────────────────────────
const CopyBtn = ({ text, label = 'Copy' }) => {
  const [copied, setCopied] = useState(false);
  const handle = () => {
    navigator.clipboard.writeText(text).catch(() => { });
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={handle}
      type="button"
      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-slate-200 bg-white hover:bg-indigo-50 hover:border-indigo-300 transition-all text-xs font-bold text-slate-700 hover:text-indigo-600 shadow-sm active:scale-95 shrink-0"
    >
      {copied ? (
        <>
          <Check size={14} className="text-emerald-600" />
          <span className="text-emerald-600 font-extrabold">Copied!</span>
        </>
      ) : (
        <>
          <Copy size={14} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
};

// ─── Submitted Details Receipt Component ─────────────────────────────────────
const SubmittedCard = ({ data, setActiveTab, handleReset }) => {
  const rows = [
    { label: 'Full Name', value: data.name },
    { label: 'Phone', value: data.phone },
    { label: 'Email', value: data.email },
    { label: 'Business Name', value: data.businessName },
    { label: 'Business Type', value: data.businessType },
    { label: 'City', value: data.city },
    { label: 'State', value: data.state },
    { label: 'Website Ideas', value: data.websiteIdea },
    { label: 'Transaction ID / UTR', value: data.transactionId },
    { label: 'UPI App Used', value: data.upiId },
    { label: 'Submitted On', value: data.submittedAt },
  ].filter(r => r.value);

  return (
    <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden text-slate-900 animate-slide-in-up">
      {/* Receipt Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 px-6 sm:px-8 py-6 text-white flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0">
            <CheckCircle2 size={26} className="text-emerald-400" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg sm:text-xl text-white">Registration Receipt</h3>
            <p className="text-xs text-slate-300 font-mono mt-0.5">Ref ID: <span className="text-amber-300 font-bold">{data.refId}</span></p>
          </div>
        </div>
        <CopyBtn text={data.refId} label="Copy Ref ID" />
      </div>

      {/* Sheets Status Banner */}
      <div className="px-6 sm:px-8 pt-6">
        {data.savedToSheets ? (
          <div className="rounded-2xl px-4 py-3.5 bg-emerald-50 border border-emerald-200 flex items-center gap-3">
            <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
            <p className="text-xs font-semibold text-emerald-900 leading-snug">
              ✓ Saved to CodeThrive Google Sheet — Our web team has received your registration!
            </p>
          </div>
        ) : (
          <div className="rounded-2xl px-4 py-3.5 bg-amber-50 border border-amber-200 flex items-center gap-3">
            <WifiOff size={18} className="text-amber-600 shrink-0" />
            <p className="text-xs font-semibold text-amber-900 leading-snug">
              Saved locally — Google Sheets URL not set in environment.
            </p>
          </div>
        )}
      </div>

      {/* Details Grid */}
      <div className="p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {rows.map(({ label, value }) => (
          <div key={label} className="bg-slate-50 border border-slate-200/60 rounded-2xl p-4">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-1">{label}</p>
            <p className="text-sm font-bold text-slate-900 break-words">{value}</p>
          </div>
        ))}
      </div>

      {/* Payment Screenshot Preview */}
      {data.paymentImageUrl && (
        <div className="px-6 sm:px-8 pb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Uploaded Payment Proof</p>
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 max-h-72 flex items-center justify-center">
            <img
              src={data.paymentImageUrl}
              alt="Payment proof"
              className="max-h-72 w-auto object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 px-4 py-2.5 bg-slate-900/90 backdrop-blur-sm flex items-center gap-2 text-white">
              <FileImage size={15} className="text-indigo-400 shrink-0" />
              <span className="text-xs font-medium truncate">{data.paymentFileName}</span>
            </div>
          </div>
        </div>
      )}

      {/* Next Steps Banner */}
      <div className="mx-6 sm:mx-8 mb-6 p-4 sm:p-5 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-start gap-3.5">
        <AlertCircle size={20} className="text-indigo-600 mt-0.5 shrink-0" />
        <div>
          <p className="text-xs font-extrabold text-indigo-950">What Happens Next?</p>
          <p className="text-xs text-indigo-900 leading-relaxed mt-1">
            Our web team will verify your transaction ID within <strong>24 hours</strong> and contact you via WhatsApp / Call on <strong>{data.phone}</strong>.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={handleReset}
          type="button"
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-extrabold text-sm bg-indigo-600 hover:bg-indigo-700 text-white transition-all shadow-md active:scale-95"
        >
          Register Another Business
        </button>
        <button
          onClick={() => setActiveTab && setActiveTab('home')}
          type="button"
          className="w-full sm:w-auto px-6 py-3.5 rounded-2xl font-bold text-sm bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 transition-all shadow-sm active:scale-95"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

// ─── Main Offer Registration Page ─────────────────────────────────────────────
export const OfferRegistrationPage = ({ setActiveTab }) => {
  const fileInputRef = useRef(null);

  // Form state
  const [form, setForm] = useState({
    name: '', phone: '', email: '',
    businessName: '', businessType: '',
    city: '', state: '',
    websiteIdea: '',
    transactionId: '', upiId: '',
  });
  const [paymentFile, setPaymentFile] = useState(null);
  const [paymentPreview, setPaymentPreview] = useState(null);
  const [dragOver, setDragOver] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [showClientsModal, setShowClientsModal] = useState(false);

  const set = key => val => setForm(f => ({ ...f, [key]: val }));

  // File handling
  const handleFile = useCallback((file) => {
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setErrors(e => ({ ...e, payment: 'Please upload an image file (JPG, PNG, WEBP)' }));
      return;
    }
    if (file.size > 8 * 1024 * 1024) {
      setErrors(e => ({ ...e, payment: 'Image size must be under 8 MB.' }));
      return;
    }
    setErrors(e => ({ ...e, payment: null }));
    setPaymentFile(file);
    const reader = new FileReader();
    reader.onload = ev => setPaymentPreview(ev.target.result);
    reader.readAsDataURL(file);

    // Auto-scan for Transaction ID using OCR
    setIsScanning(true);
    Tesseract.recognize(file, 'eng')
      .then(({ data: { text } }) => {
        console.log('[OCR] Scanned text:', text);
        // Look for typical UPI 12-digit UTR numbers
        const utrMatch = text.match(/\b\d{12}\b/);
        // Also look for GPay style transaction IDs
        const gpayMatch = text.match(/\b[A-Z0-9]{12,20}\b/i);
        
        let foundId = '';
        if (utrMatch) {
          foundId = utrMatch[0];
        } else if (gpayMatch) {
          // Exclude common false positives
          const filtered = text.match(/\b[A-Z0-9]{12,20}\b/g) || [];
          const candidate = filtered.find(t => !/^[A-Z]+$/.test(t) && /\d/.test(t) && /[A-Z]/i.test(t));
          if (candidate) foundId = candidate;
        }

        if (foundId) {
          setForm(f => ({ ...f, transactionId: foundId }));
        }
      })
      .catch(err => console.error('[OCR] Error:', err))
      .finally(() => setIsScanning(false));
  }, []);

  const handleDrop = e => {
    e.preventDefault();
    setDragOver(false);
    handleFile(e.dataTransfer.files?.[0]);
  };

  // Form Validation
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim().replace(/\D/g, '')))
      e.phone = 'Enter a valid 10-digit mobile number';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Enter a valid email address';
    if (!form.businessName.trim()) e.businessName = 'Business name is required';
    if (!form.city.trim()) e.city = 'City name is required';
    if (!form.transactionId.trim()) e.transactionId = 'Transaction ID / UTR is required';
    if (!paymentFile) e.payment = 'Payment screenshot image is required';
    return e;
  };

  // Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('[CTI] Submit clicked, form:', form, 'file:', paymentFile?.name);

    const errs = validate();
    console.log('[CTI] Validation errors:', errs);
    if (Object.keys(errs).length) {
      setErrors(errs);
      const formEl = document.getElementById('registration-form-card');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    const now = new Date();
    const submittedAt = now.toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' });
    const refId = 'CTI-' + Date.now().toString().slice(-6);

    let paymentBase64 = '';
    let paymentMimeType = '';
    if (paymentFile) {
      try {
        paymentMimeType = paymentFile.type || 'image/png';
        paymentBase64 = await new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (err) => reject(err);
          reader.readAsDataURL(paymentFile);
        });
      } catch (fileErr) {
        console.warn('Could not encode payment file:', fileErr);
      }
    }

    const payload = {
      ...form,
      refId,
      paymentFileName: paymentFile?.name || '',
      paymentBase64,
      paymentMimeType,
      submittedAt,
    };

    let savedToSheets = false;

    try {
      if (!SHEETS_URL) {
        console.warn('⚠ VITE_SHEETS_URL not set. Data not saved to Google Sheets.');
      } else {
        console.log('[CTI] Sending payload to Google Sheets:', SHEETS_URL);
        await fetch(SHEETS_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain' },
          body: JSON.stringify(payload),
        });
        savedToSheets = true;
        console.log('[CTI] Fetch sent successfully!');
      }
    } catch (err) {
      console.error('[CTI] Sheets submission error:', err);
    }

    await new Promise(r => setTimeout(r, 800));

    setSubmittedData({
      ...form,
      paymentImageUrl: paymentPreview,
      paymentFileName: paymentFile?.name,
      submittedAt,
      refId,
      savedToSheets,
    });
    setSubmitted(true);
    setIsSubmitting(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    setForm({ name: '', phone: '', email: '', businessName: '', businessType: '', city: '', state: '', websiteIdea: '', transactionId: '', upiId: '' });
    setPaymentFile(null);
    setPaymentPreview(null);
    setSubmitted(false);
    setSubmittedData(null);
    setErrors({});
  };

  const BUSINESS_TYPES = [
    'Retail / Shop', 'Restaurant / Food / Cafe', 'Healthcare / Clinic / Doctor', 'Education / Coaching',
    'Real Estate / Builder', 'Salon / Beauty / Spa', 'Textile / Garments', 'IT / Software Services',
    'Manufacturing / Factory', 'Freelancer / Consultant', 'NGO / Trust', 'Other Business'
  ];

  const STATES = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh',
    'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
    'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh',
    'Uttarakhand', 'West Bengal', 'Delhi', 'Jammu & Kashmir', 'Puducherry'
  ];

  return (
    <div className="min-h-screen bg-slate-100/80 text-slate-900 font-sans pb-24">

      {/* ── 1. STANDALONE TOP NAVBAR (EXPANDED TO FULL WIDTH ON LAPTOP) ──── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveTab && setActiveTab('home')}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-extrabold bg-slate-100 hover:bg-indigo-50 hover:text-indigo-600 text-slate-800 transition-all border border-slate-200 active:scale-95"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>
            <div className="hidden sm:flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-extrabold text-sm tracking-tight text-slate-900">CodeThrive ₹1,000 Web Offer</span>
            </div>
          </div>

          <nav className="flex items-center gap-3 lg:gap-6 text-xs font-bold text-slate-700">
            <button
              onClick={() => setActiveTab && setActiveTab('home')}
              className="hover:text-indigo-600 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('projects')}
              className="hover:text-indigo-600 transition-colors"
            >
              Portfolio
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('about')}
              className="hidden md:inline-block hover:text-indigo-600 transition-colors"
            >
              About Us
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold transition-all shadow-sm active:scale-95"
            >
              <MessageSquare size={13} />
              <span>Contact Us</span>
            </button>
          </nav>
        </div>
      </header>

      {/* ── 2. HERO BANNER SECTION (FULL WIDTH ON LAPTOP) ───────────────── */}
      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-indigo-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-extrabold uppercase tracking-wide mb-4">
            <Sparkles size={14} className="text-amber-400 shrink-0" />
            <span>Official CodeThrive Infotech Business Launch Campaign</span>
            <Clock size={14} className="text-amber-400 shrink-0" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4 leading-tight">
            Get Your Complete Business Website<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-amber-300 via-amber-200 to-indigo-200 bg-clip-text text-transparent">
              At ₹1,000 Registration Fee
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8 font-medium">
            Register your business today. The ₹1,000 entry fee is fully credited against your final package bill. 1 Lucky Winner gets a <strong>100% Free Website</strong>!
          </p>

          {/* Offer Tier Grid (Expanded across full width on Laptop) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-5xl mx-auto text-slate-900">
            {OFFER_TIERS.map((t) => (
              <div key={t.label} className={`rounded-2xl p-5 border bg-white shadow-lg flex flex-col justify-between ${t.borderColor} transition-transform hover:-translate-y-1`}>
                <div>
                  <div className="text-xs font-black uppercase text-slate-500 mb-1">{t.rank}</div>
                  <div className="text-2xl font-black text-slate-900 mb-1">{t.highlight}</div>
                  <div className="text-xs font-bold text-slate-700 mb-3">{t.sub}</div>
                </div>
                <span className={`px-3 py-1.5 rounded-full text-xs font-extrabold ${t.tagBg} self-center`}>
                  {t.badge}
                </span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => setShowClientsModal(true)}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-indigo-950 font-black text-sm transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            >
              <User size={18} className="text-indigo-600" />
              <span>View Recently Registered Businesses</span>
            </button>
          </div>

        </div>
      </section>

      {/* ── 3. MAIN CONTENT (USING SIDE SPACE ON LAPTOP - 12 COL GRID) ─── */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">

        {submitted && submittedData ? (
          <SubmittedCard data={submittedData} setActiveTab={setActiveTab} handleReset={handleReset} />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* ── LEFT COLUMN (LAPTOP SIDEBAR: PAYMENT & TRUST CARDS - 5 COLS) ─ */}
            <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-20">

              {/* Step 1: Payment Card */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-amber-400 text-slate-950 font-black flex items-center justify-center text-sm">
                      1
                    </div>
                    <div>
                      <h2 className="font-extrabold text-sm sm:text-base text-white">Step 1: Scan & Pay Fee</h2>
                      <p className="text-[11px] text-slate-300">Google Pay, PhonePe, Paytm or UPI</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-extrabold border border-amber-400/30">
                    ₹1,000 Entry
                  </span>
                </div>

                <div className="p-6 space-y-5">

                  {/* Amount Block */}
                  <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-center">
                    <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-800">Registration Fee</p>
                    <p className="text-3xl font-black text-amber-950 my-0.5">₹1,000</p>
                    <p className="text-xs text-amber-800 font-semibold">✨ 100% Credited back in your final website package bill</p>
                  </div>

                  {/* QR Code Section */}
                  <div className="flex flex-col items-center justify-center bg-white border border-slate-200 rounded-2xl p-5 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3 flex items-center gap-1.5">
                      <QrCode size={16} />
                      Scan to Pay
                    </p>
                    <div className="bg-white p-2 rounded-xl border border-slate-100 shadow-inner mb-3">
                      {/* Image path points to the public folder */}
                      <img src="/offer-qr.png" alt="Scan to Pay ₹1,000" className="w-48 h-48 object-contain rounded-lg" />
                    </div>
                    <p className="text-[11px] font-bold text-slate-500">BHIM UPI • Supported by all apps</p>
                  </div>

                  {/* UPI Details */}
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Official UPI ID</p>
                        <p className="text-base font-black text-slate-900 font-mono truncate select-all">{UPI_ID}</p>
                      </div>
                      <CopyBtn text={UPI_ID} label="Copy ID" />
                    </div>

                    <div className="pt-2 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Account Name</p>
                        <p className="font-extrabold text-slate-800">{UPI_NAME}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase">Support Phone</p>
                        <p className="font-extrabold text-slate-800">+91 91507 81685</p>
                      </div>
                    </div>
                  </div>

                  {/* Payment Apps Badges */}
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Pay using any UPI App:
                    </p>
                    <div className="grid grid-cols-4 gap-2 text-center">
                      {['GPay', 'PhonePe', 'Paytm', 'BHIM'].map(app => (
                        <div key={app} className="bg-slate-50 border border-slate-200 rounded-xl p-2 text-slate-800 font-bold text-[11px] flex flex-col items-center justify-center gap-1 shadow-2xs">
                          <Smartphone size={14} className="text-indigo-600" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Step Checklist */}
                  <div className="bg-indigo-50/70 border border-indigo-100 rounded-2xl p-4 space-y-2">
                    <p className="text-xs font-extrabold uppercase tracking-wider text-indigo-950 mb-1">
                      Quick Steps:
                    </p>
                    {[
                      'Pay ₹1,000 to UPI ID: 9150781685@ybl',
                      'Take a screenshot of payment success screen',
                      'Fill your business details in the form on the right'
                    ].map((s, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs font-semibold text-indigo-900">
                        <span className="w-4 h-4 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center shrink-0 text-[10px] mt-0.5">
                          {i + 1}
                        </span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Side Space Enhancement on Laptop: Trust & Support Widget */}
              <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-md space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold">
                    <Shield size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-extrabold text-slate-900">100% Security Guarantee</h4>
                    <p className="text-xs text-slate-500">Official CodeThrive Infotech Campaign</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <Award size={16} className="text-amber-500 mx-auto mb-1" />
                    <p className="text-xs font-bold text-slate-800">5-Page Web Site</p>
                    <p className="text-[10px] text-slate-500">Full Design</p>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-center">
                    <Headphones size={16} className="text-indigo-600 mx-auto mb-1" />
                    <p className="text-xs font-bold text-slate-800">24-Hour Contact</p>
                    <p className="text-[10px] text-slate-500">Team Call</p>
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT COLUMN (LAPTOP MAIN: FORM & SCREENSHOT UPLOAD - 7 COLS) ─ */}
            <div className="lg:col-span-7 space-y-6">

              {/* Step 2: Form Card */}
              <div id="registration-form-card" className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-slate-900 text-white px-6 sm:px-8 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-500 text-white font-black flex items-center justify-center text-sm">
                      2
                    </div>
                    <div>
                      <h2 className="font-extrabold text-base sm:text-lg text-white">Step 2: Fill Registration Details</h2>
                      <p className="text-xs text-slate-300">Enter your business info and upload payment screenshot</p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-extrabold border border-indigo-400/30">
                    Registration Form
                  </span>
                </div>

                <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-7">

                  {/* 1. Contact Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                      <User size={16} className="text-indigo-600" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        1. Contact Person Details
                      </h3>
                    </div>

                    <Field icon={User} label="Full Name" id="name" value={form.name} onChange={set('name')} placeholder="Enter your full name" required />
                    {errors.name && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.name}</p>}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Field icon={Phone} label="Phone Number" id="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="10-digit mobile number" required />
                        {errors.phone && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.phone}</p>}
                      </div>
                      <div>
                        <Field icon={Mail} label="Email Address" id="email" type="email" value={form.email} onChange={set('email')} placeholder="you@company.com" required />
                        {errors.email && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.email}</p>}
                      </div>
                    </div>
                  </div>

                  {/* 2. Business Details */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                      <Building2 size={16} className="text-indigo-600" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        2. Business Information
                      </h3>
                    </div>

                    <div>
                      <Field icon={Building2} label="Business / Shop Name" id="businessName" value={form.businessName} onChange={set('businessName')} placeholder="e.g. Sri Lakshmi Traders" required />
                      {errors.businessName && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.businessName}</p>}
                    </div>

                    <Field icon={Globe} label="Business Category" id="businessType" type="select" value={form.businessType} onChange={set('businessType')} options={BUSINESS_TYPES} />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Field icon={MapPin} label="City" id="city" value={form.city} onChange={set('city')} placeholder="City name" required />
                        {errors.city && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.city}</p>}
                      </div>
                      <Field icon={MapPin} label="State" id="state" type="select" value={form.state} onChange={set('state')} options={STATES} />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="websiteIdea" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                        Website Feature Ideas (Optional)
                      </label>
                      <textarea
                        id="websiteIdea"
                        rows={3}
                        value={form.websiteIdea}
                        onChange={e => set('websiteIdea')(e.target.value)}
                        placeholder="Describe what features or pages you want on your business website…"
                        className="w-full px-4 py-3.5 rounded-2xl text-base sm:text-sm outline-none border border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-indigo-600 focus:ring-4 focus:ring-indigo-100 transition-all resize-none shadow-sm"
                      />
                    </div>
                  </div>

                  {/* 3. Payment Verification & Upload */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                      <CreditCard size={16} className="text-indigo-600" />
                      <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-800">
                        3. Payment Proof & Upload
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Field icon={CheckCircle2} label="Transaction ID / UTR" id="transactionId" value={form.transactionId} onChange={set('transactionId')} placeholder={isScanning ? "Scanning image for ID..." : "e.g. T2409281234567"} required />
                        {isScanning && <p className="text-xs font-bold text-indigo-600 mt-1 flex items-center gap-1.5"><span className="animate-spin w-3 h-3 border-2 border-indigo-600 border-t-transparent rounded-full"></span> Auto-scanning screenshot...</p>}
                        {errors.transactionId && !isScanning && <p className="text-xs font-bold text-rose-600 mt-1">⚠ {errors.transactionId}</p>}
                      </div>
                      <Field icon={Phone} label="UPI App Used" id="upiId" type="select" value={form.upiId} onChange={set('upiId')}
                        options={['Google Pay', 'PhonePe', 'Paytm', 'Amazon Pay', 'BHIM UPI', 'Bank App', 'Other UPI']} />
                    </div>

                    {/* Screenshot Upload Zone */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 block">
                        Payment Screenshot Image <span className="text-rose-500">*</span>
                      </label>

                      {paymentPreview ? (
                        <div className="relative rounded-2xl overflow-hidden border border-emerald-300 bg-slate-950 flex items-center justify-center">
                          <img src={paymentPreview} alt="Payment screenshot" className="max-h-56 w-auto object-contain" />
                          <div className="absolute inset-0 bg-slate-900/60 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                            <button
                              type="button"
                              onClick={() => { setPaymentFile(null); setPaymentPreview(null); }}
                              className="p-2.5 rounded-full bg-rose-600 text-white hover:bg-rose-700 transition-all shadow-md active:scale-95"
                              title="Remove image"
                            >
                              <X size={18} />
                            </button>
                            <button
                              type="button"
                              onClick={() => fileInputRef.current?.click()}
                              className="p-2.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition-all shadow-md active:scale-95"
                              title="Change image"
                            >
                              <Camera size={18} />
                            </button>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-slate-900/90 text-white text-xs font-medium flex items-center gap-2">
                            <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                            <span className="truncate">{paymentFile?.name}</span>
                          </div>
                        </div>
                      ) : (
                        <div
                          className={`rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-all bg-slate-50 ${dragOver ? 'border-indigo-600 bg-indigo-50/50' : 'border-slate-300 hover:border-indigo-400 hover:bg-slate-100/70'}`}
                          onClick={() => fileInputRef.current?.click()}
                          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                          onDragLeave={() => setDragOver(false)}
                          onDrop={handleDrop}
                        >
                          <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center mx-auto mb-3">
                            <Upload size={22} />
                          </div>
                          <p className="text-sm font-extrabold text-slate-800 mb-1">
                            {dragOver ? 'Drop image here' : 'Click to Upload Payment Screenshot'}
                          </p>
                          <p className="text-xs text-slate-500">
                            Drag & drop or tap to select · PNG, JPG, WEBP (Max 8 MB)
                          </p>
                        </div>
                      )}
                      {errors.payment && <p className="text-xs font-bold text-rose-600 mt-2">⚠ {errors.payment}</p>}

                      <input ref={fileInputRef} type="file" accept="image/*" className="hidden"
                        onChange={e => handleFile(e.target.files?.[0])} />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4.5 rounded-2xl font-black text-base transition-all bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-500/25 disabled:opacity-60 flex items-center justify-center gap-3 active:scale-95 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        <span>Submitting Registration…</span>
                      </>
                    ) : (
                      <>
                        <Trophy size={18} />
                        <span>Submit Registration (₹1,000 Entry)</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 font-medium">
                    🔒 Safe & Secure Official Registration • CodeThrive Infotech
                  </p>

                </form>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* ── 4. STANDALONE FOOTER CONNECTION BAR (FULL WIDTH ON LAPTOP) ──── */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-200">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-left">
            <h4 className="text-base font-extrabold text-slate-900">Have Questions About Your Business Website?</h4>
            <p className="text-xs text-slate-500 mt-1">Our senior web development consultants are available to assist you anytime.</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab && setActiveTab('contact')}
              className="px-5 py-3 rounded-2xl text-xs font-extrabold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm active:scale-95"
            >
              Talk to Web Consultant
            </button>
            <button
              onClick={() => setActiveTab && setActiveTab('home')}
              className="px-5 py-3 rounded-2xl text-xs font-extrabold bg-slate-100 text-slate-800 hover:bg-slate-200 transition-all border border-slate-300 active:scale-95"
            >
              Browse Main Website
            </button>
          </div>
        </div>
      </footer>

      {showClientsModal && <RegisteredClientsModal onClose={() => setShowClientsModal(false)} />}
    </div>
  );
};
