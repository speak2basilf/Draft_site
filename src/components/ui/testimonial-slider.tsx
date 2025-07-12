"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

export const TestimonialSlider = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const autorotateTiming: number = 7000;

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === testimonials.length ? 0 : (active) => active + 1,
      );
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate, testimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <div className="mx-auto w-full max-w-4xl text-center">
      <div className="relative h-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-b before:from-blue-500/25 before:via-blue-500/5 before:via-25% before:to-blue-500/0 before:to-75%">
          <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
            {testimonials.map((testimonial, index) => (
              <Transition
                as="div"
                key={index}
                show={active === index}
                className="absolute inset-0 -z-10 h-full"
                enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                enterFrom="opacity-0 -rotate-[60deg]"
                enterTo="opacity-100 rotate-0"
                leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                leaveFrom="opacity-100 rotate-0"
                leaveTo="opacity-0 rotate-[60deg]"
                beforeEnter={() => heightFix()}
              >
                <img
                  className="relative left-1/2 top-11 -translate-x-1/2 rounded-full border-4 border-white/50 shadow-lg"
                  src={testimonial.img}
                  width={80}
                  height={80}
                  alt={testimonial.name}
                />
              </Transition>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-9 transition-all delay-300 duration-150 ease-in-out">
        <div className="relative flex flex-col" ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <Transition
              key={index}
              show={active === index}
              enter="transition ease-in-out duration-500 delay-200 order-first"
              enterFrom="opacity-0 -translate-x-4"
              enterTo="opacity-100 translate-x-0"
              leave="transition ease-out duration-300 delay-300 absolute"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-4"
              beforeEnter={() => heightFix()}
            >
              <div>
                <div className="text-2xl font-bold text-blue-900 before:content-['\201C'] after:content-['\201D'] mb-4">
                  {testimonial.quote}
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  — {testimonial.name}
                </div>
                <div className="text-sm text-blue-600 font-medium">
                  {testimonial.role}
                </div>
              </div>
            </Transition>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => {
            setActive(active === 0 ? testimonials.length - 1 : active - 1);
            setAutorotate(false);
          }}
          className="flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full bg-white/40 backdrop-blur-lg border-2 border-white/20 hover:bg-blue-600 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        
        <div className="-m-1.5 flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              className={`m-1.5 inline-flex justify-center whitespace-nowrap rounded-full px-4 py-2 text-sm shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300 ${
                active === index
                  ? "bg-blue-500 text-white shadow-blue-950/10"
                  : "bg-white/60 text-blue-900 hover:bg-blue-100"
              }`}
              onClick={() => {
                setActive(index);
                setAutorotate(false);
              }}
            >
              <span>{testimonial.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        <button
          onClick={() => {
            setActive(active + 1 === testimonials.length ? 0 : active + 1);
            setAutorotate(false);
          }}
          className="flex h-12 w-12 items-center justify-center text-xl transition-all duration-300 rounded-full bg-white/40 backdrop-blur-lg border-2 border-white/20 hover:bg-blue-600 hover:text-white hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 shadow-lg"
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};