import { FaStar } from "react-icons/fa";
import { useParams, Link } from "react-router-dom";

// Dummy orders list (you could later fetch this from backend or context)
const orders = [
  {
    id: "ORD123456",
    date: "2025-04-05",
    total: "$89.99",
    address: "123 Main Street, New York, NY 10001",
    products: [
      {
        id: 1,
        name: "Wireless Headphones",
        imageSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
        imageAlt: "Wireless Headphones",
        price: "$49.99",
        quantity: 1,
        rating: 4.5,
        reviews: 120,
        href: "#",
      },
      {
        id: 2,
        name: "USB-C Cable",
        imageSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
        imageAlt: "USB-C Cable",
        price: "$20.00",
        quantity: 2,
        rating: 4.7,
        reviews: 80,
        href: "#",
      },
    ],
  },
  {
    id: "ORD123457",
    date: "2025-03-28",
    total: "$45.00",
    address: "456 Market Street, Los Angeles, CA 90001",
    products: [
      {
        id: 3,
        name: "Bluetooth Speaker",
        imageSrc: "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
        imageAlt: "Bluetooth Speaker",
        price: "$45.00",
        quantity: 1,
        rating: 4.6,
        reviews: 65,
        href: "#",
      },
    ],
  },
];

export default function PrevOrderView() {
  const { id } = useParams();
  const order = orders.find((order) => order.id === id);

  if (!order) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600 text-lg">
        Order not found.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Order Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Order Details</h2>
          <p className="text-sm text-gray-600">Order ID: <span className="font-medium">{order.id}</span></p>
          <p className="text-sm text-gray-600">Date Placed: {order.date}</p>
          <p className="text-sm text-gray-600">Delivered To: <span className="font-medium">{order.address}</span></p>
          <p className="text-sm text-gray-600">Total Price: <span className="font-semibold text-gray-800">{order.total}</span></p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {order.products.map((product) => (
            <Link key={product.id} to={product.href} className="group block border rounded-lg p-3 hover:shadow transition">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-md bg-gray-100 object-cover group-hover:opacity-80"
              />
              <h3 className="mt-3 text-sm text-gray-800">{product.name}</h3>
              
              {/* Quantity */}
              <p className="text-sm text-gray-600 mt-1">Quantity: {product.quantity}</p>

              {/* Price and Rating */}
              <div className="mt-2 flex items-center justify-between">
                <p className="text-base font-medium text-gray-900">{product.price}</p>
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <FaStar className="text-yellow-500" />
                  {product.rating} ({product.reviews})
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
