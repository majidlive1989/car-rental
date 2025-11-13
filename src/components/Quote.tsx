import React from "react";
import star from "../assets/img/Group 5182.png";
import { motion } from "motion/react";
type TcommentType = {
  firstName: string;
  address: string;
  img: string;
  children: React.ReactNode;
};
const Queta = ({ firstName, address, img, children }: TcommentType) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      className="flex flex-col gap-4 p-6 shadow-xl rounded-2xl sm:w-full hover:-translate-y-1 duration-300"
    >
      <div className="flex gap-2  items-center">
        <div>
          <img className="w-12 h-12 " src={img} alt="" />
        </div>
        <div className="flex flex-col ">
          <p className="text-[20px]">{firstName}</p>
          <p className="text-[16px] text-gray-600">{address}</p>
        </div>
      </div>
      <div>
        <img src={star} alt="" />
      </div>
      <div className="text-gray-500">{children}</div>
    </motion.div>
  );
};

export default Queta;
