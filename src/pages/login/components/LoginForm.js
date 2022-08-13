import React from 'react';
import { Form , Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { withRouter } from "../../../router/withRouter";

class LoginForm extends React.Component {

    render() {

        return (
            <Form
                name={'form'}
                onFinish={this.props.onFinish}
                onFinishFailed={this.props.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    name={'username'}
                    rules={[
                        {
                            required: true,
                            message: '请输入用户名'
                        }
                    ]}
                >
                    <Input prefix={<UserOutlined />} placeholder={'用户名'}/>
                </Form.Item>
                <Form.Item
                    name={'password'}
                    rules={[
                        {
                            required: true,
                            message: '请输入密码'
                        }
                    ]}
                >
                    <Input.Password prefix={<LockOutlined/>} placeholder={'密码'}/>
                </Form.Item>
                <Form.Item>
                    <Button
                        type={'primary'}
                        htmlType={'submit'}
                        className={'login-btn'}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}

export default withRouter(LoginForm)