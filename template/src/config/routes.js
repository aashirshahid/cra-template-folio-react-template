import {lazy} from 'react';
const Routes = [
    {
        name: "Login",
        path: "/login",
        component: lazy(() =>
        import("../components/login")
        ),
        requireAuthentication: false,
    },
    {
        name: "Signup",
        path: "/signup",
        component: lazy(() =>
        import("../components/signup")
        ),
        requireAuthentication: false,
    },
    {
        name: "Dashboard",
        path: "/dashboard",
        component: lazy(() =>
        import("../components/dashboard")
        ),
        requireAuthentication: true,
    },
];

export default Routes;
