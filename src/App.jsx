import { BrowserRouter, Route, Routes } from "react-router";
import GlobalStyles from "./Style/GlobalStyles";
import { Toaster } from "react-hot-toast";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Files from "./pages/Files";
import Starred from "./pages/Starred";
import Archived from "./pages/Archived";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/files" element={<Files />} />
            <Route path="/files-starred" element={<Starred />} />
            <Route path="/files-archived" element={<Archived />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px ",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
