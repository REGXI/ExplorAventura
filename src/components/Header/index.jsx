import Navigation from '../Navigation'
export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <Navigation />
      </div>
    </header>
  )
}
