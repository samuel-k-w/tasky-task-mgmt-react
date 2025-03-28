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
import { useTasks } from "@/hooks/usetask";
// import { Card } from "./ui/card";

const versions = ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"];

const TaskTable = () => {
  const navigate = useNavigate();
  const [selectedVersion, setSelectedVersion] = useState("");
  const [page, setPage] = useState(1);
  const totalPages = 10;
  const { data: tasks, isLoading, isError } = useTasks(page);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading tasks</p>;
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
              {tasks?.map((task) => (
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
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />
      </div>
    </>
  );
};

export default TaskTable;
