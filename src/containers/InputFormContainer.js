import React, { Component } from 'react'
import { Panel, Button, ButtonToolbar } from 'react-bootstrap'
import { Field, reduxForm, reset } from 'redux-form'
import { RenderField } from '../components'
import { shoppingAction } from '../actions'

class InputFormContainer extends Component {
  render() {
    const { handleSubmit } = this.props
    return (
      <Panel bsStyle="primary">
        <Panel.Heading>
          <Panel.Title componentClass="h3">Input product</Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <form onSubmit={handleSubmit}>
            <Field name="product" label="product" component={RenderField} />
            <ButtonToolbar>
              <Button bsStyle="primary" type="submit">Submit</Button>
            </ButtonToolbar>
          </form>
        </Panel.Body>
      </Panel>
    )
  }
}

InputFormContainer = reduxForm({
  form: 'shoppingForm',
  onSubmit:(value, dispatch) => {
    console.log("value", value)
    dispatch(shoppingAction(value.product))
    dispatch(reset('shoppingForm'))
  }
})(InputFormContainer)

export default InputFormContainer;
