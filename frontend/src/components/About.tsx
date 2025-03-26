import { Button } from "./ui/button";
import { Card } from "./ui/card";

const About = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">About</h3>
      <div className="space-y-2">
        <p className="text-sm">
          <strong>Full Name:</strong> Jhon Deo
        </p>
        <p className="text-sm">
          <strong>Status:</strong> Active
        </p>
        <p className="text-sm">
          <strong>Role:</strong> Developer
        </p>
        <p className="text-sm">
          <strong>Country:</strong> USA
        </p>
        <p className="text-sm">
          <strong>Language:</strong> English
        </p>
        <p className="text-sm">
          <strong>Email:</strong> jhon.xyz
        </p>
        <p className="text-sm">
          <strong>Phone:</strong> (124) 895-6724
        </p>
      </div>
      <Button className="mt-4 bg-purple-500 text-white">Edit</Button>
    </Card>
  );
};

export default About;
