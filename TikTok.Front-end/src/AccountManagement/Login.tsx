import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import './Login.css';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (values: { email: string; password: string }) => {
    try {
      const response = await axios.post('/api/account/login', values);
      if (response.status === 200) {
        message.success('You have logged in successfully!');
      }
    } catch (error) {
      message.error('Invalid login or password!');
    }
  };
  return (
    <div className="login-container">
      <div className="login-title">Log in to TikTok</div>
      <Form onFinish={handleLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}
        >
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Login</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default Login;