export interface TaskResponse {
  id: string;
  description: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  favorite: boolean;
}

export interface TaskCreate {
  description: string;
  type: string;
  title: string;
  status: string;
  priority: string;
  favorite: boolean;
}

export interface TaskEdit {
  description?: string;
  type?: string;
  title?: string;
  status?: string;
  priority?: string;
  favorite?: boolean;
}

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
}

// export interface AuthStore {
//   user: User | null;
//   token: string | null;
//   setToken: (token: string) => void;
//   login: (user: User, token: string) => void;
//   logout: () => void;
// }
