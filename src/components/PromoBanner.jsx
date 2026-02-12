import PromoBanner1 from "../assets/PromoBanner.jpg";

const PromoBanner = () => {
  return (
    <section className="w-full px-6 md:px-10 py-12">
      <div className="w-full h-[220px] md:h-[260px] bg-[#cfeff4] rounded-2xl overflow-hidden flex items-center justify-between">

        
        <div className="pl-6 md:pl-12 max-w-md">
          <h2 className="text-xl md:text-2xl font-semibold text-black mb-2">
            Elegance in Every Bottle
          </h2>
          <p className="text-sm text-gray-700 mb-4">
            Discover timeless fragrances crafted for every moment
          </p>
          <button className="bg-[#0a3b4a] text-white px-5 py-2.5 rounded-md text-sm font-medium">
            Shop Now
          </button>
        </div>

    
        <div className="h-full w-[100%] flex overflow-hidden justify-end">
          <img
            src={PromoBanner1}
            alt="Perfume Bottle"
            className="h-full object-cover ml-[-100] rotate-[30deg] "
          />
        </div>

      </div>
    </section>
  );
};

export default PromoBanner;
