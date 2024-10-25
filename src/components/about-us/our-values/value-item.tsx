type ValueItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const ValueItem: React.FC<ValueItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-6 items-center">
      {icon}
      <h3 className="text-center text-[24px] md:text-[32px] text-black font-bold">
        {title}
      </h3>
      <p className="paragraph max-w-[405px] text-center">{description}</p>
    </div>
  );
};

export default ValueItem;
