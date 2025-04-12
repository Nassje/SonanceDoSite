import StepItem from "./StepItem";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Speak Naturally",
      description: "Just tap the microphone button and speak as if you're talking to a person. Add multiple tasks in a single sentence.",
      input: "Pick up my kid from school at 3 PM, buy milk and eggs, and pay the electricity bill by Friday",
      reverse: false
    },
    {
      number: 2,
      title: "Smart Task Parsing",
      description: "The app automatically splits your input into separate tasks, identifies categories, and extracts dates and times.",
      reverse: true
    },
    {
      number: 3,
      title: "Organized Day View",
      description: "View all your tasks for today in a clean, organized interface. Tasks are color-coded by category and prioritized to help you focus on what's important.",
      reverse: false
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute -top-40 left-1/3 w-96 h-96 bg-green-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-green-100/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Natural language processing that understands exactly what you need
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col space-y-20">
            {steps.map((step, index) => (
              <StepItem 
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                input={step.input}
                reverse={step.reverse}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
