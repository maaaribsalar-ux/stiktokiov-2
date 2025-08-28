import { Container, Row, Col, Card, CardBody } from 'react-bootstrap'
import Image from 'next/image'

function DownloadSteps({ steps }) {
  return (
    <section className="section py-5 features-2 position-relative overflow-hidden">
      <Container>
        <Row>
          <Col className="text-center">
            <h2 className="display-5 fw-semibold h1">How to Download?</h2>
            <p className="text-muted mx-auto">Download TikTok or Douyin videos in just 3 easy steps – quick, simple, and hassle-free!</p>
          </Col>
        </Row>
        <Row className="my-5">
          {steps.map((step, idx) => (
            <Col lg={4} key={idx}>
              <Card className="bg-gray-50 shadow-none shapes" data-aos="fade-up" data-aos-duration={300}>
                <div className={`shape${idx + 1}`} />
                <div className={`shape${idx + 2}`} />
                <CardBody className="text-center py-0">
                  <h3 className="fw-semibold mt-0">{step.title}</h3>
                  <p className="fs-14">{step.description}</p>
                  <div className="px-2 mt-3">
                    <Image src={step.image} alt="image" className="img-fluid mt-2" />
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default DownloadSteps
