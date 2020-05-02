import validator from 'validator';
import { isEmpty } from 'lodash';

export const validateInput = (data) => {
    let errors = {};

    if(validator.isEmpty(data.fname)){
        errors.fname = 'This field is required';
    }
    if(validator.isEmpty(data.lname)){
        errors.lname = 'This field is required';
    }
    if(validator.isEmpty(data.brand)){
        errors.brand = 'This field is required';
    }
    if(validator.isEmpty(data.phone)){
        errors.phone = 'This field is required';
    }
    if(!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
    if(validator.isEmpty(data.email)){
        errors.email = 'This field is required';
    }
    if(validator.isEmpty(data.password)){
        errors.password = 'This field is required';
    }
    if(validator.isEmpty(data.cPassword)){
        errors.cPassword = 'This field is required';
    }
    if(!validator.equals(data.password, data.cPassword)){
        errors.cPassword = 'Password must match';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
};