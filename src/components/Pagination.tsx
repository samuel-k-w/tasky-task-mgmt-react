import { Button } from "./ui/button";

const Pagination = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <p>0 of 100 row(s) selected.</p>
      <div className="flex items-center gap-2">
        <span>Rows per page</span>
        <select className="border rounded-md p-1">
          <option>10</option>
          <option>20</option>
          <option>50</option>
        </select>
        <span>Page 1 of 10</span>
        <Button variant="ghost">{"<<"}</Button>
        <Button variant="ghost">{"<"}</Button>
        <Button variant="ghost">{">"}</Button>
        <Button variant="ghost">{">>"}</Button>
      </div>
    </div>
  );
};

export default Pagination;
