import Image from "next/image";
import React from "react";

type TeamMemberProps = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
};

function TeamMember({ name, role, imageSrc, description }: TeamMemberProps) {
  return (
    <div className="flex flex-col items-center">
      <Image
        src={imageSrc}
        alt=""
        width={80}
        height={80}
        className="rounded-full mb-6"
      />
      <div className="flex flex-col mb-4">
        <p className="text-center font-semibold text-[20px] text-blue">
          {name}
        </p>
        <p className="text-center text-[18px]">{role}</p>
      </div>
      <p className="paragraph text-center max-w-[394px]">{description}</p>
    </div>
  );
}

export default TeamMember;
