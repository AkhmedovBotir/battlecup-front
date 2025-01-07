import { redirect } from 'next/navigation';

async function getData() {
  // Bu yerda serverdan ma'lumotlarni olish logikasi bo'lishi kerak
  return {
    isAuthenticated: false
  };
}

export default async function Dashboard() {
  const { isAuthenticated } = await getData();

  if (!isAuthenticated) {
    redirect('/auth/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Active Tournaments */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Active Tournaments</h3>
                <div className="mt-4">
                  <p className="text-gray-500">No active tournaments</p>
                </div>
              </div>
            </div>

            {/* Your Teams */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Your Teams</h3>
                <div className="mt-4">
                  <p className="text-gray-500">No teams yet</p>
                </div>
              </div>
            </div>

            {/* Recent Matches */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Recent Matches</h3>
                <div className="mt-4">
                  <p className="text-gray-500">No recent matches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
