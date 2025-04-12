import { Button } from "@/components/ui/button";
import appstoreLogo from "@assets/appstore.png";

export default function Hero() {
  return (
    <section className="py-24 md:py-36 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Blurred orbs for the glass effect */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-20 w-96 h-96 bg-green-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          {/* App logo - using your actual logo */}
          <div className="mb-6 w-28 h-28 relative overflow-hidden rounded-xl">
            <img src={appstoreLogo} alt="SonanceDo Logo" className="w-full h-full object-contain"/>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 font-sans">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-700">SonanceDo</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 font-light max-w-2xl">
            The voice-first task management app that understands natural language, automatically organizes your tasks, and helps you focus on what matters most.
          </p>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <a href="#download" className="group">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl font-medium shadow-sm transition-all inline-flex items-center text-lg group-hover:shadow-md">
                <i className="fab fa-apple mr-2 text-xl"></i> Download for iOS
              </Button>
            </a>
            <a href="#how-it-works">
              <Button size="lg" variant="outline" className="bg-white/80 text-gray-800 border-green-200 hover:bg-white hover:border-green-300 px-8 py-6 rounded-xl font-medium transition-all text-lg backdrop-blur-sm">
                Learn More
              </Button>
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
}
