import { Row, Col } from 'react-bootstrap';

function PageTitle(props:any) {
    return (
        <Row className='page-title'>
            <Col>
                <h1 className="mt-3 mb-0">{props.title}</h1>
                <hr />
            </Col>
        </Row>
    );
};

export default PageTitle;
