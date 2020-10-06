import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {FormDebugger} from "../FormDebugger";
import React from "react";

export const SearchFormContent = (props) => {
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <>
      <form onSubmit={handleSubmit}>
        {/*controlId must match what is passed to the initialValues prop*/}

        <div className="form-group">
          <label htmlFor="profileHandle"></label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="pencil-alt"/>
              </div>
            </div>
            <input
              className="form-control"
              name="plantCommonName"
              type="text"
              value={values.plantCommonName}
              placeholder="find plants by their name"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.plantCommonName && touched.plantCommonName && (
              <div className="alert alert-danger">
                {errors.plantCommonName}
              </div>
            )
          }
        </div>
        <div className="form-group">
          <label htmlFor="profileHandle"></label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <FontAwesomeIcon icon="pencil-alt"/>
              </div>
            </div>
            <input
              className="form-control"
              name="plantColor"
              type="text"
              value={values.plantColor}
              placeholder="find plants by their color"
              onChange={handleChange}
              onBlur={handleBlur}

            />
          </div>
          {
            errors.plantColor && touched.plantColor && (
              <div className="alert alert-danger">
                {errors.plantColor}
              </div>
            )
          }
        </div>

        <div className="form-group">
          <button className="btn btn-primary mb-2" type="submit">Submit</button>
          <button
            className="btn btn-danger mb-2"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
          >Reset
          </button>
        </div>


        {/*<FormDebugger {...props} />*/}
      </form>
      {
        status && (<div className={status.type}>{status.message}</div>)
      }
    </>


  )
};