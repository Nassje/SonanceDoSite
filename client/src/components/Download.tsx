import appstoreLogo from "@assets/appstore.png";
import { Button } from "@/components/ui/button";

export default function Download() {
  return (
    <section id="download" className="py-24 md:py-32 bg-gradient-to-b from-green-50 to-green-100/50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-0 w-80 h-80 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Download <span className="text-gradient">SonanceDo</span> Today
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-light max-w-2xl mx-auto">
            Start simplifying your task management with the power of your voice.
          </p>
          
          <div className="flex flex-col items-center justify-center">
            <Button 
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 rounded-xl font-medium shadow-sm transition-all inline-flex items-center text-lg hover:shadow-md mb-6"
            >
              <i className="fab fa-apple mr-2 text-xl"></i> Download Now
            </Button>
            
            <a href="#" className="inline-block group">
              <img 
                src={appstoreLogo} 
                alt="Download on the App Store" 
                className="h-14 transform transition-transform group-hover:scale-105" 
              />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
