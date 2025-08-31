import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import Footer from "@/components/Footer.tsx";
import Header from "@/components/Header.tsx";
import type { QueryClient } from "@tanstack/react-query";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <div className="bg-[#e4e0d5]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  ),
});
