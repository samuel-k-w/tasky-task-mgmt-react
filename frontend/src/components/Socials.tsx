import { Card } from "./ui/card";
import { Switch } from "./ui/switch";
// import { Switch } from "@radix-ui/react-switch";

const Socials = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-2">Accounts</h3>
      {["Google", "Instagram", "Github", "StackOverflow"].map((platform) => (
        <div key={platform} className="flex items-center justify-between">
          <span className="text-sm">{platform}</span>
          <Switch defaultChecked />
        </div>
      ))}
    </Card>
  );
};

export default Socials;
