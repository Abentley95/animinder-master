import React from 'react';
import Proptypes from 'prop-types';
import { Form, Button, } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

const FormStyle = {
    marginTop: "10px",
    width: "100%"
}

export default class SignupForm extends React.Component {
    state={
        data: {
            email: '',
            password: ''
        },
        loading: false,
        errors: {}
    }

    onChange = (e) => {
        this.setState({
            ...this.state,
            data: {...this.state.data, [e.target.name]: e.target.value}
        });
    }

    onSubmit = (e) => {
        e.preventDefault()
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0) {
            this.setState({ loading: true });
            this.props.submit(this.state.data)
            .catch(err => {
                this.setState({ errors: err.response.data.errors, loading: false})});
        }
    }

    validate = (data) => {
        const errors = {};
        if(!Validator.isEmail(data.email)) errors.email = 'Invalid Email';
        if(!data.password) errors.password = 'Can not be blank';
        return errors;
    }
    
    render () {
        const { data, errors, loading} = this.state;
        return (
            <Form style={FormStyle} onSubmit={this.onSubmit} loading={loading}>
                <Form.Field error={!!errors.email}>
                    <label htmlFor="email">Email</label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    placeholder="something@something.com"
                    value={data.email}
                    onChange={this.onChange}/>
                {errors.email && <InlineError text={errors.email}/>}
                </Form.Field>
                <Form.Field error={!!errors.password}>
                    <label htmlFor="password">Password</label>
                    <input 
                    type="password"
                    id="password"
                    name="password"
                    placeholder="someanimerefrence"
                    value={data.password}
                    onChange={this.onChange}/>
                {errors.password && <InlineError text={errors.password}/>}
                </Form.Field>
                <Button primary>Sign Up</Button>
            </Form>
        );
    }
}

SignupForm.propTypes = {
    submit: Proptypes.func.isRequired
};