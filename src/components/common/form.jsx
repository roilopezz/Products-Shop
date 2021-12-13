import React, { Component } from "react";
import Input from "./input";
import Joi from "joi";

class Form extends Component {
  validateForm = () => {
    const {
      schema,
      state: { form },
    } = this;

    const { error } = Joi.object({ ...schema }).validate(form, {
      abortEarly: false,
    });

    if (!error) {
      return null;
    }

    const errors = {};

    for (const details of error.details) {
      errors[details.path[0]] = details.message;
    }

    return errors;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();
    this.setState({ errors });

    if (errors) {
      return;
    }

    this.doSubmit();
  };

  handleChange = ({ target }) => {
    const { form, errors } = this.state;

    this.setState({
      form: { ...form, [target.name]: target.value },
      errors: { ...errors, [target.name]: this.validateInput(target) },
    });
  };

  validateInput = ({ name, value }) => {
    const data = {
      [name]: value,
    };

    const schema = Joi.object({
      [name]: this.schema[name],
    });

    const { error } = schema.validate(data);

    return error ? error.details[0].message : null;
  };

  renderButton(label) {
    return <button className="btn btn-primary">{label}</button>;
  }

  renderInput({ type = "text", name, placeholder }) {
    const { form, errors } = this.state;
    return (
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onInput={this.handleChange}
        value={form[name]}
        error={errors && errors[name]}
      />
    );
  }
}

export default Form;
