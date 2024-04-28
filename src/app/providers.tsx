'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from "react";
import {useRouter} from "next/navigation";

export function Providers({children}: { children: React.ReactNode }) {
  const router = useRouter()
  const push = router.push.bind(router)
  return (
    <NextUIProvider navigate={push}>
      {children}
    </NextUIProvider>
  )
}