import api from "@/lib/api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { TaskResponse } from "@/types/task";

const tasks: TaskResponse[] = [
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
    id: "TASK-5170",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5162",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5163",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5164",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
  {
    id: "TASK-5165",
    description: "any description",
    type: "Documentation",
    title:
      "Calculating the bus won't do anything, we need to navigate the back-end ...",
    status: "In Progress",
    priority: "High",
    favorite: false,
  },
];

export const fetchTasks = async (page: number): Promise<TaskResponse[]> => {
  if (tasks) {
    return tasks;
  }
  const response = await api.get(`/tasks?page=${page}`);
  return response.data;
};

export const fetchTask = async (id: string): Promise<TaskResponse> => {
  const task = tasks?.find((task) => task.id === id);
  if (task) return task;

  const response = await api.get(`/tasks/${id}`);
  return response.data;
};

export const createTask = async (
  task: Partial<TaskResponse>
): Promise<TaskResponse> => {
  const response = await api.post("/tasks", task);
  return response.data;
};

export const updateTask = async ({
  id,
  ...updates
}: Partial<TaskResponse> & { id: string }): Promise<TaskResponse> => {
  const response = await api.put(`/tasks/${id}`, updates);
  return response.data;
};

export const deleteTask = async (id: string): Promise<void> => {
  await api.delete(`/tasks/${id}`);
};

export const favoriteTask = async ({
  id,
  favorite,
}: Partial<TaskResponse> & { id: string }): Promise<TaskResponse> => {
  const response = await api.patch(`/tasks/${id}`, { favorite });
  return response.data;
};

// Fetch paginated tasks
export const useTasks = (page: number) => {
  return useQuery<TaskResponse[]>({
    queryKey: ["tasks", page],
    queryFn: () => fetchTasks(page),
    // keepPreviousData: true, // Keeps previous data while fetching new data
  });
};

// Fetch single task
export const useTask = (id: string) => {
  return useQuery<TaskResponse>({
    queryKey: ["task", id],
    queryFn: () => fetchTask(id),
    enabled: !!id, // Prevents unnecessary calls
  });
};

// Create task
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] }); // Refetch tasks
    },
  });
};

// Update task
export const useUpdateTask = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateTask,
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      queryClient.invalidateQueries({ queryKey: ["task", id] });
    },
  });
};

// Delete task
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};

// Delete task
export const useFavoriteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: favoriteTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
};
