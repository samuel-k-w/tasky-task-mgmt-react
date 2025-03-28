import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  Check,
  // GalleryVerticalEnd,
  ChevronsUpDown,
} from "lucide-react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
// import { Card } from "./ui/card";

const versions = ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"];

const tasks = [
  {
    id: "TASK-8782",
    description: "any description",
    type: "Documentation",
    title:
      "You can't compress the program without quantifying the open-source SSD...",
    status: "In Progress",
    priority: "Medium",
    favorite: true,
  },
  {
    id: "TASK-7878",
    description: "any description",
    type: "Documentation",
    title:
      "Try to calculate the EXE feed, maybe it will index the multi-byte pixel!",
    status: "Backlog",
    priority: "Medium",
    favorite: true,
  },
  {
    id: "TASK-7839",
    description: "any description",
    type: "Bug",
    title: "We need to bypass the neural TCP card!",
    status: "Todo",
    priority: "High",
    favorite: true,
  },
  {
    id: "TASK-5562",
    description: "any description",
    type: "Feature",
    title:
      "The SAS interface is down, bypass the open-source pixel so we can back ...",
    status: "Backlog",
    priority: "Medium",
    favorite: true,
  },
  {
    id: "TASK-8686",
    description: "any description",
    type: "Feature",
    title:
      "I'll parse the wireless SSL protocol, that should driver the API panel!",
    status: "Canceled",
    priority: "Medium",
    favorite: false,
  },
  {
    id: "TASK-1280",
    description: "any description",
    type: "Bug",
    title:
      "Use the digital TLS panel, then you can transmit the haptic system!",
    status: "Done",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-7262",
    description: "any description",
    type: "Feature",
    title:
      "The UTF8 application is down, parse the neural bandwidth so we can back...",
    status: "Done",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-1138",
    description: "any description",
    type: "Feature",
    title:
      "Generating the driver won't do anything, we need to quantify the 1080p S...",
    status: "In Progress",
    priority: "Medium",
    favorite: false,
  },
  {
    id: "TASK-7184",
    description: "any description",
    type: "Feature",
    title: "We need to program the back-end THX pixel!",
    status: "Todo",
    priority: "Low",
    favorite: false,
  },
  {
    id: "TASK-5160",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5160",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5160",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5160",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5160",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
];

const TaskTable = () => {
  const [selectedVersion, setSelectedVersion] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="mx-2 my-auto md:mx-5 border rounded-md overflow-hidden h-full">
        <Table>
          <ScrollArea className="md:h-106 h-140">
            <TableHeader className="sticky top-0 z-10 bg-blue-500">
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-start items-center gap-0.5 leading-none">
                        <span className="font-semibold">Task</span>
                        <ChevronsUpDown className="ml-auto" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {versions.map((version) => (
                        <DropdownMenuItem
                          key={version}
                          onSelect={() => setSelectedVersion(version)}
                        >
                          v{version}{" "}
                          {version === selectedVersion && (
                            <Check className="ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-start items-center gap-0.5 leading-none">
                        <span className="font-semibold">Title</span>
                        <ChevronsUpDown className="ml-auto" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {versions.map((version) => (
                        <DropdownMenuItem
                          key={version}
                          onSelect={() => setSelectedVersion(version)}
                        >
                          v{version}{" "}
                          {version === selectedVersion && (
                            <Check className="ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-start items-center gap-0.5 leading-none">
                        <span className="font-semibold">Status</span>
                        <ChevronsUpDown className="ml-auto" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {versions.map((version) => (
                        <DropdownMenuItem
                          key={version}
                          onSelect={() => setSelectedVersion(version)}
                        >
                          v{version}{" "}
                          {version === selectedVersion && (
                            <Check className="ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <div className="flex justify-start items-center gap-0.5 leading-none">
                        <span className="font-semibold">Priority</span>
                        <ChevronsUpDown className="ml-auto" />
                      </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {versions.map((version) => (
                        <DropdownMenuItem
                          key={version}
                          onSelect={() => setSelectedVersion(version)}
                        >
                          v{version}{" "}
                          {version === selectedVersion && (
                            <Check className="ml-auto" />
                          )}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Button variant="ghost">
                    <MoreVertical />
                  </Button>
                </TableCell>
              </TableRow>
            </TableHeader>

            <TableBody className="w-full cursor-pointer">
              {tasks.map((task) => (
                <TableRow
                  key={task.id}
                  onClick={() =>
                    navigate(`/detail/${task.id}`, { state: { task } })
                  }
                >
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>{task.id}</TableCell>
                  <TableCell>
                    <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                      {task.type}
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
          </ScrollArea>
        </Table>
        <Pagination />
      </div>
    </>
  );
};

export default TaskTable;
