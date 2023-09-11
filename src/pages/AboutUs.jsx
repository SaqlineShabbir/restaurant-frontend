import comma from '../assets/svg/double-removebg-preview.png';
import aboutimg from '../assets/workers-photo/about-photo.avif';
import FoodGallery from '../components/about-us/FoodGallery';
const AboutUs = () => {
  return (
    <div className="about-us-main  dark:bg-[#0a0c1c] dark:text-gray-100">
      <div className="lg:px-[150px]">
        <div className="lg:px-[200px] px-10 py-10">
          <p className="text-4xl  py-4 font-bold">About X Restaurant</p>
          <p className="text-2xl font-bold">
            Clean, Safe, and Prepared to Serve You
          </p>
          <p className="text-xl">
            The diner is open from 6 am to 10 pm --and free parking is available
            behind our location at 320 Lancaster Ave, Wayne, Pennsylvania (Route
            30 between Villanova University and the Devon Horse Show).
          </p>
        </div>
        {/* // */}
        <div className="lg:flex py-20 lg:space-x-[100px] px-10 lg:px-0">
          <img
            className="rounded-full h-[500px] w-[500px]"
            src={aboutimg}
            alt=""
          />

          <div className="space-y-5 lg:pt-20">
            <p className="text-4xl  font-bold">
              Superior service, personalized attention
            </p>
            <p className="text-xl">
              We're proud to offer the highest quality, freshest diner food on
              The Main Line. From our family to yours, we put lots of love and
              careful attention in each item. We hope you enjoy our work as much
              as we enjoy bringing it to you.
              <br />A local favorite since 1971, Minella’s offers an extensive
              menu with everything imaginable at a diner, including salads,
              soups, soft drinks, desserts, breakfast foods, eggs, pancakes,
              waffles, hot and cold sandwiches, burgers, wraps, seafood, steak,
              plus Italian and Greek specialties. All baking is done on the
              premises, and credit cards are accepted. We also offer a full bar
              menu. It's our honor to serve you. Welcome and enjoy!
            </p>
          </div>
        </div>
        {/* // */}
        <div className="bg-gray-100   dark:bg-[#262a4980]  py-20 flex justify-center">
          <img className="lg:h-20 h-10" src={comma} alt="" />
          <p className="text-center  lg:text-3xl text-xl pt-5">
            A recipe has no Soul. You as the cook, must bring soul to the
            recipe.
          </p>
        </div>
        <FoodGallery />
      </div>
    </div>
  );
};

export default AboutUs;
