import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Filter, PlusCircle, Settings } from "lucide-react";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h2 className="text-2xl font-bold">Welcome back!</h2>
        <p className="text-gray-600">
          Here's a list of your tasks for this month!
        </p>

        <div className="flex items-center mt-4 space-x-2">
          <Input
            type="text"
            placeholder="Filter tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border p-2 rounded-md"
          />

          <Button variant="outline" className="flex items-center gap-1">
            <PlusCircle size={16} /> Status
          </Button>

          <Button variant="outline" className="flex items-center gap-1">
            <PlusCircle size={16} /> Priority
          </Button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="rounded-full overflow-hidden w-10 h-10 bg-gray-200">
          <img
            src="https://avatars.githubusercontent.com/u/123456?v=4"
            alt="avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <Button variant="outline" className="flex items-center gap-1">
          <Settings size={16} /> View
        </Button>
      </div>
    </div>
  );
};

export default Header;
