interface CategoryCardProps {
  name: string;
  icon: string;
  color: string;
}

export default function CategoryCard({ name, icon, color }: CategoryCardProps) {
  // Use green color for all categories to match our new design
  const greenColor = "#16a34a"; // green-600

  return (
    <div className="glass-effect rounded-xl p-6 hover:shadow-md transition-all group">
      <div className="flex items-center">
        <div 
          className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-transform group-hover:scale-110`}
          style={{ backgroundColor: 'rgba(22, 163, 74, 0.15)' }}
        >
          <i 
            className={`fas ${icon} text-lg`}
            style={{ color: greenColor }}
          ></i>
        </div>
        <span 
          className="font-medium text-lg text-gray-700 group-hover:text-green-600 transition-colors"
        >
          {name}
        </span>
      </div>
    </div>
  );
}
