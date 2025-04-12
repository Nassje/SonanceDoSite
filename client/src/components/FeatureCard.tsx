interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-effect rounded-2xl p-8 hover:shadow-md transition-all group">
      <div className="w-14 h-14 bg-green-100/70 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <i className={`fas ${icon} text-green-600 text-xl`}></i>
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">{title}</h3>
      <p className="text-gray-600 font-light leading-relaxed">
        {description}
      </p>
    </div>
  );
}
