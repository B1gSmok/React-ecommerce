import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    rating: 4.5,
    reviews: 120,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 2,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    rating: 4.2,
    reviews: 89,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    rating: 4.8,
    reviews: 210,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 4,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    rating: 3.6,
    reviews: 150,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 5,
    name: 'Leather Notebook Cover',
    href: '#',
    price: '$60',
    rating: 4.7,
    reviews: 95,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: 'Brown leather notebook cover with embossed logo.',
  },
  {
    id: 6,
    name: 'Granite Mug',
    href: '#',
    price: '$25',
    rating: 4.4,
    reviews: 75,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: 'Speckled white granite mug with a minimalist design.',
  },
  {
    id: 7,
    name: 'Brass Pen',
    href: '#',
    price: '$29',
    rating: 4.1,
    reviews: 60,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: 'Sleek brass pen with a fine tip for precise writing.',
  },
  {
    id: 8,
    name: 'Recycled Paper Notebook',
    href: '#',
    price: '$18',
    rating: 4.0,
    reviews: 45,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: 'Eco-friendly notebook made of 100% recycled paper.',
  },
  {
    id: 9,
    name: 'Minimalist Wallet',
    href: '#',
    price: '$52',
    rating: 4.6,
    reviews: 110,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-09.jpg',
    imageAlt: 'Slim minimalist wallet made of premium leather.',
  },
  {
    id: 10,
    name: 'Handmade Ceramic Bowl',
    href: '#',
    price: '$40',
    rating: 4.3,
    reviews: 80,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-10.jpg',
    imageAlt: 'Handmade ceramic bowl with a glazed interior.',
  },
  {
    id: 11,
    name: 'Cork Yoga Mat',
    href: '#',
    price: '$72',
    rating: 4.9,
    reviews: 200,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-11.jpg',
    imageAlt: 'Natural cork yoga mat with anti-slip surface.',
  },
  {
    id: 12,
    name: 'Bamboo Toothbrush Set',
    href: '#',
    price: '$15',
    rating: 4.5,
    reviews: 90,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-12.jpg',
    imageAlt: 'Set of eco-friendly bamboo toothbrushes with soft bristles.',
  },
  {
    id: 13,
    name: 'Earthen Bottle',
    href: '#',
    price: '$48',
    rating: 4.5,
    reviews: 120,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
  },
  {
    id: 14,
    name: 'Nomad Tumbler',
    href: '#',
    price: '$35',
    rating: 4.2,
    reviews: 89,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 15,
    name: 'Focus Paper Refill',
    href: '#',
    price: '$89',
    rating: 4.8,
    reviews: 210,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 16,
    name: 'Machined Mechanical Pencil',
    href: '#',
    price: '$35',
    rating: 3.6,
    reviews: 150,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
  {
    id: 17,
    name: 'Leather Notebook Cover',
    href: '#',
    price: '$60',
    rating: 4.7,
    reviews: 95,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-05.jpg',
    imageAlt: 'Brown leather notebook cover with embossed logo.',
  },
  {
    id: 18,
    name: 'Granite Mug',
    href: '#',
    price: '$25',
    rating: 4.4,
    reviews: 75,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-06.jpg',
    imageAlt: 'Speckled white granite mug with a minimalist design.',
  },
  {
    id: 19,
    name: 'Brass Pen',
    href: '#',
    price: '$29',
    rating: 4.1,
    reviews: 60,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-07.jpg',
    imageAlt: 'Sleek brass pen with a fine tip for precise writing.',
  },
  {
    id: 20,
    name: 'Recycled Paper Notebook',
    href: '#',
    price: '$18',
    rating: 4.0,
    reviews: 45,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-08.jpg',
    imageAlt: 'Eco-friendly notebook made of 100% recycled paper.',
  },
  {
    id: 21,
    name: 'Minimalist Wallet',
    href: '#',
    price: '$52',
    rating: 4.6,
    reviews: 110,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-09.jpg',
    imageAlt: 'Slim minimalist wallet made of premium leather.',
  },
  {
    id: 22,
    name: 'Handmade Ceramic Bowl',
    href: '#',
    price: '$40',
    rating: 4.3,
    reviews: 80,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-10.jpg',
    imageAlt: 'Handmade ceramic bowl with a glazed interior.',
  },
  {
    id: 23,
    name: 'Cork Yoga Mat',
    href: '#',
    price: '$72',
    rating: 4.9,
    reviews: 200,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-11.jpg',
    imageAlt: 'Natural cork yoga mat with anti-slip surface.',
  },
  {
    id: 24,
    name: 'Bamboo Toothbrush Set',
    href: '#',
    price: '$15',
    rating: 4.5,
    reviews: 90,
    imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-12.jpg',
    imageAlt: 'Set of eco-friendly bamboo toothbrushes with soft bristles.',
  }
];

export default function ProductList() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-18 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`} className="group block">
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
              />
              
              {/* Product Name */}
              <h3 className="mt-4 text-sm text-gray-700 text-left">{product.name}</h3>
              
              {/* Price & Rating Row (Aligned in One Line) */}
              <div className="flex items-center justify-between w-full">
                <p className="text-lg font-medium text-gray-900">{product.price}</p>
                <div className="flex items-center gap-1 text-gray-600">
                  <FaStar className="text-yellow-500" /> {product.rating} ({product.reviews})
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
