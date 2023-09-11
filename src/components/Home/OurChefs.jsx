import img from '../../assets/workers-photo/about-photo.avif';
const OurChefs = () => {
  return (
    <div className="chefs-main px-5 lg:px-[200px] py-20">
      <div>
        <div className="space-y-2 lg:px-[100px] px-auto">
          <p className="text-3xl font-bold">Our Expert Chefs</p>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing
            <br /> elit. Et explicabo harum rem deleniti velit! Non
            <br /> voluptatem quae nisi iusto vero.
          </p>
          <hr className="" />
        </div>
        <div className="lg:flex justify-center items-center lg:space-x-5 py-20 space-y-2 lg:space-y-0">
          <div className="lg:w-[300px] group ">
            <img
              className="h-[400px] lg:w-[300px]  group-hover:opacity-40"
              src={img}
              alt=""
            />
            <div className="relative invisible bottom-[200px] px-5 group-hover:visible">
              <p className="font-bold text-lg">Larry page</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, labore?
              </p>
            </div>
          </div>
          <div className="lg:w-[300px] group ">
            <img
              className="h-[400px] lg:w-[300px]  group-hover:opacity-40"
              src={img}
              alt=""
            />
            <div className="relative invisible bottom-[200px] px-5 group-hover:visible">
              <p className="font-bold text-lg">Larry page</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, labore?
              </p>
            </div>
          </div>
          <div className="lg:w-[300px] group ">
            <img
              className="h-[400px] lg:w-[300px]  group-hover:opacity-40"
              src={img}
              alt=""
            />
            <div className="relative invisible bottom-[200px] px-5 group-hover:visible">
              <p className="font-bold text-lg">Larry page</p>
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis, labore?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurChefs;
