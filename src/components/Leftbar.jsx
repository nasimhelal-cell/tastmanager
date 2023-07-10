import { useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
const Leftbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div
      className={`${
        isCollapsed ? "w-[8vw]" : "w-[20vw]"
      } h-[100vh] border border-gray-500 relative`}
    >
      {/* logo  */}
      <div className="h-[14vh] border-b border-red-500 flex items-center justify-center">
        {/* this text need to change with logo icon or image */}
        {isCollapsed ? "G" : "G - Google"}
      </div>
      {/* main menubar  */}
      <nav className="flex flex-col gap-3">
        <span>Home</span>
        <span>Project Name</span>
        <span>Current Projects</span>
        <span>completed</span>
      </nav>

      {/*  expand and collapsed icon for leftsidebar */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute right-0 top-[50%] -translate-y-[50%]  bg-gray-400 text-white h-[70px] w-[20px] flex items-center justify-center rounded-tl-md rounded-bl-md "
      >
        <AiOutlineDoubleRight
          className={`${!isCollapsed && "rotate-[180deg]"} transform`}
        />
      </button>
    </div>
  );
};

export default Leftbar;
