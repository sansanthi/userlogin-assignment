import { Form, Input, Button } from "antd";
export default function Login() {
    const onChangeUserName = (e) => {
        console.log(e);
    }
    const onChangePassword = (e) => {
        console.log(e);
    }
    const onFinish = (e) => {
        console.log(e);
    }
    const onFinishFailed = (e) => {
        console.log(e);
    }
    return (
        <div className="login">
            <div className="login-box">
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
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
                        <Input onChange={onChangeUserName}/>
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
                        <Input.Password onChange={onChangePassword}/>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            LOGIN
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}