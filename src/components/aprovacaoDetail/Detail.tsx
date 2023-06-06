import { useParams } from 'react-router-dom'
import DetailContent from './DetailContent'

const AprovacaoDetail = () => {
  const { id } = useParams();
  return <DetailContent key={id} aprovacaoId={id} />
}

export default AprovacaoDetail