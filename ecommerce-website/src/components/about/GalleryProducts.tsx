import { images } from "@/app/data";
import Image from "next/image";

const GalleryProduct = () => {
  
  return (
    <div className="flex flex-col gap-4">
      <Image
        src="/assest/ProductImage1.png"
        alt="Asgaard Sofa"
        className="w-full bg-customProucts rounded-lg shadow-lg"
        width={900}
        height={900}
      />
      <div className="flex gap-2  ">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img}
            alt={`Gallery ${index + 1}`}
            className="w-20 h-20 rounded-lg border bg-customProucts"
            height={80}
            width={80}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryProduct;
