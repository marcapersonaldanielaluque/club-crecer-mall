import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Defensive: prevent browser extensions from crashing React's DOM reconciliation
const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(<App />);
