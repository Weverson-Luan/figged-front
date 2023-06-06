import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'
import { HandThumbsUpFill, HandThumbsDownFill } from 'react-bootstrap-icons'
import DocumentoImage from './DocumentoImage'
import { fetchDocumentoModal } from '../../actions'


const Documentos = (props:any) => {

    const aprovarButtonOnClick = (documento:any) => {
        props.fetchDocumentoModal(
          {
            type: 'aprovar',
            show: true,
            documento: documento,
          }
        )
    }

    const reprovarButtonOnClick = (documento:any) => {
      console.log("data documento => ", documento)
        props.fetchDocumentoModal(
          {
            type: 'reprovar',
            show: true,
            documento: documento,
          }
        )
    }

    const ListDocumentos = (documentos: any) => {
        return documentos.map( (documento:any) => {
            const headerText:string = documento.get_status_display
            const documentoStatus:string = documento.status
            let headerBackgroundClass:string = ''

            switch (documentoStatus) {
              case 'novo':
                headerBackgroundClass = 'bg-primary text-center text-white'
                break
              case 'aprovado':
                headerBackgroundClass = 'bg-success text-center text-white'
                break
              case 'rejeitado':
                headerBackgroundClass = 'bg-danger text-center text-white'
                  break
              default:
                headerBackgroundClass = 'bg-secondary text-center text-white'
            }
    
            const aprovarButton = () => {
              let disabled:boolean = false
              if (documentoStatus === 'rejeitado' || documentoStatus === 'aprovado') {
                disabled = true
              }
              return (
                <Col>
                  <div className="d-grid">
                    <Button variant="success" onClick={ () => aprovarButtonOnClick(documento)} disabled={disabled}><HandThumbsUpFill className='me-1'/>Aprovar</Button>
                  </div>
                </Col>
              )
            }
    
            const rejeitarButton = () => {
              let disabled:boolean = false
              if (documentoStatus === 'rejeitado' || documentoStatus === 'aprovado') {
                disabled = true
              }
              return (
                <Col>
                  <div className="d-grid">
                    <Button variant="danger" onClick={ () => reprovarButtonOnClick(documento)} disabled={disabled}><HandThumbsDownFill className='me-1'/>Rejeitar</Button>
                  </div>
                </Col>
              )
            }
    
            const getUser = () => {
              const teste1 = window.location.href;
              const objURL = new URL(teste1);
              const params = objURL.searchParams.get('username');
              console.log("USUARIO",params)
              if (documento.sec_users_id && documento.data_atualizacao_usuario) {
                const dataAtualizacao:any = new Date(documento.data_atualizacao_usuario)
                return `${documento.sec_users_id} ${dataAtualizacao.toLocaleString('pt-BR')}`
              } else if (documento.sec_users_id) {
                return `${documento.sec_users_id}`
              } else {
                return 'Não definido'
              }
            }

            return (
              <Col lg={4} className='mb-3' key={documento.id}>
                <Card className="border border-dark documento-card">
                  <Card.Header className={headerBackgroundClass}><strong>{headerText}</strong></Card.Header>
                  <Card.Body>
                    <DocumentoImage documento={documento} title={props.pageTitle} />
                    <Row>
                      <Col>
                        <div className="border border-dark rounded mb-3 p-1">
                          <strong className="ms-1">Usuário:</strong><span className="ms-1">
                            <small><span>{getUser()}</span></small>
                          </span>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                        {rejeitarButton()}
                        {aprovarButton()}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            )
    
          })
    }

    const notFoundDocumentos = () => {
        return (
            <Col className='mb-3'>
                <h2 className='h4 text-success'>Não existe nenhum documento vinculado com essa aprovação.</h2>
            </Col>
        )
    }

    const renderDocumentos = () => {
        const aprovacao = props.aprovacao.aprovacaoDetail
        const documentos = aprovacao.documentos
        if (documentos.length) {
            return ListDocumentos(documentos)
        } else {
            return notFoundDocumentos()
        }
    }

    return <Row>{renderDocumentos()}</Row>

}

const mapStateToProps = (state:any) => {
    const aprovacao = state.aprovacao
    return { aprovacao }
}

export default connect(mapStateToProps, { fetchDocumentoModal })(Documentos)
