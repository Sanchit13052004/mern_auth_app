import { Link } from 'react-router-dom';
import { Shield, Zap, Lock, ArrowRight } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';

const features = [
  {
    icon: Shield,
    title: 'Secure Authentication',
    description: 'Industry-standard JWT authentication with bcrypt password hashing to keep your data safe.',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Built with React and Vite for blazing fast performance and instant page loads.',
  },
  {
    icon: Lock,
    title: 'Protected Routes',
    description: 'Advanced route protection ensures only authenticated users can access sensitive pages.',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-primary" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Build Secure Apps
              <br />
              <span className="text-white/90">With Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-slide-up">
              A modern authentication starter kit with beautiful UI, secure JWT-based auth,
              and everything you need to launch your next project.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
              <Link to="/signup" className="btn-primary bg-white text-indigo-600 hover:bg-gray-100 hover:scale-105 px-8 py-4 text-lg">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/login" className="btn-secondary border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-4 text-lg">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float hidden lg:block" />
        <div className="absolute bottom-20 right-10 w-16 h-16 rounded-full bg-white/10 animate-float hidden lg:block" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-20 w-12 h-12 rounded-full bg-white/10 animate-float hidden lg:block" style={{ animationDelay: '4s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Powerful features to help you build secure, modern web applications quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Create your account today and experience the future of authentication.
          </p>
          <Link to="/signup" className="btn-primary inline-flex text-lg px-10 py-4">
            Create Account
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
