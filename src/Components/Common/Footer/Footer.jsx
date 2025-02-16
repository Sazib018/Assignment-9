import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 mb-2">
            <div className="container mx-auto px-4 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Contact Information */}
                <div>
                    <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
                    <p>Email: support@winterdonation.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>

                {/* Social Media Links */}
                <div className="flex justify-center md:justify-start space-x-4">
                    <FaFacebook className="w-6 h-6 text-white hover:text-blue-500 transition" />
                    <FaTwitter className="w-6 h-6 text-white hover:text-blue-400 transition" />
                    <FaInstagram className="w-6 h-6 text-white hover:text-pink-500 transition" />

                </div>

                {/* Copyright Notice */}
                <div className="text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Winter Clothing Donation. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
