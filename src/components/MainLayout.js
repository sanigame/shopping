import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
// import Navigation from './Navigation'
import { InputFormContainer, TableListContainer } from '../containers'

export default function MainLayout() {
  return (
    <div>
      <Grid>
        <Row>
          <Col xs={12} md={4}><InputFormContainer /></Col>
          <Col xs={12} md={8}><TableListContainer /></Col>
        </Row>
      </Grid>
    </div> 
  )
}
