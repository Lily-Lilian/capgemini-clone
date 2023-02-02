import { BsArrowRight } from "react-icons/bs";

const Recent = () => {
  return (
    <div className="mt-20">
      <div
        style={{
          backgroundImage: `url('https://prod.ucwe.capgemini.com/wp-content/uploads/2022/11/image002.png')`,
        }}
        className="bg-no-repeat bg-cover"
      >
        <div className="bg-white bottom-0 top-0 max-w-[636px]">
          <div className="flex flex-col p-16">
            <p>Harnessing the power of AI to combat River Blindness</p>
            <p>
              Capgemini partners with the University Hospital Bonn to bring an
              end to River Blindness. As part of this effort, they launch the
              fifth Global Data Science Challenge focused on developing an AI
              solution to help with diagnosis and the development of new
              treatments for the disease
            </p>
          </div>
          <button className="py-[11px] flex items-center group-hover:bg-blue-400 gap-1 px-[24px] border border-black rounded-full">
            <p className="">Read More</p>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Recent;
