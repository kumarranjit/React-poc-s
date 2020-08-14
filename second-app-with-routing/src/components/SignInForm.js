import React from 'react';
import { useFormik } from 'formik'

const validate = values => {
    var errors = {};
    if (!values.fname) {
        errors.fname = 'Name is required';
    }
    return errors;
}

const SignInForm = () => {
    const formik = useFormik({
        initialValues: {
            fname: ''
        },
        validate,
        onSubmit: (userInputData) => {
            console.log("Entered Data", userInputData);
        }
    })
    return (
        <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input className='form-control' type='text' name='fname' onChange={formik.handleChange} value={formik.values.fname} />
                    {formik.errors.fname ?
                        <div className='text-danger'>{formik.errors.fname}</div>
                        : null}
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default SignInForm;