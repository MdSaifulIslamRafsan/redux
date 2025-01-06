import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto h-16 flex item-center gap-3 px-5 justify-between">
      <div className="flex space-x-5 items-center">
       <h2 className="text-3xl"> <span className="font-bold ml-2">Task</span> Master</h2>
        <Link to="/">Tasks</Link>
        <Link to="/users">Users</Link>
      </div>
      <div className="flex items-center">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
};

export default Navbar;
