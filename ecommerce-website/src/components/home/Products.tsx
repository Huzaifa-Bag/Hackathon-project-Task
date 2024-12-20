import Image from "next/image";

const ProductGrid = () => {
    const products = [
      { id: 1, name: 'Syltherine', price: 'Rp 2,500,000', discount: '30%', image: '/assest/Images (1).png' },
      { id: 2, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/Images (2).png' },
      { id: 3, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/Images (3).png' },
      { id: 4, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/Images.png' },
      { id: 5, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/image 6.png' },
      { id: 6, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/image 7.png' },
      { id: 7, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/image 8.png' },
      { id: 8, name: 'Leviosa', price: 'Rp 2,500,000', discount: '50%', image: '/assest/Images (1).png' },
     
      // Add more products here
    ];
  
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-gray-800 text-center">Our Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
                <Image src={product.image} alt={product.name} className="w-full rounded" />
                <h4 className="mt-4 text-lg font-bold text-gray-700">{product.name}</h4>
                <p className="text-gray-600 mt-2">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductGrid;
  