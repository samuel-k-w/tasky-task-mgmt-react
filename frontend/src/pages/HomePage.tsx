import Header from "@/components/Header";
import TaskTable from "@/components/TaskTable";
import { useState } from "react";

type OrderDirection = "asc" | "desc" | "hide";
type OrderBy = "title" | "status" | "priority";

const HomePage = () => {
  const [orderConfig, setOrderConfig] = useState<{
    title: OrderDirection;
    status: OrderDirection;
    priority: OrderDirection;
  }>({
    title: "asc",
    status: "asc",
    priority: "asc",
  });
  const handleOrderChange = (field: OrderBy, direction: OrderDirection) => {
    setOrderConfig((prev) => ({
      ...prev,
      [field]: direction,
    }));
  };
  return (
    <div className="max-w-screen max-h-screen">
      <Header handleOrderChange={handleOrderChange} orderConfig={orderConfig} />
      <TaskTable
        handleOrderChange={handleOrderChange}
        orderConfig={orderConfig}
      />
    </div>
  );
};

export default HomePage;
