import Image from "next/image";
import Link from "next/link";
import main from "../../public/valorant-main.jpg";
import logo from "../../public/valorant-logo.png";


export default function Home() {
  return (
    <section className="bg-gradient-weapon-card animate__fadeIn animate__animated relative flex h-full w-[100%] items-center justify-center rounded-lg md:h-full md:w-[90%]">

      <Image
        src={main}
        alt="valorant-logo"
        className="object-cover relative rounded"
        priority
      />
      <Image
        src={logo}
        alt="valorant-logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 aspect-video"
        priority
        width={500}
        height={400}
      />


      <Link
        href={'/agents'}
        className="absolute bottom-20 center-absolute z-30 w-[90%] max-w-xs border-2 border-red-700 py-2 text-center text-2xl uppercase text-red-700 transition-all
      ease-in-out hover:border-white hover:text-white"
      >
        Enter
      </Link>
    </section>
  );
}
