import {
    Button,
    Form,
    Input,
    Row,
    Col,
    Divider,
} from 'antd';

const FormComponent = ({ onFinish, onFinishFailed, initialValues, btnText, form, name }) => {

    return (
        <Form
            form={form}
            name={name}
            layout="vertical"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                ...initialValues,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Divider />

            <Row gutter={16}>
                <Col span={12}>
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un nombre de usuario',
                            },
                        ]}
                    >
                        <Input
                            placeholder='johndoe'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Nombre"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un nombre',
                            },
                        ]}
                    >
                        <Input
                            placeholder="John"
                        />
                    </Form.Item>

                    <Form.Item
                        label="Estado"
                        name="status"
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un estado',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Estado"
                        />
                    </Form.Item>
                </Col>

                <Col span={12}>
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input
                            placeholder='johndoe@domain.com'
                        />
                    </Form.Item>

                    <Form.Item
                        label="Apellido"
                        name="lastname"
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa un apellido',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Doe"
                        />
                    </Form.Item>


                    <Form.Item
                        label="Edad"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Ingresa una edad',
                            },
                        ]}
                    >
                        <Input
                            placeholder="43"
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Divider />

            <Form.Item
                wrapperCol={{ offset: 18, span: 16 }}
                style={{ margin: 0 }}
            >
                <Button type="primary" htmlType="submit">
                    {btnText}
                </Button>
            </Form.Item>

        </Form>
    )
}

export default FormComponent