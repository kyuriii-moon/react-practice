import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function LoadingSpinner() {
  return (
    <div className="flex min-h-screen pt-40 justify-center">
      <div className="text-center">
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="mt-4 text-lg text-gray-600">사용자 정보를 불러오는 중...</p>
      </div>
    </div>
  );
}

interface UserCardProps {
  user: User;
}
function UserCard({ user }: UserCardProps) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md hover:shadow-lg">
      <h2 className="mb-2 text-xl font-bold text-gray-800">{user.name}</h2>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-start">
          <span className="mr-2">📧</span>
          <span className="break-all">{user.email}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">📞</span>
          <span>{user.phone}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🌐</span>
          <span className="break-all">{user.website}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏙️</span>
          <span>{user.address.city}</span>
        </div>
        <div className="flex items-start">
          <span className="mr-2">🏢</span>
          <span>{user.company.name}</span>
        </div>
      </div>
    </div>
  );
}

export default function UserListPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const fetchUsers = async () => {
    setIsLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    const data = await response.json();
    setIsLoading(false);
    setUsers(data);
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  // console.log('======================UserListPage Rendered======================');
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 p-8 w-[80vw]">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold text-gray-800">👥 User Directory</div>
            <div className="mt-2 text-gray-600">총 {users.length}명의 사용자</div>
          </div>

          <button
            className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-black shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
            onClick={fetchUsers}
          >
            새로고침
          </button>
        </div>

        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {users.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
