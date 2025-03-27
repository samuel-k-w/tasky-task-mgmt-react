import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, PlusCircle, Settings } from "lucide-react";
import { DarkMode } from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <header className="flex flex-col justify-between items-center p-2 md:p-4 w-full">
      <div className="flex justify-between items-center px-3 w-full">
        <div className="flex gap-4">
          <Link
            to="/"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-primary cursor-pointer"
          >
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              TasKY
            </span>
          </Link>
          <div>
            <h2 className="sm:text-3xl md:text-4xl font-bold">Welcome back!</h2>
            <p className="text-gray-200 text-[14px] md:text-2xl">
              Here's a list of your tasks for you!
            </p>
          </div>
        </div>
        <Avatar onClick={() => navigate("/profile")}>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/123456?v=4"
            alt="avatar"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>

      <nav className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:items-center justify-between gap-2 mt-4 px-2 w-full">
        {/* Search Input - Full width on mobile */}
        <div className="col-span-2 sm:col-span-1 w-full">
          <Input
            type="text"
            placeholder="Filter tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-md w-full"
          />
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-400 tex"
        >
          <Filter size={16} /> Status
        </Button>

        <Button
          variant={"outline"}
          className="flex items-center gap-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-400 tex"
        >
          <Filter size={16} /> Priority
        </Button>

        <Link to="/create" className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-1 w-full sm:w-auto bg-purple-500 hover:bg-purple-400 tex"
          >
            <PlusCircle size={16} />
            New Task
          </Button>
        </Link>

        {/* Dark Mode & View Settings - Right aligned */}
        <div className="flex justify-end items-center gap-2 w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-1 flex-1 sm:w-auto"
          >
            <Settings size={16} /> View
          </Button>
          <DarkMode />
        </div>
      </nav>
    </header>
  );
};

export default Header;

//       <div className="flex flex-col gap-4 items-center space-x-4"></div>

/* <div>
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outline" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div> */
