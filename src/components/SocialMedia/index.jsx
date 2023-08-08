export default function SocialMedia({ navigationColor }) {
  return (
    <div className="header__social">
      <a
        href="tel:+50525521603"
        style={{ color: navigationColor === 'light' && '#fff' }}
      >
        <i className="fa-solid fa-phone" />
        <span> (505) 2552 1603</span>
      </a>
      <a
        href="https://www.facebook.com/ExplorAventura-Travel-101501368925201"
        target="_blank"
        rel="noreferrer"
        className="facebook"
      >
        <i className="fa-brands fa-facebook" />
      </a>
      <a
        href="https://www.instagram.com/exploraventura.travel/"
        target="_blank"
        rel="noreferrer"
        className="instagram"
      >
        <i className="fa-brands fa-instagram" />
      </a>
    </div>
  )
}
