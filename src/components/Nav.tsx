import { Container, Col, Row, Breadcrumb } from 'react-bootstrap'


export default function Nav(props:any) {

    const items = props.items

    const renderBreadcrumbItems = () => {
        return items.map( (item:any) => {
            const onClick = () => {
                if (window.location.hash === item.href) {
                    window.location.reload()
                }
            }
            return <Breadcrumb.Item key={item.title} active={item.active} href={item.href} onClick={onClick}>{item.title}</Breadcrumb.Item>
        })
    }

    return (
        <Container>
            <Row>
                <Col className="px-0">
                    <Breadcrumb id="nav-breadcrumb">
                        {renderBreadcrumbItems()}
                    </Breadcrumb>
                </Col>
            </Row>
        </Container>
    )

}
