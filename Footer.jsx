export default function Footer() {
  return (

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-info">
          <h2>PickleX</h2>

          <p>+91 8087410329</p>

          <p>
            Pickleball Court, Baner - Pashan Link Road,
            behind Ven, Pashan, Pune
          </p>
        </div>

        <div className="footer-map">

          <iframe
            title="PickleX Location"
            src="https://www.google.com/maps?q=pashan+pune&output=embed"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
          />

        </div>

      </div>

      <div className="footer-bottom">
        <p>Copyright @abc2026</p>

        <div className="footer-links">
          <a href="#">Terms & Condition</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

    </footer>

  )
}