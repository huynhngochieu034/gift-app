import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Alert } from 'antd';
import AuthService from '../../shared/authentication/AuthService';
import { useHistory } from "react-router-dom";

import './login.scss';

function Login() {
    let history = useHistory();
    const [loginError, setLoginError] = useState(false);

    const onFinish = (credentials) => {
        AuthService.handleLogin(credentials).then(res => {
            AuthService.setUserInfo(JSON.stringify(res.data));
            history.push('/');
        }).catch(err => {
            console.log(err);
            setLoginError(true);
        })

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onClose = (e) => {
        console.log(e, 'I was closed.');
      };

    return (
        <div className="login">
            <div style={{textAlign: "center", marginTop:"2%", color:"blue"}}><h1 style={{color:"blue", fontWeight:"900px"}}>MY APP</h1></div>
            <section className="min-vh-100 cover">
                <div className="cover-caption">
                    <div className="container">
                        <h1 style={{fontSize:"28px", marginLeft:"10%", marginBottom:"0"}}>Sign in</h1>
                        <span style={{marginLeft:"10%", paddingBottom:"40px"}}>Stay updated on your professional world</span>
                        {/* <hr></hr> */}
                        <div className="px-2" style={{marginTop:"25px"}}>
                            {loginError ? (
                                <Alert closable
                                onClose={onClose} message="Failed to sign in! Please check your credentials and try again." type="error" showIcon />
                            ) : null}
                            <Form
                                name="basic"
                                layout="vertical"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input style={{borderRadius:"10px", height:"50px"}} size="large" placeholder="Input your username" />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password style={{borderRadius:"10px", height:"50px"}} size="large" placeholder="Input your password" />
                                </Form.Item>

                                <a style={{display:"flex", fontSize:"15px", color:"blue"}} href="#">Forgot password?</a>
                                <Form.Item style={{marginTop: "5%"}}>
                                    <Button style={{width:"100%", borderRadius:"20px", height:"45px"}} type="primary" htmlType="submit" danger>
                                       <span style={{fontSize:"18px"}}>Sign in</span> 
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Login;