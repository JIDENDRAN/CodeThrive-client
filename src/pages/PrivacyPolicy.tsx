import React, { useEffect } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#f8f9fa] min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-[#1a2332] text-white py-16 px-4 pb-32">
        <div className="container mx-auto text-center max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Privacy <span className="text-yellow-400">Policy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl"
          >
            Your privacy is important to us. Learn how we protect your data.
          </motion.p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-20 max-w-5xl mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white rounded-xl shadow-xl p-8 md:p-12"
        >
          {/* Introduction Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              Welcome to CodeThrive Infotech. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          {/* 1. Data We Collect Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              1. Data We Collect
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-gray-600 text-[15px]">
                  <strong className="text-gray-800">Identity Data:</strong> includes first name, last name, username or similar identifier.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-gray-600 text-[15px]">
                  <strong className="text-gray-800">Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.
                </p>
              </li>
              <li className="flex items-start">
                <Check className="text-green-500 mt-1 mr-3 flex-shrink-0" size={18} />
                <p className="text-gray-600 text-[15px]">
                  <strong className="text-gray-800">Transaction Data:</strong> includes details about payments to and from you and other details of products and services you have purchased from us.
                </p>
              </li>
            </ul>
          </section>

          {/* 2. How We Use Your Data Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              2. How We Use Your Data
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-[15px]">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-[15px]">To register you as a new customer.</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-[15px]">To process and deliver your order including managing payments, fees and charges.</span>
              </li>
              <li className="flex items-center">
                <Check className="text-green-500 mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-600 text-[15px]">To manage our relationship with you.</span>
              </li>
            </ul>
          </section>

          {/* 3. Data Security Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              3. Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed text-[15px]">
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
