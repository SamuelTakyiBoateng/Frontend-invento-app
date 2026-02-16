

import ReactDom from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { Provider as JotaiProvider } from "jotai";
import { router } from "./router";
import "./index.css";

ReactDom.createRoot(document.getElementById("root")!).render(
  <JotaiProvider>
    <RouterProvider router={router}/>
  </JotaiProvider>
)