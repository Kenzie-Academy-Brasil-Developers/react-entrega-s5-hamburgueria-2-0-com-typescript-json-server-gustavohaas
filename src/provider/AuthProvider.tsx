import { createContext, useContext, useState, ReactNode, useCallback } from "react";
import { api } from "../services/api";

interface User {
    email: string;
    id: string;
    name: string;
}

interface LogInCredentials {
    email: string;
    password: string;
}

interface AuthContextData {
    user: User;
    accessToken: string;
    logIn: (credentials: LogInCredentials) => Promise<void>;
    logOut: () => void;
}

interface AuthState {
    accessToken: string;
    user: User;
}

interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const useAuth = () => {
    
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
      }
    
      return context;
};

const AuthProvider = ({ children }: AuthProviderProps) => {
    
    const [data, setData] = useState<AuthState>(() => {
      const accessToken = localStorage.getItem("@Hamburgueria:accessToken");
      const user = localStorage.getItem("@Hamburgueria:user");
  
      if (accessToken && user) {
        return { accessToken, user: JSON.parse(user) };
      }
  
      return {} as AuthState;
    });

    const logIn = useCallback(async ({ email, password }: LogInCredentials) => {
        const response = await api.post("/login", { email, password });
    
        const { accessToken, user } = response.data;
    
        localStorage.setItem("@Hamburgueria:accessToken", accessToken);
        localStorage.setItem("@Hamburgueria:user", JSON.stringify(user));
    
        setData({ accessToken, user });

    }, []);
    
    const logOut = useCallback(() => {
        localStorage.removeItem("@Doit:accessToken");
        localStorage.removeItem("@Doit:user");
    
        setData({} as AuthState);
    }, []);

    return (
        <AuthContext.Provider
          value={{
            accessToken: data.accessToken,
            user: data.user,
            logIn,
            logOut,
          }}
        >
          {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, useAuth };