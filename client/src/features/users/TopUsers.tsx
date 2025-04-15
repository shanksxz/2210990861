import { useQuery } from '@tanstack/react-query';
import { getTopUsers } from '@/services/api';

export const TopUsers = () => {
  const { data: users, isLoading } = useQuery({
    queryKey: ['topUsers'],
    queryFn: getTopUsers
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Top Users</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users?.map((user) => (
          <div 
            key={user.id} 
            className="p-4 bg-white rounded-lg shadow"
          >
            <h3 className="mt-2 text-lg font-semibold text-center">{user.name}</h3>
            <p className="text-center text-gray-600">{user.postCount} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
}; 