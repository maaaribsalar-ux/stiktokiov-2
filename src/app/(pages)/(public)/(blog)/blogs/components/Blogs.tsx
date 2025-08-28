import BlogPost2 from "@/components/common/BlogCards/BlogPost2"
import { Col, Container, Row } from "react-bootstrap"
import IconifyIcon from "@/components/wrappers/IconifyIcon"
import Link from "next/link"
import { PostType } from "@/types/other"
import crypto1 from "@/assets/images/blog/crypto1.jpg"
import crypto2 from "@/assets/images/blog/crypto2.jpg"

const postData2: PostType[] = [
  {
    image: crypto1,
    tag: { variant: "orange", value: "Announcement" },
    href: "how-tiktok-is-changing-the-social-media-landscape",
    title: "How TikTok is changing the social media landscape",
    description: "Introducing the blazzing fast user interface. The new UI is fast, secure and most user friendly...",
  },
  {
    image: crypto2,
    tag: { variant: "success", value: "Tutorial" },
    href: "why-mark-zuckerberg-is-king-of-the-social-media-world",
    title: "Why mark zuckerberg is king of the social media world",
    description: "We are giving a pretty extensive guideline and context before you make your decision to consider Prompt...",
  },
  {
    image: crypto1,
    tag: { variant: "info", value: "Community" },
    href: "top-5-free-tools-to-manage-your-social-media-accounts",
    title: "Top 5 free tools to manage your social media accounts",
    description: "Explore a latest guideline for creating a successful online sales campaign using google adwords or facebook ads...",
  },
]

const Blogs = () => {
  return (
    <section className="py-6 position-relative">
      <Container>
        <Row className="justify-content-lg-between">
          <Col lg={12}>
            <Row className="mt-6" data-aos="fade-up">
              {postData2.map((post, idx) => (
                <Col lg={4} key={idx}>
                  <BlogPost2 post={post} />
                </Col>
              ))}
            </Row>
            <Row className="row mt-6" data-aos="fade-up">
              {postData2.map((post, idx) => (
                <Col lg={4} key={idx}>
                  <BlogPost2 post={post} />
                </Col>
              ))}
            </Row>
            <Row className="mt-5 d-none">
              <Col lg={12}>
                <div className="d-flex align-items-center justify-content-center">
                  <Link className="btn btn-sm btn-white" href="">
                    <IconifyIcon icon="lucide:arrow-left" className="icon-xxs  me-2" />
                    Previous
                  </Link>
                  <Link className="btn btn-sm btn-white ms-2" href="">
                    Next
                    <IconifyIcon icon="lucide:arrow-right" className="icon-xxs ms-2" />
                  </Link>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Blogs
