import React, { useState } from "react";

const ContactForm = () => {
    const [fromValues, setFormValues] = useState({
        name: '', message: '', email: ''
    });
    const [formErrors, setformErrors] = useState({
        error: '',
        message: '',
        name: ''
    })
    const handleChange = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        setFormValues({ ...fromValues, [fieldName]: fieldValue });
        let errors = { ...formErrors };
        if (fieldName === 'name') {
            if (fieldValue.length > 10) {
                errors.name = 'Name should not exceed 10 characters';
            } else if (fieldValue.length === 0) {
                errors.name = 'Please enter name';
            } else {
                errors.name = '';
            }
        }
        if (fieldName === 'message') {
            if (fieldValue.length < 10) {
                errors.message = 'Message should be more than 10 characters';
            } else if (fieldValue.length === 0) {
                errors.message = 'Please enter message';
            } else {
                errors.message = '';
            }
        }
        if (fieldName === 'email') {
            if (fieldValue.length === 0) {
                errors.email = 'Please enter email address';
            } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                fieldValue
            )) {
                errors.email = 'Please enter valid email address';
            } else {
                errors.email = '';
            }
        }
        setformErrors(errors);
    }

    const submitFormData = ()=> {
        if (!formErrors.email && !formErrors.name && !formErrors.message) {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fromValues)
            };
            fetch('https://admin.srkprojects.com/web/api/client/v1/contact-us/', requestOptions)
                .then(response => response.json())
                .then(data => console.log('Form values submitted'));
        } else {
            alert('Form is invalid')
        }
       
    }

    return (<div className="contact-form">
        <div className="email-block">
            <label>
                Email:<span className="asterisk">*</span>
            </label>
            <input
                className="form-control"
                type="text"
                name="email"
                value={fromValues.email}
                onChange={handleChange}
            />
            {formErrors.email && (
                  <span className="err">{formErrors.email}</span>
                )}
        </div>
        <div className="message-block">
            <label>
                Message:<span className="asterisk">*</span>
            </label>
            <input
                className="form-control"
                type="text"
                name="message"
                value={fromValues.message}
                onChange={handleChange}
            //   onBlur={handleChange}
            />
            {formErrors.message && (
                  <span className="err">{formErrors.message}</span>
                )}
        </div>
        <div className="email-block">
            <label>
                Name:<span className="asterisk">*</span>
            </label>
            <input
                className="form-control"
                type="text"
                name="name"
                value={fromValues.name}
                onChange={handleChange}
            />
            {formErrors.name && (
                  <span className="err">{formErrors.name}</span>
                )}
        </div>
        <button type="butotn" onClick={submitFormData}>Submit</button>
    </div>)
};

export default ContactForm;