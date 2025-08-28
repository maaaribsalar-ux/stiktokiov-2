import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import { DEFAULT_PAGE_TITLE } from "@/assets/data/constants"
import AppProvidersWrapper from "@/components/wrappers/AppProvidersWrapper"
import NextTopLoader from "nextjs-toploader"

const BeVietnamPro = Be_Vietnam_Pro({
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  style: "normal",
})

import "aos/dist/aos.css"
import "@/assets/scss/theme.scss"

export const metadata: Metadata = {
  title: {
    template: "%s - STikTokio",
    default: DEFAULT_PAGE_TITLE,
  },
  description: "A fully featured tiktok downloader website.",
}

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style suppressHydrationWarning>{splashScreenStyles}</style>
        <link href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={BeVietnamPro.className}>
        <NextTopLoader color="#de6d1d" showSpinner={false} zIndex={300000} />
        <div id="__next_splash">
          <AppProvidersWrapper>{children}</AppProvidersWrapper>
        </div>
      </body>
    </html>
  )
}
