import { categories } from "@/lib/data";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-40 right-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-green-50/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            <span className="text-gradient">Smart</span> Categorization
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            SonanceDo automatically organizes your tasks into intuitive categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              name={category.name}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
