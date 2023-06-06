import React from "react"
import { Col } from 'react-bootstrap'
import AprovacaoListFilterForm from './FilterForm'


class AprovacaoListFilter extends React.Component {

  render() {
    return (
      <Col sm={12} className="mb-3" >
        <AprovacaoListFilterForm></AprovacaoListFilterForm>
      </Col>
    )
  }

}

export default AprovacaoListFilter