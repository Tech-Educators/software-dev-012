"use client";
import AnimateIn from "@/components/AnimateIn";
import { ChainAnimate } from "@/components/ChainAnimate";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      <h1>Framer Motion</h1>

      <motion.div animate={{ x: 100 }} transition={{ delay: 1 }}>
        Words
      </motion.div>
      <motion.div drag="x" dragConstraints={{ left: 0, right: 1000 }}>
        Drag me
      </motion.div>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <p>I am a p tag that is making the page taller</p>
      <AnimateIn>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
        <p>Lorem ipsum dolor sit amet</p>
      </AnimateIn>
      <AnimateIn>
        <p>I am a p tag that is making the page taller</p>
      </AnimateIn>
      <AnimateIn>
        <p>I animate in</p>
      </AnimateIn>
      <ChainAnimate />
    </div>
  );
}
