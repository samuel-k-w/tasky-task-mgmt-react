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
import { useLocation } from "react-router-dom";
import { useState } from "react";

const types = [
  { label: "Documentation" },
  { label: "Bug" },
  { label: "Feature" },
];
const statuses = [
  { label: "In Progress" },
  { label: "Backlog" },
  { label: "Todo" },
  { label: "Canceled" },
  { label: "Done" },
];

const priorities = [{ label: "Medium" }, { label: "High" }, { label: "Low" }];

export const TaskEditForm = () => {
  const location = useLocation();
  const task = location.state?.task;

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [type, setType] = useState(task.type);
  const [status, setStatus] = useState(task.status);
  const [favorite, setFavorite] = useState(task.favorite);

  // const handleSubmit = (e: Event) => {
  //   e.preventDefault();
  // };
  return (
    <form className="grid md:grid-cols-3 gap-4 p-5">
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Edit Your Task</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className=" space-y-2">
              <Label htmlFor="title">Task ID</Label>
              <Input
                type="text"
                placeholder="Task - ID"
                required
                className="input overflow-hidden"
                value={task.id}
                disabled
              />{" "}
            </div>
            <div className=" space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                placeholder="Title"
                required
                className="input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />{" "}
            </div>
            <div className=" space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                placeholder="Description"
                required
                className="textarea"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex gap-5">
              <div className=" space-y-2">
                <Label htmlFor="title">Type</Label>
                <Select value={type} onValueChange={setType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    {types.map((item) => (
                      <SelectItem key={item.label} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className=" space-y-2">
                <Label htmlFor="title">Priority</Label>
                <Select value={priority} onValueChange={setPriority}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    {priorities.map((item) => (
                      <SelectItem key={item.label} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" space-y-2">
              <Label htmlFor="title">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  {statuses.map((item) => (
                    <SelectItem key={item.label} value={item.label}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className=" space-y-2">
              <Label className="flex items-center gap-2 p-2 hover:bg-muted/50 ">
                <Checkbox
                  checked={favorite}
                  onCheckedChange={() => setFavorite(!favorite)}
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
          ❌ Delete
        </Button>
      </div>
    </form>
  );
};
