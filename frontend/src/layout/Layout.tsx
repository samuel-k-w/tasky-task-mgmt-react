import Header from "@/components/Header";
import { useState } from "react";

type OrderDirection = "asc" | "desc" | "hide";
type OrderBy = "title" | "status" | "priority";

const Layout = ({ children }: { children: React.ReactNode }) => {
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
      <main>{children}</main>
    </div>
  );
};

export default Layout;
