import { useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  MoreVertical,
  ArrowUpRight,
  Clock,
  XCircle,
  CheckCircle,
  Circle,
} from "lucide-react";
import Pagination from "./Pagination";

const tasks = [
  {
    id: "TASK-8782",
    tag: "Documentation",
    title:
      "You can't compress the program without quantifying the open-source SSD...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7878",
    tag: "Documentation",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-7839",
    tag: "Bug",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
  },
  {
    id: "TASK-5562",
    tag: "Feature",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back ...",
    status: "Backlog",
    priority: "Medium",
  },
  {
    id: "TASK-8686",
    tag: "Feature",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "Canceled",
    priority: "Medium",
  },
  {
    id: "TASK-1280",
    tag: "Bug",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-7262",
    tag: "Feature",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back...",
    status: "Done",
    priority: "High",
  },
  {
    id: "TASK-1138",
    tag: "Feature",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p S...",
    status: "In Progress",
    priority: "Medium",
  },
  {
    id: "TASK-7184",
    tag: "Feature",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
  },
  {
    id: "TASK-5160",
    tag: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
  },
];

const TaskTable = () => {
  return (
    <div className="p-4">
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Task</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Priority</TableCell>
            <TableCell>
              <MoreVertical />
            </TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>{task.id}</TableCell>
              <TableCell>
                <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                  {task.tag}
                </span>{" "}
                {task.title}
              </TableCell>
              <TableCell>
                <div className="flex gap-1.5 justify-start items-center">
                  {task.status === "In Progress" && <Clock size={20} />}
                  {task.status === "Backlog" && <ArrowUpRight size={20} />}
                  {task.status === "Canceled" && <XCircle size={20} />}
                  {task.status === "Done" && <CheckCircle size={20} />}
                  {task.status === "Todo" && <Circle size={20} />}
                  <span>{task.status}</span>
                </div>
              </TableCell>
              <TableCell>{task.priority}</TableCell>
              <TableCell>
                <Button variant="ghost">
                  <MoreVertical />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination />
    </div>
  );
};

export default TaskTable;
