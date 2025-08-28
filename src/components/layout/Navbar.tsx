'use client'
import useScrollEvent from '@/hooks/useScrollEvent'
import useToggle from '@/hooks/useToggle'
import clsx from 'clsx'
import { Collapse, Container } from 'react-bootstrap'
import LogoBox from '../LogoBox'
import AppMenu from './AppMenu'
import { getAppMenuItems } from '@/helpers/menu'
import { LANGUAGE_ITEMS } from '@/assets/data/menu-items'

type NavbarProps = {
  buttonVariant: string
  centered?: boolean
}

const Navbar = ({ buttonVariant, centered }: NavbarProps) => {
  const { isTrue: isOpen, toggle } = useToggle()
  const { scrollY } = useScrollEvent()
  const menuItems = getAppMenuItems()

  return (
    <header>
      <nav className={clsx('navbar navbar-expand-lg topnav-menu z-10 navbar-light', { 'navbar-sticky': scrollY >= 80 })} data-toggle="sticky">
        <Container>
          <LogoBox />
          <button
            onClick={toggle}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
            aria-controls="topnav-menu-content"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse in={isOpen} className="navbar-collapse">
            <div>
              <AppMenu centered={centered} menuItems={menuItems} />
              <ul className="navbar-nav align-items-lg-center d-flex">
                <li className="nav-item ms-2">
                  <AppMenu centered={centered} menuItems={LANGUAGE_ITEMS} />
                </li>
              </ul>
            </div>
          </Collapse>
        </Container>
      </nav>
    </header>
  )
}
export default Navbar
