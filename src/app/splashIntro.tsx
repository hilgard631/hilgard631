import Image from "next/image";
import NavItems from "./components/navItems";

const SplashIntro: React.FC = () => {
  return (
    <section
      id="intro"
      className="relative h-full-dvh overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/grapesonvine.jpg')" }}
    >
      <div className="relative z-10 md:h-screen flex">
        <div
          id="shownav"
          className="w-full md:w-2/3 xl:w-1/3 flex flex-col bg-primary splash-red text-white p-4 md:p-12 md:m-16"
        >
          <div className="mb-2">
            <Image
              width={72}
              height={73}
              alt="Pencil image of a grape leaf"
              src="/grapeleaf.svg"
            />
          </div>

          <h1 className="text-xl italic mt-auto">From Vine to Vision</h1>

          <Image
            src="/hilgard631-light.svg"
            width={300}
            height={67}
            className="mb-4"
            alt="Hilgard631 Logo"
          />

          <p className="text-base">
            With over 145 years of global leadership in grape and wine
            education, the UC Davis Department of Viticulture and Enology (V&E)
            enters a new era with the launch of Hilgard631. This 501(c)(3)
            nonprofit makes it possible for us to share our wine with the public
            for the benefit of student scholarship.
          </p>

          <br />
          <NavItems />
        </div>
      </div>
    </section>
  );
};

export default SplashIntro;
