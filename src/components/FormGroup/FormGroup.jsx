import React from "react";
import "./FormGroup.scss";

const FormGroup = ({ name, value, placeholder, type, onChange }) => {
    return (
        <div className="form-group">
            <label htmlFor={name} className="form-group__label">
                {placeholder}:
            </label>
            <input
                type={type === "email" ? "text" : type}
                name={name}
                value={value}
                onChange={onChange}
                className="form-group__input"
                required
                pattern="\S+.*"
            />
        </div>
    );
};

export default FormGroup;
