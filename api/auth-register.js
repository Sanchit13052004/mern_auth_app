import { connectDB } from './config/db.js';
import User from './models/User.js';
import { generateToken } from './utils/jwt.js';

export default async function handler(req, res) {

  res.setHeader('Access-Control-Allow-Origin', process.env.CORS_ORIGIN || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: { message: 'Method not allowed' } });
  }

  try {
    await connectDB();

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: { message: 'All fields are required', code: 'VALIDATION_ERROR' }
      });
    }

    if (name.length < 2) {
      return res.status(400).json({
        success: false,
        error: { message: 'Name must be at least 2 characters', code: 'VALIDATION_ERROR' }
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        error: { message: 'Password must be at least 8 characters', code: 'VALIDATION_ERROR' }
      });
    }

    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: { message: 'An account with this email already exists', code: 'CONFLICT_ERROR' }
      });
    }

    const user = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      password,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      data: {
        user: user.toJSON(),
        token,
      }
    });
  } catch (error) {
    console.error('Register error:', error);
    return res.status(500).json({
      success: false,
      error: { message: 'Internal server error', code: 'SERVER_ERROR' }
    });
  }
}
