import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import { Field, reduxForm } from 'redux-form'
import { requiredField } from '../../utilits/validators/validators'
import { CreateField, Input } from '../common/formControls/formControls'
import './../../null.css'
import { login } from '../../redux/authReducer'
import login_classes from './login.module.css'
import form_classes from './../common/formControls/formControls.module.css'
import error from './../common/formControls/formControls.module.css'


const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className={login_classes.loginForms}>
                <div className={login_classes.inputBox}>
                    {CreateField("Email", 'email', requiredField, Input, { className: form_classes.inputBoxItem })}
                    {/* <Field
                    component={Input}
                    name={'email'}
                    placeholder={"Email"}
                    validate={requiredField} /> */}
                </div>
                <div className={login_classes.inputBox}>
                    {CreateField("Password", 'password', requiredField, Input, { type: "password", className: form_classes.inputBoxItem })}
                    {/* <Field
                    component={Input}
                    name={'password'}
                    placeholder={"Password"}
                    validate={requiredField}
                    type={"password"} /> */}
                </div>
                <div className={login_classes.check}>
                    {CreateField(null, 'rememberMe', null, 'input', { type: "checkbox", className: form_classes.check }, "Remember me")}
                    {/* <Field
                    component={'input'}
                    name={'rememberMe'}
                    type={"checkbox"} />Remember me */}

                </div>
                <div className={login_classes.check}>
                    {CreateField(null, 'showPassword', null, 'input', {
                        type: "checkbox",
                        className: form_classes.check,
                    }, "Show password")}
                </div>
                {error && <div className={error.summaryError}>
                    {error}
                </div>}
                <button className={login_classes.btn}>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)
const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={login_classes.loginPage}>
            <h1 className={login_classes.title}>LOGIN</h1>
            <ReduxLoginForm onSubmit={onSubmit} />
        </div>

    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)