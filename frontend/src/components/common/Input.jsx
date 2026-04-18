import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function Input({
  label,
  type = 'text',
  value,
  onChange,
  error = '',
  icon: Icon,
  placeholder,
  showPasswordToggle = false,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = showPasswordToggle && showPassword ? 'text' : type;
  const hasValue = value && value.length > 0;
  const isLabelFloating = isFocused || hasValue;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {/* Icon */}
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 z-10">
            <Icon className="w-5 h-5" />
          </div>
        )}

        {/* Floating Label */}
        {label && (
          <label
            className={`
              absolute left-11 transition-all duration-200 pointer-events-none z-10
              ${isLabelFloating
                ? '-top-2.5 text-xs px-1.5 bg-white text-indigo-500 font-semibold'
                : 'top-1/2 -translate-y-1/2 text-base text-gray-400'
              }
            `}
          >
            {label}
          </label>
        )}

        {/* Input Field */}
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={isLabelFloating ? placeholder : ''}
          className={`
            w-full px-4 py-3.5 rounded-xl border transition-all duration-200
            bg-white text-gray-900
            ${Icon ? 'pl-12' : 'pl-4'}
            ${showPasswordToggle ? 'pr-12' : 'pr-4'}
            ${label ? 'pt-5 pb-1.5' : 'py-3.5'}
            ${error
              ? 'border-red-300 focus:ring-2 focus:ring-red-500/50 focus:border-red-500'
              : 'border-gray-200 focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500'
            }
            focus:outline-none placeholder-gray-400
          `}
          {...props}
        />

        {/* Password Toggle */}
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors z-10"
            tabIndex={-1}
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 text-sm text-red-500 ml-1">{error}</p>
      )}
    </div>
  );
}
