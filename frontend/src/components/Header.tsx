import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Check, Filter, PlusCircle, Settings } from "lucide-react";
import { DarkMode } from "./DarkMode";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

// const ordering = [
//   { label: "Title" },
//   { label: "Status" },
//   { label: "Priority" },
// ];

const viewOptions = [
  { label: "Title", field: "title" as OrderBy },
  { label: "Status", field: "status" as OrderBy },
  { label: "Priority", field: "priority" as OrderBy },
];

type OrderDirection = "asc" | "desc" | "hide";
type OrderBy = "title" | "status" | "priority";

const Header = ({
  handleOrderChange,
  orderConfig,
}: {
  handleOrderChange: (field: OrderBy, direction: OrderDirection) => void;
  orderConfig: {
    title: OrderDirection;
    status: OrderDirection;
    priority: OrderDirection;
  };
}) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // const [selectedVersion, setSelectedVersion] = useState("");

  const toggleColumnVisibility = (field: OrderBy) => {
    // Toggle between 'asc' (visible) and 'hide'
    const newDirection = orderConfig[field] === "hide" ? "asc" : "hide";
    handleOrderChange(field, newDirection);
  };

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
            <p className="text-[14px] md:text-2xl text-pink-600">
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
          className="flex items-center gap-1 w-full sm:w-auto bg-amber-400 hover:bg-amber-600 tex"
        >
          <Filter size={16} /> Status
        </Button>

        <Button
          variant={"outline"}
          className="flex items-center gap-1 w-full sm:w-auto bg-amber-400 hover:bg-amber-600 tex"
        >
          <Filter size={16} /> Priority
        </Button>

        <Link to="/create" className="w-full sm:w-auto">
          <Button
            variant="outline"
            className="flex items-center gap-1 w-full sm:w-auto bg-amber-400 hover:bg-amber-600 tex"
          >
            <PlusCircle size={16} />
            New Task
          </Button>
        </Link>

        {/* Dark Mode & View Settings - Right aligned */}
        <div className="flex justify-end items-center gap-2 w-full sm:w-auto">
          <DropdownMenu>
            <Button
              type="button"
              variant={"outline"}
              className="flex-1 sm:w-auto bg-amber-400 hover:bg-amber-600"
            >
              <DropdownMenuTrigger asChild>
                <div className="flex items-center gap-1 ">
                  <Settings size={16} /> View
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {viewOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.field}
                    onSelect={(e) => {
                      e.preventDefault();
                      toggleColumnVisibility(option.field);
                    }}
                    className="flex items-center"
                  >
                    {option.label}
                    {orderConfig[option.field] !== "hide" && (
                      <Check className="ml-auto h-4 w-4" />
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </Button>
          </DropdownMenu>
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

{
  /* <DropdownMenu>
  <Button variant={"outline"} className="flex items-center gap-1 flex-1 sm:w-auto">
    <DropdownMenuTrigger asChild>
      <div className="flex justify-start items-center gap-0.5 leading-none w-20">
        <Settings size={16} className="ml-auto" /> View
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      {ordering.map((version) => (
        <DropdownMenuItem
          key={version.label}
          onSelect={() => setSelectedVersion(version.label)}
        >
          {version.icon} {version.label}
          {version.label === selectedVersion && <Check className="ml-auto" />}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </Button>
</DropdownMenu>  */
}

{
  /* <Button
            variant="outline"
            className="flex items-center gap-1 flex-1 sm:w-auto"
          >
            <Settings size={16} /> View
          </Button> */
}
