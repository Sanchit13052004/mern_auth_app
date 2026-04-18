import GlassCard from './GlassCard';
import { Mail, Calendar } from 'lucide-react';

export default function UserCard({ user }) {
  const initials = user.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const joinDate = new Date(user.createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <GlassCard>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold shrink-0">
          {initials}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <h3 className="text-2xl font-bold text-gray-900 mb-1">{user.name}</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <span>Joined {joinDate}</span>
            </div>
          </div>
        </div>
      </div>
    </GlassCard>
  );
}
