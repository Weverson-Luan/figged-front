import { useParams } from "react-router-dom"
import React from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import PageTitle from '../PageTitle'
import AprovacaoListFilter from '../aprovacaoFilter/Filter'
import { fetchAprovacao, resetAprovacao, setAprovacaoFilterType } from '../../actions'
import Loading from '../Loading'
import PaginationCustom from '../Pagination'
import Nav from '../Nav'
import ListTable from './ListTable'


class AprovacaoListContent extends React.Component  <any, any> {

  componentDidMount() {
    this.props.resetAprovacao()
    this.props.setAprovacaoFilterType(this.props.filterType)
    this.props.fetchAprovacao(
      {
        filterType: this.props.filterType,
        page: this.props.page,
        filter: null,
      }
    )
  }

  componentDidUpdate(prevProps:any) {
    if (this.props.page !== prevProps.page) {
      this.props.resetAprovacao()
      this.props.fetchAprovacao(
        {
          filterType: this.props.filterType,
          page: this.props.page,
          filter: null
        }
      )
      window.scrollTo(0, 0)
    }
  }

  renderTable(rows: any) {
    return <ListTable aprovacoes={rows} />
  }

  renderPagination() {
    const pagination:any = {
      pageSize: 21,
      baseUrl: `/aprovacoes/${this.props.filterType}/`,
      currentPage: this.props.page,
      count: this.props.aprovacao.count,
      previous: this.props.aprovacao.previous,
      next: this.props.aprovacao.next
    }
    return (
      <PaginationCustom pagination={pagination} />
    )
  }

  renderNav() {
    const items = [
      {title: 'Lista de Aprovações', active: true, href: '#'},
      {title: 'Atualizar', active: false, href: `#/aprovacoes/${this.props.filterType}/${this.props.page}/`},
    ]
    return <Nav items={items} />
  }

  renderPageTitle() {
    return <PageTitle title="Lista de Aprovações" />
  }

  renderList() {
    return (
      <Container>
        {this.renderNav()}
        {this.renderPageTitle()}
        <Row>
          <AprovacaoListFilter />
        </Row>
        <Row>
          <Col>
            {this.renderTable(this.props.aprovacao.results)}
          </Col>
        </Row>
        {this.renderPagination()}
      </Container>
    )
  }

  renderLoading() {
    return (
      <Container>
        {this.renderNav()}
        {this.renderPageTitle()}
        <Loading />
      </Container>
    )
  }

  render() {
    if (this.props.aprovacao) {
      return this.renderList()
    } else {
      return this.renderLoading()
    }
  }

}

const mapStateToProps = (state:any) => {
  return { 
    aprovacao: state.aprovacao.aprovacaoList,
    user: state.user,
  }
}

const AprovacaoListContentComponent = connect(mapStateToProps, {fetchAprovacao, resetAprovacao, setAprovacaoFilterType})(AprovacaoListContent)

const AprovacaoList = () => {
  let { page } = useParams()
  let { filterType } = useParams()
  const key = `${filterType}_${page}`
  return <AprovacaoListContentComponent key={key} filterType={filterType} page={page} />
}

export default AprovacaoList