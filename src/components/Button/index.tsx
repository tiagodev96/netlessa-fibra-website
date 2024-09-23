'use client'

import React, { ReactNode } from 'react'

type ButtonProps = {
  link?: string
  children: ReactNode
  icon?: ReactNode
}

export default function Button({ link, children, icon }: ButtonProps) {
  const primaryButton = 'bg-blue text-white hover:bg-white hover:border-blue hover:text-blue'
  const iconButton = 'bg-green text-black hover:bg-black hover:text-green'

  const handleClick = () => {
    if (link) {
      return window.open(link, '_blank')
    }
    return
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`py-2 px-5 border-transparent border-[1px] rounded-[6px] text-[16px] transition-all ease-in-out duration-300 ${icon ? iconButton : primaryButton}`}
    >
      {children}
    </button>
  )
}
