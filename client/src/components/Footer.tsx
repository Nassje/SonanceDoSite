import appstoreLogo from "@assets/appstore.png";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-1/3 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center mb-5">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                <img src={appstoreLogo} alt="SayToDo Logo" className="w-full h-full object-contain"/>
              </div>
              <div className="text-gradient font-semibold text-xl">SonanceDo</div>
            </div>
            <p className="text-gray-600 mb-5 font-light">
              The voice-first task management app that helps you focus on what matters most.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <i className="fab fa-twitter text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <i className="fab fa-instagram text-lg"></i>
              </a>
              <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">
                <i className="fab fa-facebook text-lg"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">App</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-600 hover:text-green-600 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-green-600 transition-colors">How It Works</a></li>
              <li><a href="#download" className="text-gray-600 hover:text-green-600 transition-colors">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Help Center</a></li>
              <li><a href="/privacy-policy" className="text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-5 text-gray-800">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-600 flex items-center">
                <i className="fas fa-envelope mr-3 text-green-500"></i> N.Harif@Outlook.com
              </li>
              <li className="text-gray-600 flex items-center">
                <i className="fas fa-globe mr-3 text-green-500"></i> SonanceDo.com
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} SonanceDo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}