'use client'
import { Col, Container, Row } from 'react-bootstrap'
import { Clipboard } from 'lucide-react'

const Hero = ({ heading, subHeading }: { heading: string; subHeading: string }) => {
  return (
    <section className="position-relative hero-13 overflow-hidden pt-7 pt-lg-6 pb-lg-6 pb-7 bg-primary">
      <Container>
        <Row className="align-items-center text-center text-sm-start">
          <Col lg={8} className="mx-auto">
            <div className="mb-lg-0">
              <h1 className="hero-title text-center text-white">{heading}</h1>
              <p className="fs-16 text-center text-white">
                {subHeading}
              </p>
              <div className="mt-2 pt-mt-3 mb-4 mb-lg-0 position-relative">
                <input name="link" id="link" className="form-control rounded-3 py-3 border-0" placeholder="Paste link here." />
                <button
                  className="btn btn-primary rounded-3 position-absolute top-50 translate-middle-y"
                  style={{ right: '6px' }}
                  data-toggle="smooth-scroll">
                  Download
                </button>
                <button
                  className=" rounded-3 position-absolute top-50 translate-middle"
                  style={{ right: '100px', padding: '9px 12px', border: 'none', background: '#eae9e9' }}
                  data-toggle="smooth-scroll">
                  <Clipboard size={20} />
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Hero
