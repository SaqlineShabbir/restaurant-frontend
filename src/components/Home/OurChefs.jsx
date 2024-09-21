import React from "react";
import { LuChefHat } from "react-icons/lu";
const chefs = [
  {
    name: "Ralph Edwards",
    title: "Chef Lead",
    image:
      "https://plus.unsplash.com/premium_photo-1687697860831-edaf70e279dd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    borderColor: "border-red-500",
  },
  {
    name: "Leslie Alexander",
    title: "Chef Assistant",
    image:
      "https://images.unsplash.com/photo-1601341348280-550b5e87281b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    borderColor: "border-orange-500",
  },
  {
    name: "Ronald Richards",
    title: "Chef Assistant",
    image:
      "https://plus.unsplash.com/premium_photo-1661349726691-d5efab008d77?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual image URL
    borderColor: "border-red-500",
  },
];

const ChefCard = () => {
  return (
    <section className="py-16 dark:bg-[#0a0c1c] lg:px-[200px]">
      <div className="container mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h3 className="text-orange-500 text-lg font-bold uppercase mb-2 inline-flex items-center">
            <LuChefHat className="text-2xl" />
            <span className="mr-2">Our Chef</span>{" "}
            {/* Spacing between text and icon */}
            {/* Adjust icon size here */}
          </h3>
          <h2 className="text-4xl  dark:text-gray-100 font-bold text-gray-900">
            Meet Our Expert Chefs
          </h2>
        </div>

        {/* Chef Cards */}
        <div className="grid gap-8 lg:grid-cols-3">
          {chefs.map((chef, index) => (
            <div
              key={index}
              className="bg-white rounded-lg relative overflow-hidden p-6 border"
            >
              {/* Image Wrapper */}
              <div className="relative">
                {/* Custom radius with Tailwind inline styles */}
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-full h-64 object-cover mx-auto border-8 border-orange-300"
                  style={{
                    borderColor: chef.borderColor,
                    borderRadius: "60% 60% 0 0", // Custom border-radius to match the rounded top shape
                  }}
                />
                {/* Share Button */}
                <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-white p-1 rounded-full">
                  <button className="bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12h16M4 12l5-5m-5 5l5 5"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Chef Info */}
              <h3 className="text-center text-xl font-bold mt-10">
                {chef.name}
              </h3>
              <p className="text-center text-gray-500">{chef.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChefCard;
