import { Col, Row } from "react-bootstrap"

const News = () => {
    return (
            <div className="container w-100 d-flex flex-column">
                <Row className="w-100 container d-flex justify-content-between py-5">
                    <Col className="border rounded p-1" md="5" xs="12">
                        <div className="position-relative">
                            <img className="w-100" src="/images/1.webp" alt="" />
                            <p className="bg-light text-dark position-absolute bottom-0 p-1 px-2"><b>Muerte del delivery</b></p>
                        </div>
                        <div className="text-light">
                            <p>Una pericia arrojó que el accidente “se podría” haber originado “por la crisis ausencia y diagnóstico que tiene Mourelle”</p>
                        </div>
                    </Col>
                    <Col className="border rounded p-1" md="5" xs="12">
                        <div className="position-relative">
                            <img className="w-100" src="/images/2.webp" alt="" />
                            <p className="bg-light text-dark position-absolute bottom-0 p-1 px-2"><b>Gaston Hissa anunció un aumento</b></p>
                        </div>
                        <div className="text-light">
                            <p>El intendente Hissa anunció un aumento del 20% para los municipales</p>
                        </div>
                    </Col>
                </Row>
                <Row className="w-100 container d-flex justify-content-between">
                    <Col className="border rounded p-1" md="5" xs="12">
                        <div className="position-relative w-100">
                            <img className="w-100" src="/images/3.webp" alt="" />
                            <p className="bg-light text-dark position-absolute bottom-0 p-1 px-2"><b>Postura de la unión de alojamientos</b></p>
                        </div>
                        <div className="text-light">
                            <p>El reclamo de cabañeros y hoteleros en Potrero: dicen que hay “competencia desleal”, más de 60 alojamientos ilegales y piden la intervención de la Municipalidad</p>
                        </div>
                    </Col>
                    <Col className="border rounded p-1" md="5" xs="12">
                        <div className="position-relative">
                            <img className="w-100" src="/images/4.webp" alt="" />
                            <p className="bg-light text-dark position-absolute bottom-0 p-1 px-2"><b>"Nunca más"</b></p>
                        </div>
                        <div className="text-light">
                            <p>Poggi en Arizona: “Se terminaron los aprietes partidarios en el Plan de Inclusión”</p>
                        </div>
                    </Col>
                </Row>
            </div>
    )
}

export default News