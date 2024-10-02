import { createFileRoute } from '@tanstack/react-router';
import ListPage from '../pages/ListPage';

export const Route = createFileRoute('/list')({
    component: List,
});

function List() {
    return <ListPage />;
}
