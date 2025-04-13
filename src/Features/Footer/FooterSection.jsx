import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerData = {
  brand: {
    name: "TrendyStore",
    description: "Discover the latest trends in fashion & accessories. Quality products at the best prices.",
    socialLinks: [
      { icon: <FaFacebookF />, url: "#" },
      { icon: <FaTwitter />, url: "#" },
      { icon: <FaInstagram />, url: "#" },
      { icon: <FaYoutube />, url: "#" },
    ],
  },
  quickLinks: {
    title: "Quick Links",
    links: ["Shop", "New Arrivals", "Best Sellers", "Categories"],
  },
  customerService: {
    title: "Customer Service",
    links: ["FAQ", "Returns", "Shipping Info", "Contact Us"],
  },
  newsletter: {
    title: "Stay Updated",
    description: "Subscribe to our newsletter",
  },
};

const FooterSection = () => {
  const quickLinksRoutes = ["/shop", "/new", "/bestsellers", "/categories"];
  const customerLinksRoutes = ["/faq", "/returns", "/shipping", "/contact"];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">{footerData.brand.name}</h2>
          <p className="text-gray-400">{footerData.brand.description}</p>
          <div className="flex gap-4 mt-4">
            {footerData.brand.socialLinks.map((link, idx) => (
              <a href={link.url} key={idx} className="hover:text-blue-400 cursor-pointer">
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{footerData.quickLinks.title}</h3>
          <ul className="space-y-2 text-gray-400">
            {footerData.quickLinks.links.map((link, idx) => (
              <li key={idx}>
                <Link to={quickLinksRoutes[idx]} className="hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{footerData.customerService.title}</h3>
          <ul className="space-y-2 text-gray-400">
            {footerData.customerService.links.map((link, idx) => (
              <li key={idx}>
                <Link to={customerLinksRoutes[idx]} className="hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">{footerData.newsletter.title}</h3>
          <p className="text-gray-400 mb-4">{footerData.newsletter.description}</p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-black"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-medium"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} {footerData.brand.name}. All rights reserved.
      </div>
    </footer>
  );
};


export default FooterSection;
