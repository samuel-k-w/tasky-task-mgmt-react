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
  // ChevronsUpDown,
  ArrowUp,
  ArrowDown,
  CircleSlash,
} from "lucide-react";
import Pagination from "./Pagination";
import { useNavigate } from "react-router-dom";
import { useDeleteTask, useFavoriteTask, useTasks } from "@/hooks/usetask";
// import { Separator } from "./ui/separator";
// import { Card } from "./ui/card";

type OrderDirection = "asc" | "desc" | "hide";
type OrderBy = "title" | "status" | "priority";

const ordering = [
  { label: "Asc", value: "asc", icon: <ArrowUp /> },
  { label: "Desc", value: "desc", icon: <ArrowDown /> },
  { label: "Hide", value: "hide", icon: <CircleSlash /> },
];

const TaskTable = ({
  handleOrderChange,
  orderConfig,
}: {
  handleOrderChange: (field: OrderBy, direction: OrderDirection) => void;
  orderConfig: {
    title: OrderDirection;
    status: OrderDirection;
    priority: OrderDirection;
  };
}) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteTask();
  const favoriteMutate = useFavoriteTask();

  const [isSelected, setIsSelected] = useState<string[]>([]);

  // const [orderConfig, setOrderConfig] = useState<{
  //   title: OrderDirection;
  //   status: OrderDirection;
  //   priority: OrderDirection;
  // }>({
  //   title: "asc",
  //   status: "asc",
  //   priority: "asc",
  // });

  // const [selectedVersion, setSelectedVersion] = useState("");
  // const [selectedVersion, setSelectedVersion] = useState("");
  // const [selectedVersion, setSelectedVersion] = useState("");
  const [page, setPage] = useState(1);
  const { data: tasks, isLoading, isError } = useTasks(page);
  const totalPages = 10;

  // const handleOrderChange = (field: OrderBy, direction: OrderDirection) => {
  //   setOrderConfig((prev) => ({
  //     ...prev,
  //     [field]: direction,
  //   }));
  // };

  const bulkSelect = () => {
    if (tasks)
      setIsSelected((prevSelected) => [
        ...new Set([...prevSelected, ...tasks.map((task) => task.id)]),
      ]);
  };

  const singleSelect = (id: string) => {
    setIsSelected((prevSelected) => [...new Set([...prevSelected, id])]);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading tasks</p>;

  return (
    <>
      <div className="mx-2 my-auto md:mx-5 border rounded-md overflow-hidden h-full">
        <Table>
          <ScrollArea className="md:h-106 h-140">
            <TableHeader className="sticky top-0 z-10 bg-blue-500">
              <TableRow>
                <TableCell className="pr-4">
                  <Checkbox onClick={bulkSelect} defaultValue={isSelected} />
                </TableCell>
                <TableCell>
                  <div className="flex justify-start items-center gap-0.5 leading-none">
                    <span className="font-semibold">Task</span>
                  </div>
                </TableCell>
                {orderConfig.title !== "hide" && (
                  <TableCell>
                    <DropdownMenu>
                      <Button variant={"outline"}>
                        <DropdownMenuTrigger asChild>
                          <div className="flex justify-start items-center gap-0.5 leading-none w-20">
                            <span className="font-semibold">Title</span>
                            {orderConfig.title === "asc" ? (
                              <ArrowUp className="ml-auto" />
                            ) : (
                              <ArrowDown className="ml-auto" />
                            )}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {ordering.map((version) => (
                            <DropdownMenuItem
                              key={`title-${version.value}`}
                              onSelect={() =>
                                handleOrderChange(
                                  "title",
                                  version.value as OrderDirection
                                )
                              }
                            >
                              {version.icon} {version.label}
                              {version.value === orderConfig.title && (
                                <Check className="ml-auto" />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </Button>
                    </DropdownMenu>
                  </TableCell>
                )}
                {orderConfig.status !== "hide" && (
                  <TableCell>
                    <DropdownMenu>
                      <Button variant={"outline"}>
                        <DropdownMenuTrigger asChild>
                          <div className="flex justify-start items-center gap-0.5 leading-none w-20">
                            <span className="font-semibold">Status</span>
                            {orderConfig.status === "asc" ? (
                              <ArrowUp className="ml-auto" />
                            ) : (
                              <ArrowDown className="ml-auto" />
                            )}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {ordering.map((version) => (
                            <DropdownMenuItem
                              key={`status-${version.value}`}
                              onSelect={() =>
                                handleOrderChange(
                                  "status",
                                  version.value as OrderDirection
                                )
                              }
                            >
                              {version.icon} {version.label}
                              {version.value === orderConfig.status && (
                                <Check className="ml-auto" />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </Button>
                    </DropdownMenu>
                  </TableCell>
                )}
                {orderConfig.priority !== "hide" && (
                  <TableCell>
                    <DropdownMenu>
                      <Button variant={"outline"}>
                        <DropdownMenuTrigger asChild>
                          <div className="flex justify-start items-center gap-0.5 leading-none w-20">
                            <span className="font-semibold">Priority</span>
                            {orderConfig.priority === "asc" ? (
                              <ArrowUp className="ml-auto" />
                            ) : (
                              <ArrowDown className="ml-auto" />
                            )}
                          </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {ordering.map((version) => (
                            <DropdownMenuItem
                              key={`priority-${version.value}`}
                              onSelect={() =>
                                handleOrderChange(
                                  "priority",
                                  version.value as OrderDirection
                                )
                              }
                            >
                              {version.icon} {version.label}
                              {version.value === orderConfig.priority && (
                                <Check className="ml-auto" />
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </Button>
                    </DropdownMenu>
                  </TableCell>
                )}
                <TableCell />
              </TableRow>
            </TableHeader>

            <TableBody className="w-full">
              {tasks?.map((task) => (
                <TableRow key={task.id}>
                  <TableCell onClick={() => singleSelect(task.id)}>
                    <Checkbox />
                  </TableCell>
                  <TableCell
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/detail/${task.id}`, { state: { task } })
                    }
                  >
                    {task.id}
                  </TableCell>
                  {orderConfig.title !== "hide" && (
                    <TableCell
                      className="cursor-pointer"
                      onClick={() =>
                        navigate(`/detail/${task.id}`, { state: { task } })
                      }
                    >
                      <span className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                        {task.type}
                      </span>{" "}
                      {task.title}
                    </TableCell>
                  )}

                  {orderConfig.status !== "hide" && (
                    <TableCell>
                      <div className="flex gap-1.5 justify-start items-center">
                        {task.status === "In Progress" && <Clock size={20} />}
                        {task.status === "Backlog" && (
                          <ArrowUpRight size={20} />
                        )}
                        {task.status === "Canceled" && <XCircle size={20} />}
                        {task.status === "Done" && <CheckCircle size={20} />}
                        {task.status === "Todo" && <Circle size={20} />}
                        <span>{task.status}</span>
                      </div>
                    </TableCell>
                  )}

                  {orderConfig.priority !== "hide" && (
                    <TableCell>
                      <span
                        className={`inline-block w-3 h-3 rounded-full ${
                          task.priority === "High"
                            ? "bg-[#ff006e]"
                            : task.priority === "Medium"
                            ? "bg-[#fb5607]"
                            : "bg-[#3a86ff]"
                        }`}
                      />
                      {task.priority}
                    </TableCell>
                  )}
                  <TableCell>
                    <Button variant={"ghost"}>
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <MoreVertical />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuItem onClick={() => mutate(task.id)}>
                            Delete
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              navigate(`/detail/${task.id}`, {
                                state: { task },
                              })
                            }
                          >
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() => {
                              const id = task.id;
                              const favorite = task.favorite;
                              favoriteMutate.mutate({ id, favorite });
                            }}
                          >
                            Favotite
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
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
