import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-32 h-screen relative">
      <div className="fixed top-0 w-full h-full -z-10 bg-black/50"></div>
      <Image
        src="/assets/hero-bg.webp"
        alt="Photo du GP Explorer 2"
        width={0}
        height={0}
        sizes="100vw"
        className="fixed top-0 -z-20 object-cover w-full h-full"
      />
      <div className="mx-auto lg:max-w-4xl 2xl:max-w-6xl">
        <p className="font-gulf-display text-primary-orange text-8xl">BUMP</p>
        <h1 className="text-6xl font-gulf-display mt-6 italic">
          <span className="font-clash-display text-tertiary-yellow text-3xl font-bold not-italic">
            propose <br />
          </span>
          une alternative ambitieuse dans le monde des agences d'artistes et de
          marketing digital
        </h1>
        <p className="text-ibmPlex text-tertiary-yellow text-lg mt-6">
          Fondée par un collectif de créateurs de contenu
        </p>
      </div>
    </div>
  );
};

export default Hero;
