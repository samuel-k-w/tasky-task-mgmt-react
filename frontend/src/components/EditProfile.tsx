import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import {
  Settings,
  MessageCircle,
  Calendar,
  Mail,
  Phone,
  Globe,
} from "lucide-react";
import { Button } from "./ui/button";

const EditProfile = () => {
  return (
    <Card className="p-6 col-span-2">
      <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
      <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <Label>First Name</Label>
          <Input placeholder="First Name" />
        </div>
        <div className="space-y-3">
          <Label>Last Name</Label>
          <Input placeholder="Last Name" />
        </div>
        <div className="space-y-3">
          <Label>Phone</Label>
          <Input placeholder="Phone" />
        </div>
        <div className="space-y-3">
          <Label>Email</Label>
          <Input type="email" placeholder="Email" />
        </div>
        <div className="space-y-3">
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
        <div className="space-y-3">
          <Label>DOB</Label>
          <Input type="date" />
        </div>
        <div className="space-y-3">
          <Label>Country</Label>
          <Input placeholder="Country" />
        </div>
        <div className="space-y-3">
          <Label>City</Label>
          <Input placeholder="City" />
        </div>
        <div className="space-y-3">
          <Label>State</Label>
          <Input placeholder="State" />
        </div>
        <div className="space-y-3">
          <Label>Zip</Label>
          <Input placeholder="Zip" />
        </div>
        <div className="md:col-span-2 space-y-3">
          <Label>Address</Label>
          <Input placeholder="Full Address" />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <Button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">
          Update Profile
        </Button>
        <Button variant="outline">Reset</Button>
      </div>
    </Card>
  );
};

export default EditProfile;
