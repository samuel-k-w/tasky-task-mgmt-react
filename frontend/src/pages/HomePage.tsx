import Header from "@/components/Header";
import TaskTable from "@/components/TaskTable";

const HomePage = () => {
  return (
    <div className="w-screen max-w-screen h-screen max-h-screen overflow-hidden">
      <Header />
      <TaskTable />
    </div>
  );
};

export default HomePage;
