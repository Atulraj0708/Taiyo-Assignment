import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaReact } from "react-icons/fa";


const Sidebar = () => {
  return (
    <nav className="w-full md:max-w-[300px] bg-[#c0bd8e] md:h-screen font-bold text-2xl md:p-[20px] py-[10px] px-[15px] text-[#36454F]">
      <div className="gap-y-5 flex md:block items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex items-center text-[#4199c8] md:text-3xl md:mb-[20px]"
          >
            <FaReact className="mr-2" />
            <h1 className="mb-[5px]">Contact Management App</h1>
          </Link>
        </div>

        <ul className="md:block flex items-center">
          <li>
            <Link to="/" className="py-[20px] flex items-center hover:text-[#f4544c]">
              <AiOutlineHome className="mx-2" />
              <h1 className="hidden md:flex">Contact</h1>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="flex items-center hover:text-[#f4544c]">
              <BsGraphUpArrow className="mx-2" />
              <h1 className="hidden md:flex">Charts and Maps</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
