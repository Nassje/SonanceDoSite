interface TestimonialCardProps {
  rating: number;
  content: string;
  name: string;
  title: string;
}

export default function TestimonialCard({ rating, content, name, title }: TestimonialCardProps) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`star-${i}`} className="fas fa-star"></i>);
    }
    
    if (hasHalfStar) {
      stars.push(<i key="half-star" className="fas fa-star-half-alt"></i>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }
    
    return stars;
  };

  return (
    <div className="glass-effect rounded-2xl p-8 hover:shadow-md transition-all group h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center text-yellow-400 mb-5">
          {renderStars()}
        </div>
        <p className="text-gray-600 mb-8 font-light leading-relaxed text-lg">
          "{content}"
        </p>
      </div>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-green-100/70 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
          <i className="fas fa-user text-green-600"></i>
        </div>
        <div>
          <h4 className="font-medium text-gray-800">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
    </div>
  );
}
