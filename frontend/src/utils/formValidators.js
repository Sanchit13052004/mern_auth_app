export const validators = {
  name: (value) => {
    if (!value.trim()) return 'Name is required';
    if (value.trim().length < 2) return 'Name must be at least 2 characters';
    if (value.trim().length > 50) return 'Name cannot exceed 50 characters';
    return '';
  },

  email: (value) => {
    if (!value.trim()) return 'Email is required';
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(value)) return 'Please enter a valid email';
    return '';
  },

  password: (value) => {
    if (!value) return 'Password is required';
    if (value.length < 8) return 'Password must be at least 8 characters';
    return '';
  },

  confirmPassword: (value, password) => {
    if (!value) return 'Please confirm your password';
    if (value !== password) return 'Passwords do not match';
    return '';
  },
};

export const validateField = (fieldName, value, extra = {}) => {
  if (validators[fieldName]) {
    return validators[fieldName](value, extra.password);
  }
  return '';
};
