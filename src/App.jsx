import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//pages
import {
  ChangePass,
  Chats,
  LoginTest,
  Registration,
  Search,
  SetApp,
  SetProfile,
} from "./pages";

//layouts
import { RootLayout, SettingsLayout, AuthLayout } from "./layouts";

//Home ...... FIXE ME
import { Home } from "./Home";

//css
import "./index.css";
let isLoggedIn = true;
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home id={4} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/settings" element={<SettingsLayout />}>
          <Route path="profile" element={<SetProfile />} />
          <Route path="app" element={<SetApp />} />
        </Route>
      </Route>
      <Route path="/auth" element={<AuthLayout />}>
        <Route path="login" element={<LoginTest />} />
        <Route path="registration" element={<Registration />} />
        <Route path="changepass" element={<ChangePass />} />
      </Route>
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
