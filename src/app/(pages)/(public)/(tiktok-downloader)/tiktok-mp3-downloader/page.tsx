import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/common/Footer"
import Hero from "@/components/common/Hero"
import type { Metadata } from "next"
import app1 from "@/assets/images/features/app3.png"
import app2 from "@/assets/images/features/app4.png"
import Testimonial from "@/components/common/Testimonial"
import { AccordionData, Testimonials } from "@/components/common/data"
import avatar1 from "@/assets/images/avatars/img-1.jpg"
import avatar2 from "@/assets/images/avatars/img-2.jpg"
import FAQs from "@/components/common/FAQs"
import DownloadSteps from "./components/DownloadSteps"
import FeatureIntro from "./components/FeatureIntro"
import ContentOverview from "./components/ContentOverview"

const downloadSteps = [
  {
    image: app2,
    shapes: ["bg-pink-600 bottom-8", "bg-yellow-300 top-32 end-12"],
    title: "first step",
    description: "Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.",
  },
  {
    image: app1,
    shapes: ["bg-red-400 bottom-8", "bg-green-400 top-24 end-16"],
    title: "second step",
    description: "Speedy App provides instant information on thousands of hire and buy products.",
  },
  {
    image: app2,
    shapes: ["bg-purple-600 bottom-8 end-0", "bg-orange-400 top-60"],
    title: "third step",
    description: "Save time and edit like a pro! Yes! you will be able to edit your application on the easy way.",
  },
]

const testimonials: Testimonials[] = [
  {
    name: "John Stark",
    position: "Engineering Director",
    description:
      "Have been working with CSS for over ten years and Bootstrap just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
    image: avatar1,
  },
  {
    name: "Cersei Lannister",
    position: "Senior Project Manager",
    description:
      "I was bad at front-end until I discovered with Bootstrap CSS. I have learnt a lot more about design and CSS itself after I started working with Bootstrap.",
    image: avatar2,
  },
  {
    name: "John Stark",
    position: "Engineering Director",
    description:
      "Have been working with CSS for over ten years and Bootstrap just makes my life easier. It is still CSS and you use flex, grid, etc. but just quicker to write and maintain.",
    image: avatar1,
  },
  {
    name: "Cersei Lannister",
    position: "Senior Project Manager",
    description:
      "I was bad at front-end until I discovered with Bootstrap CSS. I have learnt a lot more about design and CSS itself after I started working with Bootstrap",
    image: avatar2,
  },
]

const FAQContent: AccordionData[] = [
  {
    title: " Can I use this template for my client?",
    description:
      " Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace. ",
  },
  {
    title: " Can this theme work with WordPress?",
    description: " No. This is a HTML template. It won't directly with WordPress, though you can convert this into WordPress compatible theme. ",
  },
  {
    title: " How do I get help with the theme?",
    description: " Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here to help anytime. ",
  },
  {
    title: " Will you regularly give updates of Prompt ?",
    description: " Yes, We will update the Prompt regularly. All the future updates would be available without any cost. ",
  },
]

export const metadata: Metadata = {
  title: "Hero",
}

const Home = () => {
  return (
    <>
      <div className="bg-gradient3">
        <Navbar buttonVariant="outline-primary" centered />
        <Hero
          heading={"TikTok MP3 Downloader"}
          subHeading={"Make your website or web application stand out with high-quality landing pages designed and developed by professionals."}
        />
      </div>
      <FeatureIntro />
      <ContentOverview />
      <DownloadSteps steps={downloadSteps} />
      <Testimonial testimonials={testimonials} />
      <FAQs FAQContent={FAQContent} />
      <Footer />
    </>
  )
}
export default Home
