import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({field, value, label, type, error, onChange, className}) => {
    return(
        <div className={`form-group ${className}`}>
            <label>{label}</label>
            <input type={type}
            className={classnames({"form-control": true,"is-invalid": error,"is-valid": value})}
            name={field}
            value={value}
            onChange={onChange}
            />
            {error && <span className="text-danger">{error}</span>}
        </div>
    );
};

TextFieldGroup.propTypes = {
    field: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: 'text'
}

export default TextFieldGroup;