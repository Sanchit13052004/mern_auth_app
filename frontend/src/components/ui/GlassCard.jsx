export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={`
        glass-card p-6 md:p-8
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
