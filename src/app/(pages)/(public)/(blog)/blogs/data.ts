// images
import postImg1 from "@/assets/images/blog/post1.jpg"
import postImg2 from "@/assets/images/blog/post3.jpg"

import avatar1 from "@/assets/images/avatars/img-1.jpg"
import avatar2 from "@/assets/images/avatars/img-2.jpg"
import avatar3 from "@/assets/images/avatars/img-7.jpg"

import type { PostType } from "@/types/other"

const post1: PostType[] = [
  {
    image: postImg1,
    tag: { value: "Announcement" },
    title: "Announcing the free upgrade for the subscribed plans",
    description: "We are glad to announce that, we are going to upgrade all the subscribed accounts with the premium features this week...",
    postedBy: {
      avatar: avatar2,
      name: "Emily Blunt",
    },
    postedOn: {
      date: "11 Mar, 2020",
      time: "3 min read",
    },
  },
  {
    image: postImg1,
    tag: { value: "Community" },
    title: "Will Web Design Ever Rule the World?",
    description: "The web is changed in the current era a lot. Many new trends are being used in the market at the moment...",
    postedBy: {
      avatar: avatar1,
      name: "Greeva N",
    },
    postedOn: {
      date: "9 Mar, 2020",
      time: "5 min read",
    },
  },
]



const post3: PostType[] = [
  {
    image: postImg2,
    tag: { variant: "danger", value: "Resource" },
    title: "Top 10 ideas to improve the team productivity",
    groupAvatars: [avatar3, avatar1, avatar2],
  },
]

export { post1, post3 }
