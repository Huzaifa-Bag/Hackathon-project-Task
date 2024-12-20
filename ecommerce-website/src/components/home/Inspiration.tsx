import Image from "next/image";

// components/Inspiration.tsx
const Inspiration = () => {
    const rooms = [
      { id: 1, title: 'Inner Peace', image: '/assest/Image (1).png' },
      { id: 2, title: 'Cozy Living', image: '/assest/Rectangle 25.png' },
      { id: 2, title: 'Cozy Living', image: '/assest/Rectangle 45.png' },
    
      // Add more rooms here
    ];
  
    return (
      <section className="py-16 mx-auto border border-black">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">50+ Beautiful rooms inspiration</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 mx-auto border border-black">
            {rooms.map((room) => (
              <div key={room.id} className="bg-gray-100 p-6 rounded-lg border border-black">
                <Image src={room.image} alt={room.title} width={150} height={150} className="w-full rounded mb-4" />
                <h4 className="text-lg font-bold text-gray-700 text-center">{room.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Inspiration;