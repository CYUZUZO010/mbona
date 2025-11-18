import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

const Foundation = () => {
  return (
    <div className="flex flex-col ml-10 bg-white shadow-lg w-[400px] h-[450px] p-10 ">
      <h1 className="font-bold mt-6">Ibuka Surviors foundation</h1>
      <br></br>

      <p>
        Supporting genocide survivors with counseling, education, and comunity
        programs.
      </p>
      <br></br>
      <span className="mb-2 flex">
        <Phone className="text-[#009367]" />
        +250 793 313 1491
      </span>
      <span className="mb-2 flex">info@ibuka.rw</span>
      <span className="mb-2 flex">Kigali, Butare, Gikongoro</span>
      <span className="mb-2 flex">Mon-Fri 8AM-6PM</span>
      <br></br>
      <hr />
      <Button
        asChild
        className={`border-white/90 text-white bg-[#009367]  hover:text-white rounded px-4 mt-5`}
      >
        <Link href={"/"}>
          Contact this resource <Phone />
        </Link>
      </Button>
    </div>
  );
};

export default Foundation;
