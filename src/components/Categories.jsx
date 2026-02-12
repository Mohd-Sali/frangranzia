import Categories1 from "../assets/Categories-1.png";
import Categories2 from "../assets/Categories-2.png";
import Categories3 from "../assets/Categories-3.png";
import Categories4 from "../assets/Categories-4.png";
import Categories5 from "../assets/Categories-5.png";

const Categories = () => {
  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white">
      
    
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold">
          Explore Categories
        </h2>
        <span className="text-sm text-gray-600 cursor-pointer hover:underline">
          See All
        </span>
      </div>

     
      <div className="flex justify-between items-start gap-6 overflow-x-auto">

        
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
            <img src={Categories1} alt="Eau De Parfum" className="w-20" />
          </div>
          <p className="mt-4 text-sm font-medium text-center">
            Eau De Parfum
          </p>
        </div>

        
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
            <img src={Categories2} alt="Concentrated" className="w-20" />
          </div>
          <p className="mt-4 text-sm font-medium text-center">
            Concentrated
          </p>
        </div>

       
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
            <img src={Categories3} alt="Deodorants" className="w-20" />
          </div>
          <p className="mt-4 text-sm font-medium text-center">
            Deodorants
          </p>
        </div>

        
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
            <img src={Categories4} alt="Body Mist" className="w-20" />
          </div>
          <p className="mt-4 text-sm font-medium text-center">
            Body Mist
          </p>
        </div>

      
        <div className="flex flex-col items-center min-w-[140px]">
          <div className="w-32 h-32 rounded-full border border-gray-200 flex items-center justify-center">
            <img src={Categories5} alt="Combo" className="w-20" />
          </div>
          <p className="mt-4 text-sm font-medium text-center">
            Combo
          </p>
        </div>

      </div>
    </section>
  );
};

export default Categories;

