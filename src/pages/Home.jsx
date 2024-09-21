import Banner from "../components/Home/Banner";
import CuisineSection from "../components/Home/Cuisine";
import WhyChooseUs from "../components/Home/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* //all components here */}
      <Banner></Banner>
      <WhyChooseUs></WhyChooseUs>
      <CuisineSection />
      {/* <OurChefs /> */}
    </div>
  );
};

export default Home;
