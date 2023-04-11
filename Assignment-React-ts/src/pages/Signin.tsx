import React, { useEffect, useState } from 'react';
import HeaderHome from '../component/HeaderHome';
import { Button, Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Signin = (props: any) => {
  const navigate = useNavigate();
  console.log(props);
  const onFinish = (values: any) => {
    props.onSignin(values);
    message.success('Đăng nhập thành công!!!');
    navigate('/admin/products');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="signin-container" style={{ background: '#f0f2f5', minHeight: '100vh' }}>
      <HeaderHome />
      <div className="signin-form-container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600, margin: '0 auto', background: '#fff', padding: '2rem' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2 style={{ marginBottom: '2rem' }}>SIGN IN</h2>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address' },
            ]}
          >
            <Input placeholder="example@domain.com" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" style={{ marginRight: '1rem' }}>
              Sign in
            </Button>
            <Button htmlType="button" onClick={() => navigate('/signup')}>
              Create an account
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Signin;
