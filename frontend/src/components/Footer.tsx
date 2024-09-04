import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-teal-600 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-yellow-400 font-bold tracking-tight">
          OubaTaste
        </span>
        <div className="text-white font-medium tracking-wide flex gap-6">
          <Link
            to="/privacy-policy"
            className="hover:text-yellow-400 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className="hover:text-yellow-400 transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
