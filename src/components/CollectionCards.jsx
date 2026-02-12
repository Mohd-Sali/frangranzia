import Collection1 from "../assets/Collection-1.jpg";
import Collection2 from "../assets/Collection-2.jpg";
import Collection3 from "../assets/Collection-3.jpg";

const CollectionCards = () => {
  return (
    <section className="w-full px-4 md:px-10 py-12 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

       
        <div className="relative h-[420px] rounded-xl overflow-hidden">
          <img
            src={Collection1}
            alt="New Arrivals"
            className="w-full h-full object-cover"
          />

       
          <div className="absolute inset-0 bg-black/30"></div>

          
          <span className="absolute left-3 bottom-6 text-white text-sm font-semibold tracking-widest rotate-[-90deg] origin-left">
            NEW ARRIVALS
          </span>
        </div>

        
        <div className="relative h-[420px] rounded-xl overflow-hidden">
          <img
            src={Collection2}
            alt="Limited Edition"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <span className="absolute left-3 bottom-6 text-white text-sm font-semibold tracking-widest rotate-[-90deg] origin-left">
            LIMITED EDITION
          </span>
        </div>

        <div className="relative h-[420px] rounded-xl overflow-hidden">
          <img
            src={Collection3}
            alt="Best Sellers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30"></div>
          <span className="absolute left-3 bottom-6 text-white text-sm font-semibold tracking-widest rotate-[-90deg] origin-left">
            BEST SELLERS
          </span>
        </div>

      </div>
    </section>
  );
};

export default CollectionCards;
