import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
// import {
//   Settings,
//   MessageCircle,
//   Calendar,
//   Mail,
//   Phone,
//   Globe,
// } from "lucide-react";
import { Button } from "./ui/button";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";

export interface Profile {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  dob: string;
  country: string;
  city: string;
  state: string;
  zip: string;
  address: string;
}

const EditProfile = () => {
  // State for each field
  const [firstName, setFirstName] = useState("samuel");
  const [lastName, setLastName] = useState("k");
  const [phone, setPhone] = useState("25190913109");
  const [email, setEmail] = useState("samuel@example.com");
  const [password, setPassword] = useState("1daoduca");
  const [dob, setDob] = useState("2000");
  const [country, setCountry] = useState("Ethiopia");
  const [city, setCity] = useState("addis ababa");
  const [state, setState] = useState("amhara");
  const [zip, setZip] = useState("1000");
  const [address, setAddress] = useState("13.2, 34.43");

  // React Query mutation for updating the profile
  const mutation = useMutation({
    mutationFn: async (data: Profile) => {
      return await api.put("/user/profile", data); // Replace with your API route
    },
    onSuccess: () => {
      alert("Profile updated successfully!");
    },
    onError: (error) => {
      console.error("Profile update failed:", error);
    },
  });

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    mutation.mutate({
      firstName,
      lastName,
      phone,
      email,
      password,
      dob,
      country,
      city,
      state,
      zip,
      address,
    });
  };

  return (
    <Card className="px-6 col-span-2">
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        <div className="grid grid-cols-1 space-y-2 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <Label>First Name</Label>
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
          </div>
          <div className="space-y-3">
            <Label>Last Name</Label>
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
          </div>
          <div className="space-y-3">
            <Label>Phone</Label>
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone"
            />
          </div>
          <div className="space-y-3">
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div className="space-y-3">
            <Label>Password</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="space-y-3">
            <Label>DOB</Label>
            <Input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
          </div>
          <div className="space-y-3">
            <Label>Country</Label>
            <Input
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              placeholder="Country"
            />
          </div>
          <div className="space-y-3">
            <Label>City</Label>
            <Input
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </div>
          <div className="space-y-3">
            <Label>State</Label>
            <Input
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </div>
          <div className="space-y-3">
            <Label>Zip</Label>
            <Input
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              placeholder="Zip"
            />
          </div>
          <div className="md:col-span-2 space-y-3">
            <Label>Address</Label>
            <Input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Full Address"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <Button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-white"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Updating..." : "Update Profile"}
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={() => window.location.reload()}
          >
            Reset
          </Button>
        </div>
        {mutation.isError && (
          <p className="text-red-500 mt-2">Error: {mutation.error.message}</p>
        )}
      </form>
    </Card>
  );
};

export default EditProfile;
