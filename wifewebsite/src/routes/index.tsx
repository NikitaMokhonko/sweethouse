import { createFileRoute } from "@tanstack/react-router";
import Index from "@/components/Index";
import WelcomeScreen from "@/components/WelcomeScreen";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <WelcomeScreen />
      <Index />
    </>
  );
}
