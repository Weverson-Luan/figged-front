import { Spinner, Col } from 'react-bootstrap';


const Loading = () => {

  const style = {
    'width': '100px',
    'height': '100px'
  };

  return (
    <Col sm='12' className='mt-4 mb-4'>
      <div className="d-flex flex-wrap justify-content-center">
        <Spinner animation="border" style={style} />
        <p className='w-100 text-center p-0 m-0 mt-3'>
          <strong>Carregando, por favor, aguarde.</strong>
        </p>
      </div>
    </Col>
  );

};

export default Loading;
