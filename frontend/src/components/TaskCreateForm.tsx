import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Checkbox } from "./ui/checkbox";

const type = [
  { label: "Documentation" },
  { label: "Bug" },
  { label: "Feature" },
];
const status = [
  { label: "In Progress" },
  { label: "Backlog" },
  { label: "Todo" },
  { label: "Canceled" },
  { label: "Done" },
];

const priority = [{ label: "Medium" }, { label: "High" }, { label: "Low" }];

export const TaskCreateForm = () => {
  return (
    <form
      className="grid md:grid-cols-3 gap-4 p-5"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Create New Task</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className=" space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                required
                className="input"
              />{" "}
            </div>
            <div className=" space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Description"
                required
                className="textarea"
              />
            </div>
            <div className="flex gap-5">
              <div className=" space-y-2">
                <Label htmlFor="title">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {type.map((item) => (
                      <SelectItem value={item.label}>{item.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=" space-y-2">
                <Label htmlFor="title">Priority</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priority.map((item) => (
                      <SelectItem value={item.label}>{item.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className=" space-y-2">
              <Label htmlFor="title">Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {status.map((item) => (
                    <SelectItem value={item.label}>{item.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className=" space-y-2">
              <Label className="flex items-center gap-2 p-2 hover:bg-muted/50 rounded">
                <Checkbox
                // checked={field.value}
                // onCheckedChange={field.onChange}
                />
                <span>Favorite</span>
              </Label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* <Button type="submit">Save</Button> */}
      <div className="flex md:flex-col md:justify-start justify-between  mb-4 gap-4">
        <Button
          variant="outline"
          className="text-sky-500 border-sky-500 hover:bg-sky-500 hover:text-white"
        >
          ✈️ Save
        </Button>

        <Button
          variant="outline"
          className="text-teal-500 border-teal-500 hover:bg-teal-500 hover:text-white"
        >
          ✅ Save Draft
        </Button>
        <Button
          variant="outline"
          className="text-red-500 border-red-500 hover:bg-red-500 hover:text-white"
        >
          ❌ Discard
        </Button>
      </div>
    </form>
  );
};
