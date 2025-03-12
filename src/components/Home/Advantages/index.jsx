"use client";

import { advantages } from "@/src/data/dataHome";

// External imports
import { motion } from "framer-motion";

const Advantages = () => {
  return (
    <section className="container mx-auto px-6 md:px-8 py-16">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "linear",
          }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-black dark:text-white mb-4"
        >
          Algunos Beneficios
        </motion.h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {advantages?.map((advantage, index) => (
          <motion.div
            key={advantage?.title}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: (index + 1) * 0.1,
              ease: "linear",
            }}
            viewport={{ once: true }}
            className="p-8 bg-white dark:bg-[#24303f] rounded-lg shadow-lg transform transition-all duration-300 hover:shadow-xl hover:bg-[#0948730d] hover:bg-opacity-5 dark:hover:bg-[#0948731a] dark:hover:bg-opacity-10"
          >
            <div className="text-[#094873] text-4xl mb-6 transform transition-transform duration-300 group-hover:scale-110">
              {advantage?.icon}
            </div>
            <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
              {advantage?.title}
            </h3>
            <p className="text-body-color dark:text-body-color-dark leading-relaxed">
              {advantage?.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
