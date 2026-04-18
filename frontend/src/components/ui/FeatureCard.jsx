
import GlassCard from './GlassCard';

export default function FeatureCard({ icon: IconComponent, title, description }) {
  return (
    <GlassCard>
      <div className="flex flex-col items-center text-center">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-5">
          <IconComponent className="w-7 h-7 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </GlassCard>
  );
}
