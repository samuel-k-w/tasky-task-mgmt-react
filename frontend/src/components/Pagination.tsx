import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { PaginationProps } from "@/types/task";

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [page, setCurrentPage] = useState(1);
  const totalRows = 100;
  // const totalPages = Math.ceil(totalRows / rowsPerPage);

  // const handlePageChange = (newPage: number) => {
  //   if (newPage >= 1 && newPage <= totalPages) {
  //     setCurrentPage(newPage);
  //   }
  // };

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 p-3 border-t border-gray-700 text-sm text-gray-400">
      {/* Row Selection Info */}
      <span className="whitespace-nowrap">{`0 of ${totalRows} row(s) selected.`}</span>

      {/* Pagination Controls */}
      <div className="flex items-center gap-3 w-full sm:w-auto justify-between">
        {/* Rows Per Page Dropdown */}
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline">Rows per page</span>
          <Select onValueChange={(value) => setRowsPerPage(Number(value))}>
            <SelectTrigger className="w-20">
              <SelectValue placeholder={rowsPerPage} />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 50, 100].map((size) => (
                <SelectItem key={size} value={size.toString()}>
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Page Info */}
        <span className="text-center">{`Page ${page} of ${totalPages}`}</span>

        {/* Navigation Buttons */}
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            // disabled={page === 1}
            // onClick={() => handlePageChange(1)}
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="p-2"
          >
            <ChevronsLeft className="w-5 h-5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            // disabled={page === 1}
            // onClick={() => handlePageChange(page - 1)}
            onClick={() => onPageChange(page + 1)}
            disabled={page >= totalPages}
            className="p-2"
          >
            <ChevronLeft className="w-5 h-5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            disabled={page === totalPages}
            // onClick={() => handlePageChange(page + 1)}
            className="p-2"
          >
            <ChevronRight className="w-5 h-5 sm:w-4 sm:h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            disabled={page === totalPages}
            // onClick={() => handlePageChange(totalPages)}
            className="p-2"
          >
            <ChevronsRight className="w-5 h-5 sm:w-4 sm:h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
