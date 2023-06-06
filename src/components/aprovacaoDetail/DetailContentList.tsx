import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import sgt20Api from '../../apis/figgedBackend'
import ListTable from '../aprovacaoList/ListTable'


class DetailContentList extends Component  <any, any> {

  constructor(props:any) {
    super(props)
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    if (this.props.aprovacao) {
      if (this.props.aprovacao.aprovacaoDetail) {
        if(this.props.aprovacao.aprovacaoDetail) {
          this.documentos(this.props.aprovacao.aprovacaoDetail)
        }
      }
    }
  }

  async documentos(aprovacaoDetail: any) {
    const pessoaId = aprovacaoDetail.motorista.pessoa_id
    const aprovacaoId = aprovacaoDetail.id
    const url = `/aprovacao/?format=json&filter_type=pendentes&pessoa_id=${pessoaId}&id_exclude=${aprovacaoId}`
    const response = await sgt20Api.get(url)
    if(response.data) {
      if(response.data.results) {
        this.setState({results: response.data.results})
      }
    }
  }

  renderTable() {
    if (this.state.results.length > 0) {
      return <ListTable aprovacoes={this.state.results} />
    }
  }

  render() {
    if (this.state.results) {
      return (
        <Row>
            <Col>
              {this.renderTable()}
            </Col>
        </Row>
      )
    } else {
      return
    }
  }

}

export default DetailContentList