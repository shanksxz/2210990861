import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { TopUsers } from '@/features/users/top-users';
import { TrendingPosts } from '@/features/posts/trending-post';
import { Feed } from '@/features/posts/feed';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Feed />
      },
      {
        path: '/top-users',
        element: <TopUsers />
      },
      {
        path: '/trending',
        element: <TrendingPosts />
      }
    ]
  }
]); 