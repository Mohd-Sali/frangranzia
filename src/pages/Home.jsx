import Hero from "../components/Hero";
import Offers from "../components/Offers";
import Information from "../components/Information";
import FeaturedCollection from "../components/FeaturedCollection";
import BannerQuote from "../components/BannerQuote";
import CollectionCards from "../components/CollectionCards";
import Categories from "../components/Categories";
import OffersZone from "../components/OffersZone";
import PromoBanner from "../components/PromoBanner";


const Home = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <Information />
      <FeaturedCollection />
      <BannerQuote />
      <CollectionCards />
      <Categories />
      <OffersZone />
      <PromoBanner />
    </div>
  );
};

export default Home;


