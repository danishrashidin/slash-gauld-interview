import { createBrowserRouter } from "react-router";
import App from "./App";
import IssuesPage from "./pages/Issues";
import AddIssuePage from "./pages/AddIssue";

export const router = createBrowserRouter([
  {
    index: true,
    Component: App,
  },
  {
    path: "/issues",
    Component: IssuesPage,
  },
  { path: "/issues/add", Component: AddIssuePage },
]);
