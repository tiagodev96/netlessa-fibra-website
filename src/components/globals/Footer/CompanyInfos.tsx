import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

type Social = {
  id: string;
  social_name: string;
  icon: {
    url: string;
  };
  link: string;
};

type CompanyInfosProps = {
  logo: {
    url: string;
    alt: string;
  };
  address: string;
  phoneNumber: string;
  email: string;
  socials: Social[];
};

const Address: FC<{ address: string }> = ({ address }) => (
  <div>
    <p className="tag">Endereço</p>
    <p className="paragraph">{address}</p>
  </div>
);

const Contact: FC<{ phoneNumber: string; email: string }> = ({
  phoneNumber,
  email,
}) => {
  const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, "");
    return `+55${cleaned}`;
  };

  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

  return (
    <div>
      <p className="tag">Contato:</p>

      <p className="paragraph">
        <a href={`tel:${formattedPhoneNumber}`} className="inline-block">
          {phoneNumber}
        </a>
      </p>

      <p className="paragraph">
        <a href={`mailto:${email}`} className="inline-block">
          {email}
        </a>
      </p>
    </div>
  );
};

const SocialLinks: FC<{ socials: Social[] }> = ({ socials }) => (
  <div className="flex gap-3">
    {socials.map((social) => (
      <div key={social.id}>
        <Link href={social.link} target="_blank">
          <Image
            src={social.icon.url ?? ""}
            alt={social.social_name}
            width={24}
            height={24}
          />
        </Link>
      </div>
    ))}
  </div>
);

const CompanyInfos: FC<CompanyInfosProps> = ({
  logo,
  address,
  phoneNumber,
  email,
  socials,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-52 h-12">
        <Link href="/">
          <Image
            src={logo.url ?? ""}
            alt={logo.alt ?? "Company logo"}
            sizes="100vw"
            fill
            className="object-contain"
          />
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        <Address address={address} />
        <Contact phoneNumber={phoneNumber} email={email} />
        {socials && <SocialLinks socials={socials} />}
      </div>
    </div>
  );
};

export default CompanyInfos;
