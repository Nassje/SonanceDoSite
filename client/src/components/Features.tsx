import FeatureCard from "./FeatureCard";

export default function Features() {
  const features = [
    {
      icon: "fa-microphone",
      title: "Voice-First Input",
      description: "Simply tap the mic button and speak naturally. Add multiple tasks at once without typing a single word."
    },
    {
      icon: "fa-tags",
      title: "Smart Categorization",
      description: "The app automatically categorizes your tasks into Finance, Groceries, Health, Work, and more."
    },
    {
      icon: "fa-calendar-day",
      title: "Beautiful Day View",
      description: "See all your tasks planned for today in a clean, organized interface that helps you stay focused."
    }
  ];

  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-40 -left-20 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-50/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            <span className="text-gradient">Simplify</span> Your Task Management
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            SonanceDo makes it easy to capture, organize, and complete your tasks using just your voice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
