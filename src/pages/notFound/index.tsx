import IGHeader from "components/IGHeader";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const go = useNavigate();
  return (
    <>
      {" "}
      <IGHeader />
      <div className="min-h-[500px] flex flex-col items-center justify-center  font-semibold bg-slate-200">
        <div className="  text-white py-4 px-3 min-w-[30rem] mx-20 flex text-[2rem] items-center justify-center">
          Page Not Found
        </div>
        <div
          className=" text-[1.5rem] rounded bg-slate-600 px-3 py-1 cursor-pointer text-white hover:bg-slate-500"
          onClick={() => {
            go("/");
          }}
        >
          回到首頁
        </div>
      </div>
    </>
  );
};

export default NotFound;
