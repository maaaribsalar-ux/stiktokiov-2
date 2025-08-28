"use client"
import type { ChildrenType } from "@/types/component-props"
import { useEffect } from "react"
import Aos from "aos"
import { NotificationProvider } from "@/context/useNotificationContext"

const AppProvidersWrapper = ({ children }: ChildrenType) => {
  useEffect(() => {
    Aos.init()
  }, [])

  return <NotificationProvider>{children}</NotificationProvider>
}
export default AppProvidersWrapper
