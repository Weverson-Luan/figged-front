import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'


class ListTable extends Component  <any, any> {

    renderTableThead() {
        return (
            <thead>
                <tr>
                    <th className="text-center">ID</th>
                    <th className="text-center">Data de Criação</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Viagem</th>
                    <th className="text-center">Bobina</th>
                    <th className="text-center">Motorista</th>
                    <th className="text-center">Placa</th>
                    <th className="text-center">Grupo</th>
                    <th className="text-center">Tipo</th>
                </tr>
            </thead>
        )
    }

    renderTableRows(aprovacoes:any) {
        const rows:any = aprovacoes.map( (aprovacao:any) => {
      
          const dataCriacaoFormated = (stringDate:string) => {
            let formated = 'Sem Data'
            if (stringDate) {
              const dataCriacao = new Date(stringDate).toLocaleString('pt-BR')
              const dataCriacaoSplit:any = dataCriacao.split('/')
              const formatedp1 = dataCriacaoSplit[0] + '/' +  dataCriacaoSplit[1] + '/'
              const formatedp2 = dataCriacaoSplit[2].slice(2, 4) + ' ' + dataCriacaoSplit[2].slice(5, 10)
              formated = formatedp1 + formatedp2
            }
            return formated
          }
    
          const getBobina:any = (aprovacao:any) => {
            if (aprovacao.bobina) {
              return aprovacao.bobina.numero_bobina
            } else {
              return 'N/A'
            }
          }
    
          const getPlaca:any = (aprovacao:any) => {
            const motorista = aprovacao.motorista
            let placa = 'N/A'
            if (motorista) {
              if (motorista.veiculo_placa) {
                placa = motorista.veiculo_placa
              }
            }
            return placa
          }
    
          const getMotorista:any = (aprovacao:any) => {
            const motorista = aprovacao.motorista
            let display = 'N/A'
            if (motorista) {
              if (motorista.nome) {
                display = motorista.nome
              }
            }
            return display
          }
    
          const getViagem:any = (viagem:any) => {
            const viagemDisplay = 'N/A'
            if (viagem) {
              if (viagem.viagem_numero) {
                return viagem.viagem_numero
              }
            }
            return viagemDisplay
          }
    
          const getGrupo:any = (aprovacao:any) => {
    
            const grupoDisplay = 'N/A'
            let nome = null
            let responsavel = null
            let motorista = aprovacao.motorista
    
            if (motorista) {
              nome = motorista.grupo.nome
              responsavel = motorista.grupo.responsavel
            }
    
            if (nome && responsavel) {
              return `${responsavel} (${nome})`
            }
            if (nome) {
              return nome
            }
            if (responsavel) {
              return responsavel
            }
    
            return grupoDisplay
    
          }
    
          const renderTrTds = () => {
            return (
              <>
                <td className="text-center">{aprovacao.id}</td>
                <td className="text-center">{dataCriacaoFormated(aprovacao.data_criacao)}</td>
                <td className="text-center">{aprovacao.get_status_display}</td>
                <td className="text-center">{getViagem(aprovacao.viagem)}</td>
                <td className="text-center">{getBobina(aprovacao)}</td>
                <td className="text-center"><Link to={`/aprovacao/${aprovacao.id}/`}>{getMotorista(aprovacao)}</Link></td>
                <td className="text-center">{getPlaca(aprovacao)}</td>
                <td className="text-center">{getGrupo(aprovacao)}</td>
                <td className="text-center">{aprovacao.get_tipo_display}</td>
              </>
            )
          }
    
          return <tr key={aprovacao.id}>{renderTrTds()}</tr>
    
        })
        return rows
    }

    renderTable(aprovacoes: any) {
        if (aprovacoes.length) {
          return (
            <Table id="aprovacao-list-table" striped bordered hover>
                {this.renderTableThead()}
                <tbody>
                {this.renderTableRows(aprovacoes)}
                </tbody>
            </Table>
          )
        } else {
          return (
            <h5 className='text-success'>Não existe nenhuma aprovação (para o filtro realizado)</h5>
          )
        }
    }

    render() {
        return this.renderTable(this.props.aprovacoes)
    }

}

export default ListTable