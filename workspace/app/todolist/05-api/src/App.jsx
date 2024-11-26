import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
// import router from "./routes";
import router from "./routes.lazy";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
}

export default App;
