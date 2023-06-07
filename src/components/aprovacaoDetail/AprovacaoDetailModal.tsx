import { Component } from 'react'
import { Form, Field } from "react-final-form"
import { Modal, Button, Container, Row, Col, Form as FormBS } from 'react-bootstrap'
import { connect } from 'react-redux'
import { fetchDocumentoModal, fetchDocumentoAprovar, fetchDocumentoReprovar } from '../../actions'
import { toast } from 'react-toastify'
import api from '../../apis/figgedBackend'

class AprovacaoDetailModal extends Component  <any, any> {

  constructor(props:any) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.simButtonOnClick = this.simButtonOnClick.bind(this);
  }

  state = {
      'reprovarMensagemOpcoes': [],
      'reprovarMensagemOpcoesLoading': false,
  }

  componentDidMount() {
    this.getReprovarMensagemOpcoes()
  }

  async getReprovarMensagemOpcoes() {
    try {
      const response = await api.get('/mensagem/')
      this.setState({'reprovarMensagemOpcoes': response.data.results})
    } catch (error) {
      console.log(error)
    }
    this.setState({'reprovarMensagemOpcoesLoading': true})
  }

  handleClose() {

    this.props.fetchDocumentoModal(
      {
        type: null,
        show: false,
        documento: null,
        reprovacaoMotivo: null,
      }
    )

    toast.info('Ação cancelada', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined}
    )

  }

  async simButtonOnClick() {
    const user:string = this.props.user
    if (this.props.modal.type === 'reprovar') {
      const config = { cancelable: true, bubbles: true }
      const reprovacaoMotivoForm = document.getElementById('reprovacaoMotivoForm')!
      const submitEvent = new Event('submit', config)
      reprovacaoMotivoForm.dispatchEvent(submitEvent)
    }
    if (this.props.modal.type === 'aprovar') {
      const documento = this.props.modal.documento;
      this.props.fetchDocumentoAprovar(documento, user)
    }
  }

  renderTitle() {
    if (this.props.modal.type === 'aprovar') {
      return <strong><span className='text-success'>APROVAÇÃO</span> de Documento</strong>
    }
    if (this.props.modal.type === 'reprovar') {
      return <strong><span className='text-danger'>REPROVAÇÃO</span> de Documento</strong>
    }
  }

  renderBody() {
    if (this.props.modal.type === 'aprovar') {
      return <p className='text-center p-0 m-0'>Você tem certeza que deseja aprovar o <strong>documento/foto</strong> selecionada?</p>
    }
    if (this.props.modal.type === 'reprovar') {
      return this.renderBodyReprovar()
    }
  }

  renderBodyReprovar() {

    const initialValues = {'reprovacaoMotivo': ''}

    const renderError = (meta:any) => {
      if (meta.touched && meta.error) {
        return <div className="invalid-feedback">{meta.error}</div>
      }
    }
  
    let motivoSelecionado = '';
    const renderInputReprovacaoMotivo = (field:any) => {
      const touched = field.meta.touched
      const error = field.meta.error
      let selectClass = ''
      if (touched && error) {
        selectClass = 'is-invalid'
      } else {
        selectClass = ''
      }
      motivoSelecionado = field.input.value;
      
      const renderOptions = this.state.reprovarMensagemOpcoes.map((opcao:any) => {
        const mensagem = opcao.mensagem
        return <option key={mensagem} value={mensagem}>{mensagem}</option>
      })

      return (
        <FormBS.Group controlId={field.id}>
          <FormBS.Label>{field.label}</FormBS.Label>
          <FormBS.Select autoComplete="off" {...field.input} className={selectClass}>
            <option value="">Selecionar</option>
            <option value="nenhuma">Nenhuma opção abaixo</option>
            {renderOptions}
          </FormBS.Select>
          {renderError(field.meta)}
        </FormBS.Group>
      )
    }

    const renderInputReprovacaoMotivoTexto = (field:any) => {
      const touched = field.meta.touched
      const error = field.meta.error
      let selectClass = ''
      if (touched && error) {
        selectClass = 'is-invalid'
      } else {
        selectClass = ''
      }
      const className = `${motivoSelecionado === 'nenhuma' ? 'mt-3' : "d-none"}`;
      return (
      <FormBS.Group className={className} controlId={field.id}>
        <FormBS.Label>{field.label}</FormBS.Label>
        <FormBS.Control as="textarea" rows={3} autoComplete="off" {...field.input} className={selectClass} />
        {renderError(field.meta)}
      </FormBS.Group>
      )
    }

    const onSubmit = (formValues:any) => {
      const user:string = this.props.user
      // console.log("ONSUBMIT", this.props.modal.documento)
      this.props.fetchDocumentoReprovar(this.props.modal.documento, formValues, user)
    }

    const validate = (formValues:any) => {
      let errors = {}
      if (!formValues.reprovacaoMotivo) {
        errors = {
          reprovacaoMotivo: 'Campo Obrigatório. Selecione uma opção.',
        }
      }
      if (formValues.reprovacaoMotivo === 'nenhuma' && !formValues.reprovacaoMotivoTexto) {
        errors = {
          reprovacaoMotivoTexto: 'Campo Obrigatório. Descreva o Motivo da reprovação.',
        }
      }
      return errors
    }

    return (
        <Form 
          initialValues={initialValues}
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, form }) => (
            <FormBS onSubmit={handleSubmit} id="reprovacaoMotivoForm" className="p-3 rounded border border-dark">
              <Field name="reprovacaoMotivo" label="Selecione o motivo da reprovação" component={renderInputReprovacaoMotivo}></Field>
              <Field name="reprovacaoMotivoTexto" label="Descreva o Motivo" component={renderInputReprovacaoMotivoTexto}></Field>
            </FormBS>
          )}
        />
    )

  }

  renderFooter() {
    return (
      <Container>
        <Row>
          <Col lg={6} style={{marginBottom: 8}}>
            <div className="d-grid">
              <Button variant="danger" onClick={this.handleClose}>Cancelar</Button>
            </div>
          </Col>
          <Col lg={6}>
            <div className="d-grid">
              <Button variant="success" onClick={this.simButtonOnClick}>Sim, tenho certeza!</Button>
            </div>
          </Col>
        </Row>
      </Container>
    )
  }

  render() {    
    return (
      <>
        <Modal show={this.props.modal.show} onHide={ () => (this.handleClose()) }>
            <Modal.Header closeButton>
                <Modal.Title className="w-100 text-center h5">
                  {this.renderTitle()}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.renderBody()}
            </Modal.Body>
            <Modal.Footer>
              {this.renderFooter()}
            </Modal.Footer>
        </Modal>
      </>
    )
  }

}

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    modal: state.aprovacao.aprovacaoModal,
    user: window.name,
  }
}

export default connect(mapStateToProps, {fetchDocumentoModal, fetchDocumentoAprovar, fetchDocumentoReprovar})(AprovacaoDetailModal);
