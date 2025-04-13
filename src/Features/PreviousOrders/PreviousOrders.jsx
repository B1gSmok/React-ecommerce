// import React from "react";
// import { Link } from "react-router-dom";

// export default function PreviousOrders() {
//   const orders = [
//     {
//       id: "ORD123456",
//       date: "2025-04-05",
//       total: "$89.99",
//       status: "Delivered",
//       items: [
//         { name: "Wireless Headphones", quantity: 1, price: "$49.99" },
//         { name: "USB-C Cable", quantity: 2, price: "$20.00" },
//       ],
//     },
//     {
//       id: "ORD123457",
//       date: "2025-03-28",
//       total: "$45.00",
//       status: "Shipped",
//       items: [
//         { name: "Bluetooth Speaker", quantity: 1, price: "$45.00" },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
//       <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Previous Orders</h2>

//         {orders.map((order) => (
//           <Link
//             to="/orders"
//             key={order.id}
//             className="block border border-gray-200 rounded-lg mb-6 p-4 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <div>
//                 <p className="font-semibold">Order ID: <span className="text-gray-700">{order.id}</span></p>
//                 <p className="text-sm text-gray-600">Date: {order.date}</p>
//               </div>
//               <div className="text-right">
//                 <p className="font-medium text-indigo-600">{order.status}</p>
//                 <p className="text-sm text-gray-800">Total: {order.total}</p>
//               </div>
//             </div>

//             <div className="space-y-3">
//               {order.items.map((item, index) => (
//                 <div key={index} className="flex justify-between text-sm text-gray-700">
//                   <span>{item.name} × {item.quantity}</span>
//                   <span>{item.price}</span>
//                 </div>
//               ))}
//             </div>
//           </Link>
//         ))}

//         {orders.length === 0 && (
//           <p className="text-center text-gray-600">You haven't placed any orders yet.</p>
//         )}
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";

export default function PreviousOrders() {
  const orders = [
    {
      id: "ORD123456",
      date: "2025-04-05",
      total: "$89.99",
      status: "Delivered",
      items: [
        { name: "Wireless Headphones", quantity: 1, price: "$49.99" },
        { name: "USB-C Cable", quantity: 2, price: "$20.00" },
      ],
    },
    {
      id: "ORD123457",
      date: "2025-03-28",
      total: "$45.00",
      status: "Shipped",
      items: [
        { name: "Bluetooth Speaker", quantity: 1, price: "$45.00" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Previous Orders</h2>

        {orders.map((order) => (
          <Link
            to={`/orders/${order.id}`} // ✅ This was the fix!
            key={order.id}
            className="block border border-gray-200 rounded-lg mb-6 p-4 bg-gray-50 hover:bg-gray-100 transition cursor-pointer"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="font-semibold">Order ID: <span className="text-gray-700">{order.id}</span></p>
                <p className="text-sm text-gray-600">Date: {order.date}</p>
              </div>
              <div className="text-right">
                <p className="font-medium text-indigo-600">{order.status}</p>
                <p className="text-sm text-gray-800">Total: {order.total}</p>
              </div>
            </div>

            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between text-sm text-gray-700">
                  <span>{item.name} × {item.quantity}</span>
                  <span>{item.price}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}

        {orders.length === 0 && (
          <p className="text-center text-gray-600">You haven't placed any orders yet.</p>
        )}
      </div>
    </div>
  );
}
