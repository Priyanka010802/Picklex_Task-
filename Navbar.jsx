import { motion } from "framer-motion"

export default function Navbar() {

return (

<nav className="navbar">

<motion.h2
initial={{opacity:0,x:-50}}
animate={{opacity:1,x:0}}
transition={{duration:0.8}}
>
PickleX
</motion.h2>

<div className="nav-links">

<a href="#">Playing Rules</a>
<a href="#">Scoring Rules</a>

<motion.button
whileHover={{scale:1.1}}
className="btn"
>
Book Now
</motion.button>

</div>

</nav>

)

}