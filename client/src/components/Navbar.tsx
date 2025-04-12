import { useState } from "react";
import MobileMenu from "./MobileMenu";
import appstoreLogo from "@assets/appstore.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 glass-effect border-b border-green-100/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
              <img src={appstoreLogo} alt="SonanceDo Logo" className="w-full h-full object-contain"/>
            </div>
            <div className="text-gradient font-semibold text-xl">SonanceDo</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors font-medium">How It Works</a>
            <a href="#download" className="text-gray-600 hover:text-green-600 transition-colors font-medium">Download</a>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="w-10 h-10 flex items-center justify-center text-gray-600 rounded-full hover:bg-green-50"
            >
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </div>
      </div>
      
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  );
}
