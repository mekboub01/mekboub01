import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserListPage from "./pages/UserListPage";
import { BienvenuePage } from "./pages/BienvenuePage";
import NouvelUtilisateurPage from "./pages/NouvelUtilisateurPage";

function Root() {
  return (
    <>
      <h1>SpokApp</h1>;
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
          margin: "1rem",
        }}
      >
        <Link to="./">Accueil</Link>
        <Link to="./users">Utilisateurs</Link>
        <Link to="./users/form">Créer un utilisateur</Link>
      </nav>
      <Outlet />
    </>
  );
}

const users = [
  { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
  { firstName: "Jane", lastName: "Doe", email: "jane.doe@example.com" },
  { firstName: "Jack", lastName: "Doe", email: "Jack.doe@example.com" },
];

function BienvenuePage() {
  return <p>Bienvenue sur mon app de gestion d'utilisateur</p>;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/users",
        element: <BienvenuePage />,
      },
      {
        path: "/users",
        element: (
          <>
            <h1>Liste des utilisateurs</h1>
            <UserTable users={users} />
          </>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <h1>Liste des utilisateurs</h1>
      <RouterProvider router={router} />
      <UserTable users={users} />
    </>
  );
}

export default App;
