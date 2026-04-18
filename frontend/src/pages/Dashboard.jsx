import { useAuth } from '../hooks/useAuth';
import UserCard from '../components/ui/UserCard';
import GlassCard from '../components/ui/GlassCard';
import { BarChart3, Users, Activity, TrendingUp } from 'lucide-react';

const stats = [
  { icon: BarChart3, label: 'Total Projects', value: '12', color: 'from-indigo-500 to-blue-500' },
  { icon: Users, label: 'Team Members', value: '8', color: 'from-purple-500 to-pink-500' },
  { icon: Activity, label: 'Active Tasks', value: '24', color: 'from-emerald-500 to-teal-500' },
  { icon: TrendingUp, label: 'Growth Rate', value: '+18%', color: 'from-amber-500 to-orange-500' },
];

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Welcome back, <span className="gradient-text">{user.name.split(' ')[0]}</span>!
          </h1>
          <p className="text-gray-600 text-lg">
            Here's what's happening with your account today.
          </p>
        </div>

        {/* User Info Card */}
        <div className="mb-8 animate-slide-up">
          <UserCard user={user} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <GlassCard
              key={stat.label}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
                <p className="text-gray-600 text-sm">View detailed analytics and reports</p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Team</h3>
                <p className="text-gray-600 text-sm">Manage your team members</p>
              </div>
            </GlassCard>

            <GlassCard>
              <div className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Activity</h3>
                <p className="text-gray-600 text-sm">Recent activity and logs</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
