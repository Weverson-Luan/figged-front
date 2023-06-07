import { connect } from 'react-redux'
import { Container, Col, Row, Navbar, Nav } from 'react-bootstrap'


const MainNavbar = (props:any) => {

  const teste1 = window.location.href;
  const objURL = new URL(teste1);
  const params = objURL.searchParams.get('sec_users_id');

  localStorage.setItem('@sec_users_id',JSON.stringify(params))
  
  const renderLinks = () => {

    const pendentesOnClick = (e: any) => {
      e.preventDefault()
      window.location.replace('#/aprovacoes/pendentes/1/')
    }

    const todasOnClick = (e: any) => {
      e.preventDefault()
      window.location.replace('#/aprovacoes/todas/1/')
    }

    const renderPendentes = () => {
      let active:boolean = false
      if (props.filterType === 'pendentes') {
          active = true
      }
      return (
        <Nav.Link active={active} onClick={pendentesOnClick}><strong>Aprovações Pendentes</strong></Nav.Link>
      )
    }


    const renderTodas = () => {
      let active:boolean = false
      if (props.filterType === 'todas') {
          active = true
      }
      return (
        <Nav.Link active={active} onClick={todasOnClick}><strong>Todas as Aprovações</strong></Nav.Link>
      ) 
    }

    return (
      <Nav className="ms-auto">
          {renderPendentes()}
          {renderTodas()}
      </Nav>
    )

  }
  

  return (
      <Container className="mb-3 mt-3">
          <Row>
              <Col className="rounded">
                <Navbar bg="dark" variant="dark" className="rounded">
                  <Container>
                    <Navbar.Brand href="/"><strong>Figged</strong></Navbar.Brand>
                    {renderLinks()}
                  </Container>
                </Navbar>
              </Col>
          </Row>
      </Container>
  )

}

const mapStateToProps = (state:any) => {
  const filterType = state.aprovacao.aprovacaoFilterType
  return { filterType }
}

export default connect(mapStateToProps, {})(MainNavbar)