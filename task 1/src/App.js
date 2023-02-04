import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Form } from "./components/Form";
import TalkToUs from "./components/TalkToUs/TalkToUs";
import ThankYou from "./components/ThankYou/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TalkToUs/>
  },
  {
    path: "/thankyou",
    element: <ThankYou/>
  },
  {
    path: "/form",
    element: <Form/>
  }
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
