import Header from "@/components/Header";
import TaskTable from "@/components/TaskTable";

const HomePage = () => {
  return (
    <div className="max-h-screen">
      <Header />
      <TaskTable />
    </div>
  );
};

export default HomePage;
