import { useState } from "react";
import { motion } from "framer-motion";

export default function SurpriseBox() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="bg-pink-100 border-4 border-pink-300 p-6 rounded-2xl shadow-md cursor-pointer text-center max-w-sm"
      whileHover={{ scale: 1.05 }}
      onClick={() => setOpen(!open)}
    >
      {!open ? (
        <p className="text-pink-700 font-semibold">🎁 Tap to open your surprise!</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-sm text-left whitespace-pre-line"
        >
          💌 <b>Happy First Anniversary, my sweet and beautiful love.</b>  
          Hehehe, it’s hard to believe it’s already been a year since we started this special relationship — we’ve shared sadness, anger, happiness... all of it **together**.

          From the first time you asked me something in the CoinKami community, to really getting to know each other OFF server, and finally moving to WhatsApp — it all felt so unexpected and magical.

          I’m really sorry, my love... if I’ve ever made you upset, or drained your energy and mind. Truly, I’m sorry.  
          But there’s one thing you must know:  
          **I love you. I care deeply about you. And I don’t want to lose you.**  
          You still love me too, right? Hehehe 😘

          I promise, I’ll keep trying to fulfill all your expectations, my darling.  
          So… you’re willing to wait for me, right?

          💖 **I LOVE YOU.**  
          ~ Rein
        </motion.div>
      )}
    </motion.div>
  );
}