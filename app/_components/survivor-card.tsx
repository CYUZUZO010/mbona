import { Bookmark } from "lucide-react";

const SurvivorCard = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white shadow-lg w-full sm:w-[280px] md:w-[350px] lg:w-[400px] xl:w-[450px] p-4 sm:p-5 md:p-6 min-h-[200px] sm:min-h-[220px] md:h-[250px] mx-auto sm:ml-4 md:ml-6 lg:ml-10 mt-4 sm:mt-6 md:mt-10 lg:mt-15 rounded-lg">
      <Bookmark className="text-white bg-[#00936754] rounded-full p-2 w-10 h-10 sm:w-12 sm:h-12 md:w-[50px] md:h-[50px] mb-3 sm:mb-4 flex-shrink-0" />
      <h2 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base md:text-lg text-center">
        Genocide Survivors
      </h2>
      <span className="text-center text-[#000000CC] font-medium w-full sm:w-[85%] md:w-[70%] text-xs sm:text-sm md:text-base px-2">
        For those who lost family during the 1994 genocide against the Tutsi.
        Share memories and search for lost loved ones.
      </span>
    </div>
  );
};

export default SurvivorCard;
