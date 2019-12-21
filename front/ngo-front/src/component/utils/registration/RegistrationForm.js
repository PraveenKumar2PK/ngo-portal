import React from 'react';
import { Form, Input, Button, Radio, DatePicker, Select } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

class Registartion extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  render() {
    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 10 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 24,
            offset: 10,
          },
        },
      };
    const { getFieldDecorator } = this.props.form;
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="registration-form">
        <Form.Item label="Name">
          {getFieldDecorator('name', {
            rules: [
              {
                required: true,
                message: 'Please input your Name.',
              },
            ],
          })(<Input style={{ width: '100%' }}/>)}
        </Form.Item>
        <Form.Item label="Gender">
          {getFieldDecorator('gender', {
            rules: [
              {
                required: true,
                message: 'Please choose your Gender.',
              },
            ],
          })(
            <Radio.Group>
              <Radio value="1">Male</Radio>
              <Radio value="2">Female</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Date Of Birth">
          {getFieldDecorator('dateOfBirth', {rules: [{ type: 'object', required: true, message: 'Please select Date Of Birth.' }]})(<DatePicker />)}
        </Form.Item>
        <Form.Item label="Address">
          {getFieldDecorator('address', {
            rules: [
              {
                required: true,
                message: 'Please input your Address.',
              },
            ],
          })(<TextArea rows={3} />)}
        </Form.Item>
        <Form.Item label="Phone Number">
          {getFieldDecorator('phoneNumber', {
            rules: [
              {
                required: true,
                message: 'Please input your Phone Number.',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Email Id">
          {getFieldDecorator('email', {
            rules: [
                {
                    type: 'email',
                    message: 'Please input valid Email Id.',
                },
                {
                    required: true,
                    message: 'Please input your Email Id.',
                },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Educational Qualifications">
          {getFieldDecorator('education', {
            rules: [
                {
                    required: true,
                    message: 'Please input your Educational Qualifications.',
                },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Occupation">
          {getFieldDecorator('occupation', {
            rules: [
                {
                    required: true,
                    message: 'Please input your Occupation.',
                },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="Blood Group">
          {getFieldDecorator('blood', {
            rules: [
                {
                    required: true,
                    message: 'Please input your Blood Group.',
                },
            ],
          })(
            <Select>
              <Option value="0-">O-</Option>
              <Option value="o+">O+</Option>
              <Option value="a-">A-</Option>
              <Option value="a+">A+</Option>
              <Option value="b-">B-</Option>
              <Option value="b+">B+</Option>
              <Option value="ab-">AB-</Option>
              <Option value="ab+">AB+</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="Are you willing to donate blood">
          {getFieldDecorator('donateBlood', {
            rules: [
              {
                required: true,
                message: 'Please input your Opinion.',
              },
            ],
          })(
            <Radio.Group>
              <Radio value="1">Yes</Radio>
              <Radio value="2">No</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="Are you willing to participate in field activities">
          {getFieldDecorator('fieldActivites', {
            rules: [
              {
                required: true,
                message: 'Please input your Opinion.',
              },
            ],
          })(
            <Radio.Group>
              <Radio value="1">Yes</Radio>
              <Radio value="2">No</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="How can you able to help us ?">
          {getFieldDecorator('blood', {
            rules: [
                {
                    required: true,
                    message: 'Please input your thoughts.',
                },
            ],
          })(<TextArea rows={2} />)}
        </Form.Item>
        <Form.Item label="Suggestions / Ideas">
          {getFieldDecorator('blood', {
            rules: [
                {
                    required: true,
                    message: 'Please input your Suggestions / Ideas.',
                },
            ],
          })(<TextArea rows={2} />)}
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit" className="registration-form-button">
                Register
            </Button>
        </Form.Item>
      </Form>
    );
  }
}

const RegistartionForm = Form.create({ name: 'registration_name' })(Registartion);

export default RegistartionForm;