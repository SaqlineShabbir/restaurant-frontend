import Banner from "../components/Home/Banner";
import CuisineSection from "../components/Home/Cuisine";
import ChefCard from "../components/Home/OurChefs";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* //all components here */}
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <CuisineSection />
      <ChefCard />
    </div>
  );
};

export default Home;
