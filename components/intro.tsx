import { useWindowScroll, useWindowSize } from "@uidotdev/usehooks";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import Image from "next/image";
import { MoveDown } from "lucide-react";

export default function Intro() {
  const [{ x, y }, scrollTo] = useWindowScroll();
  const size = useWindowSize();

  return (
    <section className="flex-col pt-10 md:pt-0 md:flex-row flex items-center justify-between h-full relative">
      <div className="">
        <h1
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight md:pr-8"
          style={{
            translate: "-" + y / 3 + "px",
          }}
        >
          Lukas
        </h1>
        <h1
          className="text-6xl md:text-9xl font-bold tracking-tighter leading-tight md:pr-8"
          style={{
            translate: "-" + y / 4 + "px",
          }}
        >
          Mundt.
        </h1>
        <div
          className="text-3xl pl-0 md:pl-1.5"
          style={{
            translate: "-" + y / 5 + "px",
          }}
        >
          Student Angewandte Informatik | <br />
          Interessiert an Webentwicklung und mehr
        </div>
      </div>

      <div
        className="absolute left-0 bottom-0 w-full flex justify-center my-4 h-10 cursor-pointer"
        onClick={() =>
          scrollTo({ left: 0, top: size.height, behavior: "smooth" })
        }
      >
        <MoveDown className="h-full w-full" />
      </div>
    </section>
  );
}
