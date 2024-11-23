import React from "react";
import style from './style/FormsControl.module.css';
import { Field } from "redux-form";

const PutElementHoc = Element => ({input, meta:{touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
            <div>
                {/* Render the passed component (Element) with spread props */}
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

// Usage of PutElementHoc with Textarea and Input components

export const Textarea = PutElementHoc("textarea");
export const Input = PutElementHoc("input");

export const CreateField = (component, validator=[], name, placeholder, type = '', text='') => {
    return (
        <div>
            <Field
                component={component}
                validate={validator}
                name={name}
                placeholder={placeholder}
                type={type}
            /> <span>{text}</span>
        </div>
    );
};
