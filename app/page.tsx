
import Navbar from "./Navbar/page";
export default function Home() {
  const products = [
    {
      id: 1,
      name: "Nike Air Force 1 '07",
      description: "The radiance lives on in the Nike Air Force 1 '07, a modern take on the iconic Air Force 1 that blends classic style and fresh, crisp details.",
      category: "Sneakers",
      price: 90.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      description: "Designed with a knit upper and responsive cushioning, these adidas running shoes keep every stride energized.",
      category: "Running Shoes",
      price: 190.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 3,
      name: "Converse Chuck Taylor All Star High Top",
      description: "The iconic Chuck Taylor All Star High Top sneaker from Converse is a timeless classic that's perfect for casual wear.",
      category: "Sneakers",
      price: 60.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 4,
      name: "Clarks Desert Boot",
      description: "The Clarks Desert Boot is a classic chukka boot that combines style and comfort, perfect for casual and semi-formal occasions.",
      category: "Boots",
      price: 130.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 5,
      name: "Timberland 6-Inch Premium Waterproof Boot",
      description: "The Timberland 6-Inch Premium Waterproof Boot is a rugged and durable boot designed for outdoor adventures and harsh weather conditions.",
      category: "Boots",
      price: 190.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 6,
      name: "Vans Old Skool",
      description: "The Vans Old Skool is a classic skate shoe with a timeless style that's perfect for casual wear.",
      category: "Sneakers",
      price: 60.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 7,
      name: "Adidas Stan Smith",
      description: "The Adidas Stan Smith is a classic low-top sneaker with a clean and minimalist design, perfect for everyday wear.",
      category: "Sneakers",
      price: 80.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 8,
      name: "Nike Air Max 270 React",
      description: "The Nike Air Max 270 React combines the style of the Air Max 270 with the comfort of React foam for a lightweight and responsive ride.",
      category: "Running Shoes",
      price: 160.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 9,
      name: "Birkenstock Arizona Soft Footbed",
      description: "The Birkenstock Arizona Soft Footbed sandal features a contoured footbed and adjustable straps for all-day comfort.",
      category: "Sandals",
      price: 100.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 10,
      name: "Dr. Martens 1460 Smooth",
      description: "The Dr. Martens 1460 Smooth is a classic 8-eye boot with a smooth leather upper and the iconic air-cushioned sole.",
      category: "Boots",
      price: 150.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 11,
      name: "New Balance Fresh Foam X 1080v12",
      description: "The New Balance Fresh Foam X 1080v12 is a premium running shoe with Fresh Foam midsole technology for superior cushioning and support.",
      category: "Running Shoes",
      price: 160.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 12,
      name: "Adidas Ultraboost 21",
      description: "The Adidas Ultraboost 21 is a high-performance running shoe with a responsive Boost midsole and a Primeknit upper for a comfortable fit.",
      category: "Running Shoes",
      price: 180.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 13,
      name: "Vans Slip-On",
      description: "The Vans Slip-On is a classic skate shoe with a simple and versatile design, perfect for casual wear.",
      category: "Sneakers",
      price: 50.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 14,
      name: "Clarks Wallabee",
      description: "The Clarks Wallabee is a classic moccasin-style shoe with a crepe sole and a suede upper, perfect for casual and comfortable wear.",
      category: "Casual Shoes",
      price: 170.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 15,
      name: "Nike Air Max 270",
      description: "The Nike Air Max 270 features the tallest Air unit yet, providing maximum cushioning and a bold, modern look.",
      category: "Sneakers",
      price: 170.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 16,
      name: "Adidas Samba",
      description: "The Adidas Samba is a classic indoor soccer shoe with a suede upper and a gum rubber outsole, perfect for casual wear.",
      category: "Sneakers",
      price: 70.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 17,
      name: "Converse Chuck Taylor All Star Low Top",
      description: "The Converse Chuck Taylor All Star Low Top is a classic low-top sneaker with a canvas upper and a rubber toe cap.",
      category: "Sneakers",
      price: 55.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 18,
      name: "Timberland Earthkeepers Chelsea Boot",
      description: "The Timberland Earthkeepers Chelsea Boot is a stylish and eco-friendly boot with a sleek silhouette and a comfortable fit.",
      category: "Boots",
      price: 180.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 19,
      name: "Birkenstock Gizeh",
      description: "The Birkenstock Gizeh is a classic thong sandal with a contoured footbed and adjustable straps for all-day comfort.",
      category: "Sandals",
      price: 100.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    },
    {
      id: 20,
      name: "Dr. Martens 1461 Smooth",
      description: "The Dr. Martens 1461 Smooth is a classic 3-eye shoe with a smooth leather upper and the iconic air-cushioned sole.",
      category: "Casual Shoes",
      price: 120.00,
      imageUrl: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/071b624e-3ff8-4415-beb0-bea9bc3f8364/air-presto-shoes-2SgNp1.png"
    }
  ];
  return (
    <>
      <Navbar />
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Latest Shoes</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} /> {/* Updated to use 'imageUrl' */}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">{product.name}</div>
              <p className="text-gray-700 text-base">${product.price}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <button><a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  View Details
                </a></button>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
}
