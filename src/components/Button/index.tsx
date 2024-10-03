'use client'

import React, { ReactNode } from 'react'

type ButtonProps = {
  link?: string
  children: ReactNode
  icon?: ReactNode
  isHero?: boolean
  targetBlank?: boolean
}

export default function Button({ link, children, icon, isHero, targetBlank }: ButtonProps) {
  const primaryButtonClasses = 'bg-blue text-white hover:bg-white hover:border-blue hover:text-blue'
  const iconButtonClasses =
    'bg-green border-green text-black hover:bg-black hover:text-green hover:border-black'
  const heroButtonClasses =
    'bg-transparent text-white hover:bg-white hover:border-blue hover:text-blue'
  const baseButtonClasses =
    'flex items-center justify-center gap-2 py-2 px-5 border border-transparent rounded-[6px] text-[16px] transition-all ease-in-out duration-150'

  const handleClick = () => {
    if (link) {
      targetBlank ? window.open(link, '_blank') : window.open(link, '_self')
    }
  }

  const buttonClasses = icon ? iconButtonClasses : isHero ? heroButtonClasses : primaryButtonClasses

  return (
    <button onClick={handleClick} className={`${baseButtonClasses} ${buttonClasses}`}>
      {icon && <span>{icon}</span>}
      {children}
    </button>
  )
}
