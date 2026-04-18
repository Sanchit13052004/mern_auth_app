import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
app.use(cors());
app.use(express.json());

// Import serverless handlers and wrap them as Express routes
import registerHandler from './api/auth-register.js';
import loginHandler from './api/auth-login.js';
import meHandler from './api/auth-me.js';
import logoutHandler from './api/auth-logout.js';
import { CLIENT_RENEG_LIMIT } from 'tls';

// Helper to convert Vercel serverless handler to Express middleware
function wrapHandler(handler) {
  return async (req, res) => {
    const mockRes = {
      _statusCode: 200,
      _headers: {},
      _body: null,
      setHeader(key, value) {
        this._headers[key] = value;
      },
      status(code) {
        this._statusCode = code;
        return this;
      },
      json(body) {
        this._body = body;
        // Apply CORS headers
        Object.entries(this._headers).forEach(([key, value]) => {
          res.set(key, value);
        });
        res.status(this._statusCode).json(body);
      },
      end() {
        res.status(this._statusCode).end();
      },
    };

    const mockReq = {
      method: req.method,
      body: req.body,
      headers: req.headers,
    };

    await handler(mockReq, mockRes);
  };
}

app.post('/auth-register', wrapHandler(registerHandler));
app.post('/auth-login', wrapHandler(loginHandler));
app.get('/auth-me', wrapHandler(meHandler));
app.post('/auth-logout', wrapHandler(logoutHandler));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
