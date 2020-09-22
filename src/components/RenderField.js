import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'


export default function RenderField({input, label, type, meta: {touched, error, warning}}) {
  const isError = touched && error ? 'error' : null
  return (
    <FormGroup validationState={isError}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl 
        type="text"
        { ...input }
        placeholder={label}
      />
      <FormControl.Feedback />
  { isError && <HelpBlock>{ error}</HelpBlock>}
    </FormGroup>
  )
}

RenderField.propTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
}

RenderField.defaultProps = {
  label: '',
  type: 'text'
}