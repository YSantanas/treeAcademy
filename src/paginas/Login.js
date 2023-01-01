import { Button, Checkbox, Form, Input } from 'antd';
import Login1 from '../assets/login1.png';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { login } from '../features/auth/auth.api';
import { useDispatch, useSelector } from 'react-redux';

const validationSchema = object().shape({
  email: string()
    .email('El email no es válido')
    .required('El email es requerido'),
  password: string().required('La contraseña es requerida'),
});

const Inicio = () => {
  const dispatch = useDispatch();
  const { values, handleChange, handleSubmit, isValid, errors } = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      dispatch(
        login({
          email: values.email,
          password: values.password,
        })
      );
    },
  });

  return (
    <div
      className="container pt-3 border alert alert-light text-center"
      style={{ minHeight: 'auto', paddingTop: '2vh', marginTop: '5vh' }}
    >
      <h1 className="text-dark text-center mb-3">Iniciar Sesión</h1>

      <Row>
        <Col>
          <img src={Login1} className="justify-content-center" alt="logo" />
        </Col>

        <Col>
          <Form
            className="mb-3"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: false }}
            autoComplete="off"
            onSubmitCapture={handleSubmit}
          >
            <Form.Item
              label="Email"
              name="email"
              value={values.email}
              valuePropName="email"
              onChange={handleChange}
              help={errors.email}
              validateStatus={errors.email ? 'error' : 'success'}
              required
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Contraseña"
              name="password"
              value={values.password}
              valuePropName="password"
              onChange={handleChange}
              help={errors.password}
              validateStatus={errors.password ? 'error' : 'success'}
              required
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Recuerdame</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit" disabled={!isValid}>
                Iniciar Sesión
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
export default Inicio;
