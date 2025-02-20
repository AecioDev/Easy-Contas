import { Header } from "./header";
import { Footer } from "./footer";
import { useAuth } from "@/context/AuthContext";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { user, isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {isAuthenticated && <Header />}
      <div className="flex flex-grow justify-center items-center p-4 w-full">
        <main className="bg-white w-full max-w-[1000px] aspect-[16/9] rounded-xl shadow-lg p-6">
          {children}
        </main>
      </div>
      {isAuthenticated && <Footer />}
    </div>
  );
}
