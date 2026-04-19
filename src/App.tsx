import React, { useState, useEffect, Suspense, lazy } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import HeroImage from "./assets/hero-image.png";

const Home = lazy(() => import("./pages/Home"));
const Industries = lazy(() => import("./pages/Industries"));
const Projects = lazy(() => import("./pages/Projects"));
const Insights = lazy(() => import("./pages/Insights"));
const Contact = lazy(() => import("./pages/Contact"));

const BillingDemo = lazy(() => import("./pages/demo/BillingDemo"));
const CollegeERPDemo = lazy(() => import("./pages/demo/CollegeERPDemo"));
const EcommerceDemo = lazy(() => import("./pages/demo/E-commerceDemo"));
const HospitalDemo = lazy(() => import("./pages/demo/HospitalDemo"));
const TicketBookingDemo = lazy(() => import("./pages/demo/TicketBookingDemo"));
const FoodRestaurantDemo = lazy(() => import("./pages/demo/food-restaurant/FoodRestaurantDemo"));
const AttendanceAppDemo = lazy(() => import("./pages/demo/attendance-app/AttendanceAppDemo"));
const RiceMillDemo = lazy(() => import("./pages/demo/rice-mill/RiceMillDemo"));
const RealEstateDemo = lazy(() => import("./pages/demo/real-estate/RealEstateDemo"));
const CloudHRDemo = lazy(() => import("./pages/demo/cloud-hr/CloudHRDemo"));
const LogisticsDemo = lazy(() => import("./pages/demo/logistics/LogisticsDemo"));

const App: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Display gorgeous colorful preloader but drastically reduced time to load site instantly faster
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Mobile Hover Hack: Force iOS & Android to aggressively trigger all desktop CSS :hover, :focus, and colors movements on touch
    const enableHoverOnTouch = () => {};
    document.addEventListener("touchstart", enableHoverOnTouch, {passive: true});
    
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("touchstart", enableHoverOnTouch);
    };
  }, []);



  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries" },
    { name: "Projects", path: "/projects" },
    { name: "Insights", path: "/insights" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999, display: 'flex',
              flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden', background: '#0a0f1c'
            }}
          >
            {/* Trendy Animated Gradient Meshes */}
            <motion.div 
              animate={{ scale: [1, 1.3, 1], rotate: [0, 90, 180, 360], borderRadius: ["30%", "50%", "30%"] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute', top: '-20%', left: '-10%', width: '70vw', height: '70vw',
                background: 'radial-gradient(circle, rgba(0, 212, 255, 0.6) 0%, rgba(0, 212, 255, 0) 70%)',
                filter: 'blur(80px)', zIndex: 0
              }}
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], rotate: [360, 180, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              style={{
                position: 'absolute', bottom: '-20%', right: '-10%', width: '80vw', height: '80vw',
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0) 70%)',
                filter: 'blur(90px)', zIndex: 0
              }}
            />
            <motion.div 
              animate={{ scale: [1.2, 1, 1.2], x: [0, 100, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: 'absolute', top: '10%', right: '20%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(16, 185, 129, 0.4) 0%, rgba(16, 185, 129, 0) 70%)',
                filter: 'blur(70px)', zIndex: 0
              }}
            />

            {/* Glassmorphism Logo Card */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.5 }}
              style={{
                zIndex: 1, padding: '50px 70px', background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '40px', border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
              }}
            >
              <motion.img 
                src={HeroImage} 
                alt="CodeThrive Logo"
                initial={{ filter: 'brightness(2)' }}
                animate={{ filter: 'brightness(1) drop-shadow(0 20px 40px rgba(0, 212, 255, 0.6))' }}
                transition={{ duration: 1.5 }}
                style={{ width: 'clamp(250px, 40vw, 450px)', height: 'auto', objectFit: 'contain' }}
              />
            </motion.div>
            
            {/* Trendy Bouncing Loading Dots */}
            <motion.div style={{ zIndex: 1, marginTop: '60px', display: 'flex', gap: '12px' }}>
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -18, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
                  style={{
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: i === 0 ? '#00d9ff' : i === 1 ? '#8b5cf6' : '#10b981',
                    boxShadow: `0 0 20px ${i === 0 ? '#00d9ff' : i === 1 ? '#8b5cf6' : '#10b981'}`
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .page-wrapper {
          padding-top: 70px;
        }
        @media (max-width: 768px) {
          .page-wrapper {
            padding-top: 60px;
          }
        }
      `}</style>
      <div className="page-wrapper">
        <Suspense fallback={
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#0a0a0f' }}>
            <div style={{ width: '40px', height: '40px', border: '4px solid rgba(0, 212, 255, 0.3)', borderTop: '4px solid #00d4ff', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
            <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />

            {/* Demo Page Routes */}
            <Route path="/demo/billing" element={<BillingDemo />} />
            <Route path="/demo/college-erp" element={<CollegeERPDemo />} />
            <Route path="/demo/ecommerce" element={<EcommerceDemo />} />
            <Route path="/demo/hospital" element={<HospitalDemo />} />
            <Route path="/demo/tickets" element={<TicketBookingDemo />} />
            <Route path="/demo/food-restaurant" element={<FoodRestaurantDemo />} />
            <Route path="/demo/attendance-app" element={<AttendanceAppDemo />} />
            <Route path="/demo/rice-mill" element={<RiceMillDemo />} />
            <Route path="/demo/real-estate" element={<RealEstateDemo />} />
            <Route path="/demo/cloud-hr" element={<CloudHRDemo />} />
            <Route path="/demo/logistics" element={<LogisticsDemo />} />
          </Routes>
        </Suspense>
      </div>

      {/* Mobile menu background fix */}
      <style>{`
        @media (max-width: 991px) {
          .navbar-nav {
            position: absolute;
            top: 100%;
            right: 0;
            background: rgba(20,20,30,0.95);
            width: 100%;
            padding: 1rem 2rem;
            border-bottom-left-radius: 12px;
            border-bottom-right-radius: 12px;
            transition: max-height 0.3s ease;
          }
        }
      `}</style>
    </>
  );
};

export default App;
