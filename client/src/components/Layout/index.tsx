import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link 
                to="/" 
                className="inline-flex items-center px-1 pt-1 text-gray-900"
              >
                Feed
              </Link>
              <Link 
                to="/top-users" 
                className="inline-flex items-center px-1 pt-1 text-gray-900"
              >
                Top Users
              </Link>
              <Link 
                to="/trending" 
                className="inline-flex items-center px-1 pt-1 text-gray-900"
              >
                Trending Posts
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}; 