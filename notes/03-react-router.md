# React Router Instructor Notes

Use this step-by-step workflow whenever you add navigation, new screens, or restructure routes.

## 1. Install & baseline setup

1. `npm install react-router-dom`
2. Create `src/app/router.jsx` (or similar) to define the router with `createBrowserRouter`.
3. Wrap the app root in `RouterProvider` via `src/main.jsx`.

```jsx
// src/app/router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App.jsx";
import { SchemaPage } from "./routes/schema";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ index: true, element: <SchemaPage /> }],
  },
]);

export const AppRouter = () => <RouterProvider router={router} />;
```

## 2. App shell layout

- `App.jsx` hosts global UI (header/nav/footer) and renders `<Outlet />` for child routes.
- Use `NavLink` for navigation so active styles work automatically.

```jsx
function App() {
  return (
    <div className="app-shell">
      <header>
        <h1>OntoFlow</h1>
        <nav>
          <NavLink to="/" end>
            Schema Explorer
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

## 3. Creating a new route

1. Place the page component under `src/app/routes/<feature>/<PageName>.jsx`.
2. Export it via `index.js` (barrel) for clean imports.
3. Add a route entry in `router.jsx`.
4. Add a `NavLink` or `Link` in the header (or contextually).

```jsx
// 1. New page
export const ReportsPage = () => <div>Reports</div>;

// 2. Barrel
export { ReportsPage } from './ReportsPage.jsx';

// 3. Router entry
{
  path: '/reports',
  element: <ReportsPage />,
}

// 4. Nav
<NavLink to="/reports">Reports</NavLink>
```

## 4. Data fetching per route

- Keep data hooks (`useSchema`) inside `features/` so routes stay thin.
- Use `loader` functions if you want server-side data preloading (optional).
- Display loading/error states inside the route component or layout.

## 5. Nested layouts

- Add nested `children` arrays for routes that share sub-layouts.
- Example: `/admin` route with its own sidebar and nested outlets.

```jsx
{
  path: '/admin',
  element: <AdminLayout />,
  children: [
    { index: true, element: <AdminDashboard /> },
    { path: 'users', element: <AdminUsers /> },
  ],
}
```

## 6. Tips & best practices

- Keep `router.jsx` as the single source of truth for paths.
- Use lazy loading (`React.lazy` / `Suspense`) when routes grow heavy.
- Co-locate styles/components with each route but avoid large logic inside the route file—delegate to hooks/stores.
- For modals tied to routes, leverage nested routes with overlays instead of manual state.
- Document every new route in your notes to track navigation structure for interviews.
