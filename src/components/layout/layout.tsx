import { Header } from "./header";
import { Footer } from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Header />
      <div className="flex-grow flex justify-center items-center p-4 w-full">
        <main
          className="bg-white w-full max-w-[1000px] aspect-[8/11] rounded-xl shadow-lg p-6"
          style={{
            minHeight: "70vh", // Tamanho mínimo em desktops
            maxHeight: "90vh", // Evita ocupar toda a tela
          }}
        >
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
