import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <Card className="mx-auto max-w-sm mt-24">
      <CardHeader>
        <CardTitle className="text-2xl">Reset</CardTitle>
        <CardDescription>
          Enter your email below to reset your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Continue
          </Button>
          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Have a password and want to{" "}
          <Link to="/login" className="underline">
            Sign in
          </Link>
          ?
        </div>
      </CardContent>
    </Card>
  );
};

export default ResetPassword;
