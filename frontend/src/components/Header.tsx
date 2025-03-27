import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, PlusCircle, Settings } from "lucide-react";
import { DarkMode } from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <header className="flex flex-col justify-between items-center p-2 md:p-4 w-full">
      <div className="flex justify-between items-center px-3 w-full">
        <div>
          <h2 className="text-2xl font-bold">Welcome back!</h2>
          <p className="text-gray-600">
            Here's a list of your tasks for this month!
          </p>
        </div>
        <div>
          <Button variant="outline" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="outline" onClick={() => navigate("/register")}>
            Register
          </Button>
        </div>
        <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200">
          <img
            src="https://avatars.githubusercontent.com/u/123456?v=4"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>
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

        {/* Buttons - Stack on mobile, inline on desktop */}
        <Button
          variant="outline"
          className="flex items-center gap-1 w-full sm:w-auto"
        >
          <PlusCircle size={16} /> Status
        </Button>

        <Button
          variant="outline"
          className="flex items-center gap-1 w-full sm:w-auto"
        >
          <PlusCircle size={16} /> Priority
        </Button>

        <Link to="/create" className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-1 w-full sm:w-auto"
          >
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
