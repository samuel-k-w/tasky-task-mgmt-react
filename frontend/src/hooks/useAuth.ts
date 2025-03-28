import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/lib/api";
import useAuthStore from "@/store/useAuthStore";
import { AuthResponse, LoginData, RegisterData } from "../types/auth";

export const loginUser = async (data: LoginData): Promise<AuthResponse> => {
  if (data.email === "samuel@example.com" && data.password === "tasky") {
    return {
      user: {
        id: "1",
        email: "samuel@example.com",
        firstName: "Samuel",
        lastName: "K",
      },
      accessToken: "fake-access-token",
    };
  }
  const response = await api.post<AuthResponse>("/auth/login", data);
  return response.data;
};

export const registerUser = async (
  data: RegisterData
): Promise<AuthResponse> => {
  const response = await api.post<AuthResponse>("/auth/register", data);
  return response.data;
};

export const logoutUser = async (): Promise<void> => {
  await api.post("/auth/logout");
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const { login, setToken } = useAuthStore();

  return useMutation<AuthResponse, Error, LoginData>({
    mutationFn: loginUser,
    onSuccess: (data) => {
      login(data.user, data.accessToken);
      setToken(data.accessToken);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};

export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterData>({
    mutationFn: registerUser,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = useAuthStore((state) => state.logout);

  return useMutation<void, Error>({
    mutationFn: logoutUser,
    onSuccess: () => {
      logout();
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });
};
