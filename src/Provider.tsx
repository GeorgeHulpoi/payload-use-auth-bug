'use client'

import { useAuth } from '@payloadcms/ui'
import React from 'react'

import type { User } from './payload-types'

type Args = {
  children: React.ReactNode
}

export default function TestProvider({ children }: Args) {
  const { user } = useAuth<User>()

  console.log(user)

  return children
}
