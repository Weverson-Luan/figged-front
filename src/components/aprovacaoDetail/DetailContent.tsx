import { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row } from 'react-bootstrap'
import { fetchDocumento, fetchDocumentoModal, resetAprovacao } from '../../actions'
import PageTitle from '../PageTitle'
import Loading from '../Loading'
import AprovacaoDetailModal from './AprovacaoDetailModal'
import DetailContentList from './DetailContentList'
import Nav from '../Nav'
import Documentos from './Documentos'


class AprovacaoDetailContent extends Component  <any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      modal: {
        type: null,
        show: null,
        documento: null,
      }
    }
  }

  componentDidMount() {
    this.props.fetchDocumento(this.props.aprovacaoId)
  }

  componentWillUnmount() {
    this.props.resetAprovacao()
  }

  renderNav() {
    const motoristaNome = this.props.aprovacao.aprovacaoDetail.motorista_nome
    const veiculoPlaca = this.props.aprovacao.aprovacaoDetail.veiculo_placa
    const filterType = this.props.aprovacao.aprovacaoFilterType
    let documentoTitle = 'Documentos'
    if (motoristaNome && veiculoPlaca) {
      documentoTitle = `Documentos: ${motoristaNome} (${veiculoPlaca})`
    }
    const items = [
      {title: 'Lista de Aprovações', active: false, href: `#/aprovacoes/${filterType}/1/` },
      {title: documentoTitle, active: true, href: 'https://google.com' },
      {title: 'Atualizar', active: false, href: `#/aprovacao/${this.props.aprovacaoId}/`},
    ]
    return <Nav items={items} />
  }

  getPageTitle() {
    try {
      const detail = this.props.aprovacao.aprovacaoDetail
      const tipo = detail.tipo
      const TIPO_BOBINA = 'bobina'
      const TIPO_COMPROVANTE = 'comprovante'
      if (tipo === TIPO_BOBINA) {
        return `Documentos da ${detail.get_tipo_display} ${detail.bobina.numero_bobina} (${detail.get_status_display})`
      } else if (tipo === TIPO_COMPROVANTE) { 
        return `Documento do ${detail.get_tipo_display} da Viagem ${detail.viagem.viagem_numero} (${detail.get_status_display})`
      }
    } catch (error) {
      console.error(error)
    }
    return 'Documentos'
  }

  render() {

    if (!this.props.aprovacao.aprovacaoDetail.id) {
      return (
        <>
          <Container>
            {this.renderNav()}
            <PageTitle title="Documentos"></PageTitle>
            <Row>
              <Loading />
            </Row>
          </Container>
        </>
      )
    }

    const pageTitle = this.getPageTitle()
  

    return (
      <Container>
        {this.renderNav()}
        <PageTitle title={pageTitle}></PageTitle>
        <Documentos pageTitle={pageTitle}></Documentos>
        <DetailContentList aprovacao={this.props.aprovacao} />
        <AprovacaoDetailModal />
      </Container>
    )

  }

}

const mapStateToProps = (state:any, ownProps:any) => {
  const aprovacao = state.aprovacao
  return { aprovacao }
}

export default connect(mapStateToProps, { fetchDocumento, fetchDocumentoModal, resetAprovacao })(AprovacaoDetailContent)
