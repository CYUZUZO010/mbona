import { Phone } from "lucide-react";
import Link from "next/link";
const Card = () => {
  return (
    <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] xl:max-w-[1261px]">
      <div className="bg-white shadow-lg w-full min-h-[400px] sm:min-h-[450px] md:h-[491px] mx-auto rounded-lg sm:rounded-xl overflow-hidden">
        <div className="flex flex-col p-4 sm:p-6 md:p-8 lg:ml-10">
          <h2 className="font-bold text-base sm:text-lg mt-4 sm:mt-6 md:mt-10 mb-3 sm:mb-4 md:mb-5">
            Amandine Kaneza
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5 mb-6 sm:mb-8 md:mb-10">
            <span className="text-[#009367] text-xs sm:text-sm">
              8 years old in Kigali
            </span>
            <span className="text-[#009367] text-xs sm:text-sm">Kigali</span>
            <span className="bg-[#00936747] px-4 sm:px-6 md:px-8 rounded-full text-[#009367] text-xs sm:text-sm">
              Genocide Survivor
            </span>
          </div>
          <p className="text-[#000000CC] mb-6 sm:mb-8 md:mb-10 text-sm sm:text-base">
            Looking for my sister Maria who was 8 years old in 1994. We were
            separated in Nyamata. She had a small scar on the left hand
          </p>
          <ol className="mb-4 sm:mb-6 md:mb-8">
            <h2 className="font-bold text-sm sm:text-base mb-2">Memories</h2>
            <li className="text-sm sm:text-base mb-1">
              We lived near the church
            </li>
            <li className="text-sm sm:text-base mb-1">She loved to sing</li>
            <li className="text-sm sm:text-base mb-4 sm:mb-6 md:mb-8">
              Our father was a teacher
            </li>
          </ol>
          <hr className="my-4 sm:my-6" />
          <Link
            className="flex items-center justify-center mt-6 sm:mt-8 md:mt-10 bg-[#009367] w-full sm:w-[200px] md:w-[251px] min-h-[45px] sm:h-[51px] px-4 py-2 sm:py-3 rounded-lg gap-2 sm:gap-3 text-white text-sm sm:text-base font-medium"
            href={"/"}
          >
            Contact Amandine
            <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-[24px] md:h-[24px] flex-shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
