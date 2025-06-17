import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CvTemplate } from "./cvTemplate";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CvTemplate />
  </StrictMode>
);
