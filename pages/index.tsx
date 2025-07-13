import Image from "next/image";
import { motion } from "framer-motion";
import SurpriseBox from "@/components/SurpriseBox";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-2 text-center">
        Happy 1st Anniversary 💖
      </h1>
      <p className="text-lg text-gray-600 text-center mb-6">
        To the most beautiful girl who stole my heart
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {["photo1.jpg", "photo2.jpg", "photo3.jpg"].map((src, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl overflow-hidden shadow-lg border-4 border-pink-300"
          >
            <Image
              src={`/${src}`}
              alt={`Photo ${i + 1}`}
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </motion.div>
        ))}
      </div>

      <SurpriseBox />
    </main>
  );
}