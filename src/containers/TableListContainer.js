import React, { Component } from 'react'
import { Panel, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

class TableListContainer extends Component {

  render() {
    const { shoppingList } = this.props
    console.log('shoppingList', shoppingList)
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title componentClass="h3">Data</Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <ul>
              {
                shoppingList.shoppingList.map((value) => (
                <li key={value.title}>{value.title}</li>
                ))
              }
            </ul>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  shoppingList: state.shoppingList
})

export default connect(mapStateToProps)(TableListContainer)
