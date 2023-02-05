import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TalkToUs from "./components/TalkToUs/TalkToUs";
import ThankYou from "./components/ThankYou/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TalkToUs />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
