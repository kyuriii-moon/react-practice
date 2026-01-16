import type { User } from './UserCard';

interface UserHeaderProps {
  users?: User[];
  isLoading?: boolean;
  fetchUsers: () => Promise<void>;
}

export function UserHeader({ users, isLoading, fetchUsers }: UserHeaderProps) {
  return (
    <div className="mb-8 flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-800">👥 User Directory</div>
        <div className="mt-2 text-gray-600">총 {users?.length || 0}명의 사용자</div>
      </div>

      <button
        className="flex items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-xl hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={isLoading}
        onClick={fetchUsers}
      >
        새로고침
      </button>
    </div>
  );