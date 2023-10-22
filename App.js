import { StatusBar } from "expo-status-bar";
import AppNavigation from "./src/navigation/appNavigation";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNavigation />
    </>
  );
}
