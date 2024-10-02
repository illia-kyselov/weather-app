import { createRootRoute, Outlet } from '@tanstack/react-router';
import NotFound from '../pages/NotFound';

export const Route = createRootRoute({
    component: () => (
        <>
            <hr />
            <Outlet />
        </>
    ),
    notFoundComponent: () => <NotFound />,
});
