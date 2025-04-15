import { useQuery } from '@tanstack/react-query';
import { getPosts } from '@/services/api';

export const TrendingPosts = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['posts', 'popular'],
    queryFn: () => getPosts('popular')
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Trending Posts</h1>
      <div className="space-y-4">
        {posts?.map((post) => (
          <div 
            key={post.id} 
            className="p-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center space-x-3">
              <div>
                <h3 className="font-semibold">{post.userName}</h3>
                <p className="text-sm text-gray-500">{post.commentCount} comments</p>
              </div>
            </div>
            <p className="mt-3">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 