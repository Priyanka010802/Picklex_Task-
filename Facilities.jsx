import f1 from "../assets/player.png"
import f2 from "../assets/court.png"
import f3 from "../assets/ball.png"
import f4 from "../assets/Frame 52.png"

const facilities = [
  { title: "Premium Court", img: f1, type: "image" },
  { title: "Comfortable Seating", img: f2, type: "image" },
  { title: "Changing Room", img: f3, type: "image" },
  { title: "Paddles & Balls", img: f4, type: "video" }
]

export default function Facilities() {
  return (

    <section className="facilities">

      <h2>Our Facilities</h2>

      <div className="facility-grid">

        {facilities.map((item, index) => (
          <div className="facility-card" key={index}>

            {item.type === "video" ? (
              <video src={item.img} autoPlay muted loop />
            ) : (
              <img src={item.img} alt={item.title} />
            )}

            <p>{item.title}</p>

          </div>
        ))}

      </div>

    </section>

  )
}