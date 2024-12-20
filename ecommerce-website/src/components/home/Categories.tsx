import Image from "next/image";

const Categories = () => {
    return (
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Browse The Range</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <Image src="/assest/Mask Group.png" alt="Mask Group.png" width={381} height={480}/>
              <h4 className="text-xl font-bold text-gray-700">Dining</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image src="/assest/Image-living room.png" alt="Image-living room.png" width={381} height={480}/>
              <h4 className="text-xl font-bold text-gray-700">Living</h4>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
            <Image src="/assest/image 101.png" alt="image 101.png" width={381} height={480}/>
              <h4 className="text-xl font-bold text-gray-700">Bedroom</h4>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Categories;
  