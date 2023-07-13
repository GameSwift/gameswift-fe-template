'use client'

import { cx } from 'class-variance-authority'
import { useToggle } from '@/hooks'
import { Hamburger } from './Hamburger'
import { NavLinks } from './NavLinks'

export const HeaderMenu = () => {
  const [isOpen, toggleIsOpen] = useToggle()
  const onToggle = () => {
    toggleIsOpen()
    document.body.style.overflowY = isOpen ? 'visible' : 'hidden'
  }

  return (
    <div className="flex flex-1 items-center justify-end gap-6">
      <div
        className={cx(
          'flex flex-1 items-center justify-end gap-6 max-md:fixed max-md:left-0 max-md:top-0 max-md:z-[1000] max-md:h-screen max-md:w-full max-md:flex-col max-md:justify-center max-md:overflow-hidden max-md:bg-slate-200 max-md:transition-all max-md:duration-300 max-md:ease-in-out',
          isOpen ? 'max-md:translate-x-0' : 'max-md:translate-x-full'
        )}
      >
        <NavLinks onNavLinkClick={onToggle} />
      </div>
      <Hamburger
        isOpen={isOpen}
        onToggle={onToggle}
      />
    </div>
  )
}
