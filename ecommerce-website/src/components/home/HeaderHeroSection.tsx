

import Image from "next/image";
import bg1 from "./../../../public/assest/bg1.png";

const Hero = () => {
  return (
    <section className="bg-gray-100 py-16 w-full h-full ">
      <div className="container  mx-auto flex flex-col md:flex-row items-center px-6  ">
        <div className="text-center md:text-left md:w-1/2 ">
          <h2 className="text-4xl font-bold text-gray-800">Discover Our New Collection</h2>
          <p className="text-gray-600 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </p>
          <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded shadow hover:bg-yellow-600">
            Buy Now
          </button>
        </div>
        <div className="h-full mt-8 md:mt-0 md:w-1/2 ">
          <Image src={bg1} alt="Hero" width={1500} height={1500} className="w-[1500px] h-full rounded-lg shadow-lg "  />
        </div>
      </div>
    </section>
  );
};

export default Hero;