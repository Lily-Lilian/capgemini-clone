import { BsArrowRight } from "react-icons/bs";

const Advanced = () => {
  return (
    <div className="flex relative justify-end bg-[#FDFDFD] mt-20 max-w-[1320px] mx-auto px-12 group">
      <div className=" bg-white left-20 z-20 top-8 bottom-2 h-[256px] absolute shadow-md max-w-[864px] p-20">
        <div className="flex flex-col">
          <h1 className="font-medium font-2xl">Davos 2023</h1>
          <p className="">
            The future of industry will be more intelligent, efficient,
            sustainable and resilient
          </p>
        </div>
        <div className="right-4 absolute bottom-2">
          <button className="py-[11px] flex items-center group-hover:bg-blue-400 gap-1 px-[24px] border border-black rounded-full">
            <p className="">Read More</p>
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className="bg-black w-[540px] h-[343px] overflow-clip">
        <img
          className="max-w-xl bg-transparent hover:scale-110 duration-200"
          src="https://prod.ucwe.capgemini.com/wp-content/uploads/2022/11/DAVOS_23_KEY_VISUAL-no-text.jpg?w=1000&quality=90"
          alt=""
        />
      </div>
    </div>
  );
};

export default Advanced;
