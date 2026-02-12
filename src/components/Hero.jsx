import heroImg from "../assets/Hero.PNG";


const Hero = () => {
  return (
    <div className="w-full px-3 sm:px-4 md:px-10 py-4 sm:py-6">
      <div className="bg-[#1f4b5c] rounded-xl flex flex-col md:flex-row items-center justify-between p-5 sm:p-6 md:p-10 text-white relative overflow-hidden">


        <div className="max-w-lg text-center md:text-left space-y-3 sm:space-y-4 md:ml-10">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight">
            Discover perfumes that celebrate individuality
          </h1>

          <p className="text-sm sm:text-base text-gray-200">
            Every moment with an unforgettable essence.
          </p>

          <button className="bg-white text-black px-5 sm:px-6 py-2 rounded-md text-sm sm:text-base font-medium hover:bg-gray-200 transition">
            Shop Now
          </button>
        </div>

        <div className="mt-4 sm:mt-6 md:mt-0 md:absolute md:right-10 md:bottom-4">
          <img
            src={heroImg}
            alt="Perfume"
            className="
              w-40
              sm:w-48
              md:w-72
              lg:w-80
              object-contain
            "
          />
        </div>

      </div>
    </div>
  );
};

export default Hero;
