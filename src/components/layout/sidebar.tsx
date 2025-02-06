"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Lançamentos", href: "/lancamentos" },
  { name: "Relatórios", href: "/relatorios" },
  { name: "Ofertas e Preços", href: "/precos" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full w-64 p-4">
      <h2 className="mb-4 text-lg font-semibold tracking-tight">Menu</h2>
      <nav className="space-y-1">
        {sidebarItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-gray-100"
              )}
            >
              {item.name}
            </Button>
          </Link>
        ))}
      </nav>
    </div>
  );
}
