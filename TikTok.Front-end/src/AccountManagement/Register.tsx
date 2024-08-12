import React, { useState } from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { UserOutlined, UserAddOutlined, GoogleOutlined, TikTokOutlined, LockOutlined } from '@ant-design/icons';
import '../Style/Register.css';
const Register: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleRegister = async (values: { email: string; password: string }) => {

    try {
      const response = await axios.post('/api/account/register', values);
      if (response.status === 200) {
        message.success('Registration successful!');
      }

    } catch (error) {
      message.error('Registration failed!');
    }
  };

  return (
    <div className="register-container">
      <div className="register-title">Register for TikTok</div>
      <Form onFinish={handleRegister}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: 'email' }]}>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            prefix={<UserOutlined />}/>
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true }]}>
          <Input.Password
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            prefix={<LockOutlined />}
            />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" href="#">Register</Button>
        </Form.Item>
      </Form>

    </div>
  );
};
export default Register;