interface StepItemProps {
  number: number;
  title: string;
  description: string;
  input?: string;
  reverse?: boolean;
}

export default function StepItem({ number, title, description, input, reverse = false }: StepItemProps) {
  const renderContent = () => {
    switch (number) {
      case 1:
        return (
          <div className="glass-effect rounded-2xl p-6 relative group hover:shadow-lg transition-all">
            <div className="absolute -top-4 -left-4 w-10 h-10 bg-green-500 rounded-xl text-white flex items-center justify-center font-bold shadow-sm">1</div>
            <p className="bg-green-50/70 p-4 rounded-xl text-gray-700 mb-4 backdrop-blur-md">
              "{input}"
            </p>
            <div className="flex justify-end">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className="fas fa-microphone text-white text-xl"></i>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="glass-effect rounded-2xl p-6 group hover:shadow-lg transition-all">
            <div className="mb-4 flex items-center justify-between border-b border-green-100/30 pb-3">
              <span className="font-medium text-green-600">Personal</span>
              <span className="text-sm text-gray-500">Today, 3:00 PM</span>
            </div>
            <p className="text-gray-800 mb-6">Pick up my kid from school</p>
            
            <div className="mb-4 flex items-center justify-between border-b border-green-100/30 pb-3">
              <span className="font-medium text-green-600">Groceries</span>
              <span className="text-sm text-gray-500">Today</span>
            </div>
            <p className="text-gray-800 mb-6">Buy milk and eggs</p>
            
            <div className="mb-4 flex items-center justify-between border-b border-green-100/30 pb-3">
              <span className="font-medium text-green-600">Finance</span>
              <span className="text-sm text-gray-500">Friday</span>
            </div>
            <p className="text-gray-800">Pay the electricity bill</p>
          </div>
        );
      case 3:
        return (
          <div className="glass-effect rounded-2xl p-6 group hover:shadow-lg transition-all">
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">Today</h4>
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>2 tasks</span>
                <span>4 priority</span>
              </div>
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 w-1/3"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-3 border-l-4 border-green-500 glass-effect rounded-r-xl">
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-green-300 rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">Pick up my kid from school</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 bg-green-100/70 text-green-800 rounded-lg mr-2">3:00 PM</span>
                      <span className="text-xs px-2 py-1 bg-green-100/70 text-green-800 rounded-lg">Personal</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3 border-l-4 border-green-500 glass-effect rounded-r-xl">
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-green-300 rounded-full mr-3 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-800">Buy milk and eggs</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs px-2 py-1 bg-green-100/70 text-green-800 rounded-lg">Groceries</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className={`md:w-1/2 mb-10 md:mb-0 md:pr-12 ${reverse ? 'md:order-2' : ''}`}>
        {renderContent()}
      </div>
      <div className={`md:w-1/2 ${reverse ? 'md:order-1 md:pr-12' : 'md:pl-12'}`}>
        <h3 className="text-2xl md:text-3xl font-medium mb-4">{title}</h3>
        <p className="text-gray-600 text-lg font-light leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
