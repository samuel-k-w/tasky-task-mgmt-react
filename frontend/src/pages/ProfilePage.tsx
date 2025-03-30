import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import {
  Settings,
  // MessageCircle,
  // Calendar,
  // Mail,
  // Phone,
  // Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import EditProfile from "../components/EditProfile";
import About from "../components/About";
import Socials from "../components/Socials";

export default function Profile() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="text-gray-500 flex items-center space-x-2">
          <Link to="/">
            <Button>Home</Button>
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"outline"}>
              Settings <Settings />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuItem className="bg-red-500">Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Profile Card */}
      <Card className="relative  shadow-md rounded-xl p-6 flex flex-col items-center">
        {/* Profile Avatar */}
        <Avatar className="w-24 h-24 border-4 border-white shadow-md absolute -top-12">
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Jhon Deo"
          />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        {/* User Details */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Samuel K</h2>
          <p className="text-gray-500">Engineer at Software Agency Industry</p>
          <p className="text-sm text-gray-400">Debre Berhan. Ethiopia</p>
        </div>
        {/* Skill Tags */}
        <div className="flex flex-wrap gap-3 mt-2">
          {["UX Research", "CX Strategy", "Management", "Developer"].map(
            (tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-[14px] md:text-sm rounded-full border-amber-300 border-2"
              >
                {tag}
              </span>
            )
          )}
        </div>
        {/* Send Message Button */}
        {/* <Button className="mt- bg-gradient-to-r from-pink-500 to-purple-500 text-white flex items-center">
          <MessageCircle size={16} className="mr-2" /> Send Message
        </Button> */}
      </Card>

      {/* Main Content Grid */}
      <main className="grid grid-cols-1 md:grid-cols-3 gap-y-6 md:gap-6 mt-8">
        <EditProfile />
        {/* Right Sidebar */}
        <aside className="space-y-6">
          <About />
          <Socials />
        </aside>
      </main>
    </div>
  );
}
