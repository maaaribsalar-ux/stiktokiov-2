import Image from 'next/image'
import Link from 'next/link'

const LogoBox = () => {
  return (
    <Link className="navbar-brand logo position-relative" style={{ aspectRatio: '4.4 / 1', width: '200px' }} href="/">
      <Image src={'/images/tiktokio-logo.webp'} fill className="align-top object-fit-cover" alt="logo-light" priority />
    </Link>
  )
}
export default LogoBox
