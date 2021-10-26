import React from 'react'
import { Field } from 'redux-form'
import form_classes from './formControls.module.css'
const FormControl = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error
    return (
        <div>

            <div className={form_classes.formControl + " " + (hasError ? form_classes.error : '')}>
                {children}
            </div>
            <div>
                {hasError && <span>{error}</span>}
            </div>
        </div>

    )
}
export const textArea = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <textarea {...input}{...restProps} />
        </FormControl>
    )
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return (
        <FormControl {...props}>
            <input {...input}{...restProps} />
        </FormControl>

    )
}

export const CreateField = (placeholder, name, validators, component, props = {}, text = "") => (

    <div className={form_classes.abc}><Field
        component={component}
        name={name}
        placeholder={placeholder}
        validate={validators}
        {...props}
    />{text}
    </div>
)