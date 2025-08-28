import Footer from "@/components/common/Footer"
import Navbar from "@/components/layout/Navbar"
import type { Metadata } from "next"
import Blogs from "./components/Blogs"
import Hero from "./components/Hero"

export const metadata: Metadata = {
  title: "Blogs",
}

const BlogList = () => {
  return (
    <>
      <div className="bg-gradient3">
        <Navbar buttonVariant="outline-primary" centered />
        <Hero />
      </div>
      <Blogs />
      <Footer />
    </>
  )
}
export default BlogList
