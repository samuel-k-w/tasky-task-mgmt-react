import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { TableHeader, TableRow, TableCell } from "@/components/ui/table";
import { Checkbox } from "./ui/checkbox";

const TableHeader = () => {
  return (
    <TableHeader className="sticky top-0 z-10 bg-blue-600">
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
                  {version === selectedVersion && <Check className="ml-auto" />}
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
                  {version === selectedVersion && <Check className="ml-auto" />}
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
                  {version === selectedVersion && <Check className="ml-auto" />}
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
                  {version === selectedVersion && <Check className="ml-auto" />}
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
  );
};

export default TableHeader;
