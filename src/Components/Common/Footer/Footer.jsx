import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 pt-8 lg:px-12 bg-gray-900 text-gray-300 border-t-2 border-gray-700">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
  
        <div className="sm:col-span-2">
          <a href="#" className="inline-flex items-center">
            <img src="https://mcqmate.com/public/images/logos/60x60.png" alt="logo" className="h-10 w-10" />
            <span className="ml-2 text-xl font-bold tracking-wide text-white">Winter Warmth</span>
          </a>
          <div className="mt-4 lg:max-w-xl">
            <p className="text-sm">
              Bring warmth to those in need this winter. Your small contribution can make a big difference in someone's life.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <p className="text-base font-bold tracking-wide text-white">Quick Links</p>
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Campaigns</a>
          <a href="#" className="hover:text-blue-400">Donate</a>
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>

        <div>
          <p className="text-base font-bold tracking-wide text-white">Follow Us</p>
          <div className="flex gap-4 mt-3 text-xl">
            <a href="#" className="hover:text-blue-500"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
          <p className="mt-4 text-base font-bold tracking-wide text-white">Contact Us</p>
          <div className="flex flex-col gap-1">
            <p>Email: <a href="mailto:info@winterwarmth.com" className="hover:text-blue-400">mahiburislamsazib@gmail.com</a></p>
            <p>Phone: <a href="tel:+8801234567890" className="hover:text-blue-400">+880 123 456 7890</a></p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t border-gray-700 lg:flex-row">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Winter Warmth. All rights reserved.</p>
        <ul className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-5">
          <li><a href="#" className="text-sm hover:text-blue-400">Privacy Policy</a></li>
          <li><a href="#" className="text-sm hover:text-blue-400">Terms of Use</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
