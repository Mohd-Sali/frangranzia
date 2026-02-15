import aboutImg1 from "../assets/about-1.jpg";
import aboutImg2 from "../assets/about-2.jpg";

export default function About() {
  return (
    <section className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-7">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-4">
          Home <span className="mx-1">›</span> About
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">
              About Fragranzia
            </h1>

            <div className="space-y-5 text-gray-700 leading-relaxed">
              <p>
                At Fragranzia, we believe that a perfume is more than just a
                scent—it’s a story, an art, and a science combined to create
                memories that linger. Our journey began with a vision to craft
                exquisite fragrances that capture the essence of individuality
                and elevate every moment into something timeless.
              </p>

              <p>
                Guided by passion and precision, we source the finest
                ingredients from around the world to create perfumes that
                resonate with authenticity and luxury. Each bottle is a
                masterpiece, meticulously crafted to deliver an unparalleled
                sensory experience.
              </p>

              <p>
                Our commitment goes beyond creating fragrances. We aim to
                inspire confidence, evoke emotions, and celebrate uniqueness
                through every drop. Fragranzia isn’t just a brand—it’s a
                celebration of you, your style, and your moments.
              </p>

              <p>
                With a legacy built on quality, artistry, and innovation, we
                invite you to explore our collection and find a scent that
                speaks your story.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-[260px] md:w-[320px]">
              
              <img
                src={aboutImg1}
                alt="Perfume spray"
                className="w-full h-[210px] object-cover rounded-tl-[40%] rounded-br-[40%] shadow-md"
              />

              
              <img
                src={aboutImg2}
                alt="Perfume bottle"
                className="w-full h-[210px] object-cover rounded-tr-[40%] rounded-bl-[40%] shadow-md "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
