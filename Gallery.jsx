import g1 from "../assets/court.png"
import g2 from "../assets/ball.png"
import g3 from "../assets/Let's Play Pickleball [2].mp4"
import g4 from "../assets/player.png"

export default function Gallery() {
  return (

    <section className="gallery">

      <h2>Moments From Court</h2>

      <div className="gallery-grid">

        <div className="gallery-item float">
          <img src={g1} alt="gallery1" />
        </div>

        <div className="gallery-item float">
          <img src={g2} alt="gallery2" />
        </div>

        <div className="gallery-item float">
          <video
            src={g3}
            autoPlay
            muted
            loop
            controls
          />
        </div>

        <div className="gallery-item float">
          <img src={g4} alt="gallery4" />
        </div>

      </div>

    </section>

  )
}