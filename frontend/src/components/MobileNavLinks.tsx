import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-col p-4 bg-white">
      <Link
        to="/order-status"
        className="flex items-center font-bold text-gray-800 hover:bg-yellow-400 hover:text-teal-700 py-2 px-4 rounded transition-colors"
      >
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex items-center font-bold text-gray-800 hover:bg-yellow-400 hover:text-teal-700 py-2 px-4 rounded transition-colors"
      >
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex items-center font-bold text-gray-800 hover:bg-yellow-400 hover:text-teal-700 py-2 px-4 rounded transition-colors"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center bg-yellow-400 text-gray-800 font-bold hover:bg-yellow-300 hover:text-teal-700 py-2 px-4 rounded transition-colors"
      >
        Log Out
      </Button>
    </div>
  );
};

export default MobileNavLinks;
