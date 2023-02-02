import Navbar from "@/components/layouts/Navbar";
import Advanced from "@/components/sections/Advanced";
import Recent from "./../components/sections/Recent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Advanced />
      <Recent />
    </div>
  );
};

export default Home;
