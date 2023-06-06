import { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'


class DocumentoImage extends Component  <any, any> {

  constructor(props:any) {
    super(props);
    this.state = {
      width: '100%!important',
      height: 'auto!important',
      done: false,
    }
    this.changeStyle = this.changeStyle.bind(this)
  }

  componentDidMount() {
    if (!this.state.done) { 
        const img: any = new Image()
        img.onload = () => this.changeStyle(img.height, img.width)
        img.src = this.props.documento.arquivo
    }
  }

  changeStyle(height: number, width: number) {
    if(height > width) {
      this.setState({
        height: '100%',
        width: 'auto!important',
        done: true,
      })
    } else {
      this.setState({
        done: true,
      })
    }
  }

  onImageClick(event:any) {
    const config:any = {
      modal: true,
      fullscreen: true,
      tooltip: true,
      zoomRatio: 0.7,
      navbar: false,
      backdrop: 'static',
      toolbar: {
        zoomIn: 50,
        zoomOut: 50,
        reset: 4,
        rotateLeft: 4,
        rotateRight: 4,
      },
      title: () => event.target.title,
      hide: () => hide,
    }
    const viewer = new Viewer(event.target, config)
    viewer.show()
    const hide = () => viewer.destroy()
  }

  renderLoading() {
    return (
      <div className="spinner-border" style={{'width': '7rem', 'height': '7rem'}} role="status">
        <span className="visually-hidden">Carregando...</span>
      </div>
    )
  }

  renderImage() {
    const style = {
        'width': this.state.width,
        'maxWidth': '100%',
        'height': this.state.height,
        'maxHeight': '100%',
    }
    return (
      <img 
        src={this.props.documento.arquivo}
        alt={this.props.title}
        title={this.props.title}
        style={style}
        className="rounded border border-dark"
        onClick={(event) => this.onImageClick(event)}
        />
    )
  }

  renderImageDone() {
    if (this.state.done) {
        return this.renderImage()
      } else {
        return this.renderLoading()
    }
  }

  render() {
    return (
        <Row>
            <Col>
                <div className="mx-0 mb-3 mb-0 img-wrapper p-0 d-flex justify-content-center align-items-center">
                    {this.renderImageDone()}
                </div>
            </Col>
        </Row>
    )
  }

}

export default DocumentoImage