"use client";

import { useAuth } from "@/context/AuthContext";
import { Layout } from "@/components/layout/layout";
import Dashboard from "../dashboard/page";
import LoginPage from "../login/page";
import { redirect } from "next/navigation";

// export default function HomePage() {
//   const { user, isAuthenticated } = useAuth();
//   console.log(user);
//   return <Layout>{!isAuthenticated ? <LoginPage /> : <Dashboard />}</Layout>;
// }

export default function HomePage() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}
