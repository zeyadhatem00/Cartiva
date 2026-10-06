import { Getcategories } from "@/app/Services/Category.api";

import Marquee from "react-fast-marquee";
import CategoryCard from "../CategoryCard/page";

export default async function CategoryMarquee() {
  let categoty = await Getcategories();

  return (
    <>
      <Marquee
        className="w-full"
        speed={40}
        pauseOnHover
        autoFill
        gradient
        gradientColor="#ffffff"
        gradientWidth={60}
      >
        <div className="flex gap-3 py-2  px-3">
          {" "}
          {categoty.map((category) => {
            return (
              <CategoryCard
                key={category._id}
                {...category}
                categoryPage={false}
              />
            );
          })}
        </div>
      </Marquee>
    </>
  );
}
