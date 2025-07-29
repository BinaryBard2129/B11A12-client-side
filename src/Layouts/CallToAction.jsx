// components/CallToAction.jsx
import React from "react";
import ctaImage from "../assets/images/ctaimg.jpg";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <div className="relative mb-8 w-full max-w-7xl mx-auto mt-16 rounded-lg overflow-hidden shadow-xl">
      <img
        src={ctaImage}
        alt="Adopt a pet"
        className="w-full h-[350px] md:h-[450px] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 flex items-center justify-center px-6">
        <motion.div
          className="text-center text-white max-w-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md">
            Every paw deserves a loving home 🐾
          </h2>
          <p className="text-lg md:text-2xl font-medium drop-shadow-md">
            Your small act of kindness can change their world. Adopt a pet today and give them the life they deserve.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToAction;
