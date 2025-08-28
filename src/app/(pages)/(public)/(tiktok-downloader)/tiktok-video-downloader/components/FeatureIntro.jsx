import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

function FeatureIntro() {
  return (
    <section className="position-relative overflow-hidden py-7 features-3">
      <Container>
        <Row className="align-items-center">
          <Col lg={5}>
            <div className="mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration={200}>
              <h2 className="text-dark pt-3 h1">Tiktok Downloader - Download Tiktok Videos Without Watermark</h2>
              <p className="text-muted my-4">
                TikTokio is best online tiktok downloader tool to download TikTok videos without a watermark. TikTokio Tiktok video downloader offers
                a fast, easy and watermark-free solution for downloading any TikTok video whether for offline viewing or content repurposing.
              </p>
            </div>
          </Col>
          <Col lg={6} className="offset-lg-1">
            <div className="img-content2 position-relative">
              <div className="img-up" style={{ aspectRatio: '2.05/1' }}>
                <Image
                  src={'/images/tik-logo.avif'}
                  fill
                  alt="tiktok img"
                  className="img-fluid d-block rounded"
                  data-aos="fade-left"
                  data-aos-duration={300}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FeatureIntro
