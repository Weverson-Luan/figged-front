import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { fetchAprovacao, resetAprovacao } from '../../actions'
import { Form as FormBS, Row, Col, FormGroup, FormLabel, FormControl, FormSelect, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const AprovacaoListFilterForm = (props:any) => {

  const onSubmit = (formValues:any) => {
    props.resetAprovacao()
    const payload = {
      page: 1,
      filter: formValues,
      filterType: props.filterType,
    }
    props.fetchAprovacao(payload)
    window.scrollTo(0, 0)
  }

  const onReset = () => {
    props.resetAprovacao()
    props.fetchAprovacao(
      {
        page: 1,
        filterType: props.filterType,
      }
    )
  }

  const renderInput = (field:any) => {
    return (
      <FormGroup controlId={field.id}>
        <FormLabel>{field.label}</FormLabel>
        <FormControl size="sm" autoComplete="off" {...field.input}></FormControl>
      </FormGroup>
    )
  }

  const renderInputGrupo = (field:any) => {
    return (
      <FormGroup controlId={field.id}>
        <FormLabel>{field.label}</FormLabel>
        <FormSelect size="sm" autoComplete="off" {...field.input}>
          <option value="">Todos</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </FormSelect>
      </FormGroup>
    )
  }

  const renderInputTipo = (field:any) => {
    return (
      <FormGroup controlId={field.id}>
        <FormLabel>{field.label}</FormLabel>
        <FormSelect size="sm" autoComplete="off" {...field.input}>
          <option value="">Todos</option>
          <option value="bobina">Bobina</option>
          <option value="comprovante">Comprovante</option>
        </FormSelect>
      </FormGroup>
    )
  }

  const renderInputStatusOptions = () => {
    if (props.filterType === 'pendentes') {
      return (
        <>
          <option value="aguardando">Aguardando</option>
          <option value="incompleto">Incompleto</option>
          <option value="rejeitado">Rejeitado</option>
        </>
      )
    } else if (props.filterType === 'todas') {
      return (
        <>
          <option value="novo">Novo</option>
          <option value="aguardando">Aguardando</option>
          <option value="incompleto">Incompleto</option>
          <option value="reprovado">Rejeitado</option>
          <option value="aprovado">Aprovado</option>
        </>
      )
    } else {
      return
    }
  }

  const renderInputStatus = (field:any) => {
    return (
      <FormGroup controlId={field.id}>
        <FormLabel>{field.label}</FormLabel>
        <FormSelect size="sm" autoComplete="off" {...field.input}>
          <option value="">Todos</option>
          {renderInputStatusOptions()}
        </FormSelect>
      </FormGroup>
    )
  }

  return (
    <Form
      initialValues={props.filter}
      onSubmit={onSubmit}
      render={({ handleSubmit, form }) => (
        <FormBS onSubmit={handleSubmit} id="bobina-filter-form" className="p-3 rounded border border-dark">
          <Row>
            <Col>
              <h5>Filtrar Resultados</h5>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col lg={2}>
              <Field id="grupo" name="grupo" label="Grupo" component={renderInputGrupo}></Field>
            </Col>
            <Col lg={2}>
              <Field id="tipo" name="tipo" label="Tipo" component={renderInputTipo}></Field>
            </Col>
            <Col lg={2}>
              <Field id="status" name="status" label="Status" component={renderInputStatus}></Field>
            </Col>
            <Col lg={3}>
              <Field id="bobina" name="bobina" label="Número da Bobina" component={renderInput}></Field>
            </Col>
            <Col lg={3}>
              <Field id="motorista" name="motorista" label="Nome do Motorista" component={renderInput}></Field>
            </Col>

          </Row>
          <Row className='mt-3'>
              <Col lg={3}>
                <Field id="placa" name="placa" label="Placa do Veículo" component={renderInput}></Field>
              </Col>
              <Col lg={3}>
                <Field id="viagem" name="viagem" label="Número da Viagem" component={renderInput}></Field>
              </Col>
              <Col lg={3} className='d-flex align-items-end'>
                <div className='w-100 d-grid'>
                  <LinkContainer to={props.resetFormLink}>  
                    <Button variant="danger" type="button" size='sm' onClick={onReset}>Limpar</Button>
                  </LinkContainer>
                </div>
              </Col>
              <Col lg={3} className='d-flex align-items-end'>
                <div className='w-100 d-grid'>
                  <Button variant="primary" type="submit" size='sm'>Executar Filtro</Button>
                </div>
              </Col>
          </Row>
        </FormBS>
      )}
    />
  )

}

const mapStateToProps = (state:any) => {
  const filter = state.aprovacao.filter
  const filterType = state.aprovacao.aprovacaoFilterType
  const resetFormLink = '/aprovacoes/' + filterType + '/1/'
  return {
    filter,
    filterType,
    resetFormLink,
  }
}

export default connect(mapStateToProps, {fetchAprovacao, resetAprovacao})(AprovacaoListFilterForm)
