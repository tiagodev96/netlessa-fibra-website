'use client'

import React, { ReactNode } from 'react'

type ButtonProps = {
  link?: string
  children: ReactNode
  icon?: ReactNode
}

export default function Button({ link, children, icon }: ButtonProps) {
  const primaryButton = 'bg-blue text-white hover:bg-white hover:border-blue hover:text-blue'
  const iconButton =
    'bg-green border-green text-black hover:bg-black hover:text-green hover:border-black'

  const handleClick = () => {
    if (link) {
      return window.open(link, '_blank')
    }
    return
  }

  return (
    <button
      onClick={() => handleClick()}
      className={`flex items-center gap-2 py-2 px-5 border border-transparent rounded-[6px] text-[16px] transition-all ease-in-out duration-150 ${icon ? iconButton : primaryButton}`}
    >
      {icon && icon}
      {children}
    </button>
  )
}
