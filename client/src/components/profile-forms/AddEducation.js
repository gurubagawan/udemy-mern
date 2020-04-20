import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { addEducation } from '../../actions/profile';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 class="large text-primary">Add your Education</h1>
      <p class="lead">
        <i class="fas fa-code-branch"></i> Add any school
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addEducation(formData, history);
        }}
      >
        <div class="form-group">
          <input
            value={degree}
            onChange={(e) => onChange(e)}
            type="text"
            placeholder="Degree"
            name="degree"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            value={school}
            onChange={(e) => onChange(e)}
            placeholder="School you went to"
            name="school"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            value={fieldofstudy}
            onChange={(e) => onChange(e)}
            placeholder="Field of Study"
            name="fieldofstudy"
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            value={from}
            onChange={(e) => onChange(e)}
            name="from"
          />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({
                  ...formData,
                  current: !current,
                });
              }}
              name="current"
              value=""
            />{' '}
            Current Job
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            value={to}
            onChange={(e) => onChange(e)}
            name="to"
            disabled={current}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Job Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
};

export default connect(null, { addEducation })(AddEducation);
