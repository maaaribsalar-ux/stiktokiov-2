import PostContent from "./components/PostContent"
import type { Metadata } from "next"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/common/Footer"

export const metadata: Metadata = {
  title: "Blog Post",
}

const Post = () => {
  return (
    <>
      <div className="bg-gradient3">
        <Navbar buttonVariant="outline-primary" centered />
      </div>
      <PostContent />
      <Footer />
    </>
  )
}
export default Post
