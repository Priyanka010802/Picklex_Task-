import { motion } from "framer-motion"
import court from "../assets/player.png"
import ball from "../assets/court.png"
import player2 from "../assets/ball.png"

export default function About(){

return(

<section className="about">

<motion.div
initial={{opacity:0, y:80}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.8}}
viewport={{once:true}}
>

<h2>The Home of Modern Pickleball</h2>

<p>
PickleX is redefining the way pickleball is experienced
with thoughtfully designed courts and facilities.
</p>

</motion.div>


<div className="about-images">

<motion.img 
src={court}
initial={{opacity:0, x:-50}}
whileInView={{opacity:1, x:0}}
transition={{duration:0.8}}
/>

<motion.img 
src={ball}
initial={{opacity:0, x:50}}
whileInView={{opacity:1, x:0}}
transition={{duration:0.8}}
/>

<motion.img 
src={player2}
initial={{opacity:0, y:60}}
whileInView={{opacity:1, y:0}}
transition={{duration:0.8}}
/>

</div>

</section>

)
}