import React, { useContext, useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Store.js/AuthSlice';
//import { AuthContext } from '../../utils/authcontext';

const { Title } = Typography;

const Signup = () => {
  //const { login } = useContext(AuthContext)

const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form] = Form.useForm();
  const [formData, setFormData] = useState({});

  const handleFormSubmit = () => {
    // Store form data in localStorage
    localStorage.setItem('signup', JSON.stringify(formData));
    console.log(formData)
dispatch(login());
   // login();
    navigate("/");

    // Clear form fields
    form.resetFields();
    // Optionally, you can redirect the user to another page or perform any other actions after signup
  };

  const handleFormChange = (changedValues, allValues) => {
    setFormData(allValues);
  };

  return (
    <div className='  bg-blue-50 flex flex-col flex-wrap items-center justify-center h-screen'>
      <div className='md:w-full max-w-md p-8 bg-white rounded shadow-lg '>
        <h1 className="text-center sm:text-2xl md:text-3xl mb-4 md:mb-9 font-semibold" >
          SignIn
        </h1>
        <Form
          form={form}
          onFinish={handleFormSubmit}
          onValuesChange={handleFormChange}
          layout="vertical"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email address' }
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className=' bg-blue-700'>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Link to= "/">
      <div className=' text-blue-900 mt-4 hover:text-lg  hover:shadow-xl hover:p-2 hover:rounded-md'>
        Go to Home page
      </div>
      </Link>
    </div>
  );
};

export default Signup;