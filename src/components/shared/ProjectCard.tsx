import Image from 'next/image';
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6';
import { PinContainer } from '../ui/3d-pin';
import { projects } from '@/lib/constants';

interface ProjectCardProps {
  item: typeof projects[number];
}
const ProjectCard = ({ item }: ProjectCardProps) => {
  return (
    <div
      className="sm:min-h-[500px] md:min-h-[400px] lg:min-h-[32.5rem] h-[500px] flex items-center justify-center"
    >
      <PinContainer
        title={item.link}
        href={item.link}
        target="_blank"
        containerClassName="w-full"
      >
        <div className="relative flex items-center justify-center md:w-[300px] lg:w-[400px] w-[80vw] overflow-hidden aspect-video mb-10">
          <div
            className="relative w-full h-full overflow-hidden lg:rounded-3xl"
            style={{ backgroundColor: "#13162D" }}
          >
            <Image src="/bg.png" alt="bgimg" fill />
          </div>
          <Image
            src={item.img}
            alt="cover"
            fill
            className="z-10 absolute bottom-0"
          />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
          {item.title}
        </h1>

        <p
          className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
          style={{
            color: "#BEC1DD",
            margin: "1vh 0",
          }}
        >
          {item.des}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {item.iconLists.map((icon, index) => (
              <div
                key={index}
                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center relative"
                style={{
                  transform: `translateX(-${5 * index + 2}px)`,
                }}
              >
                <Image src={icon} alt="icon5" fill className="p-2" />
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center">
            <p className="flex lg:text-xl md:text-xs text-sm text-purple">
              Check Live Site
            </p>
            <FaLocationArrow className="ms-3" color="#CBACF9" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard