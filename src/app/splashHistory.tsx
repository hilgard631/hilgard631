import Image from "next/image";
import Link from "next/link";

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const SplashHistory: React.FC = () => {
  return (
    <section id="history" className="main-container">
      <div className="pt-16 pb-24">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:ml-auto md:w-2/3">
            <h2 className="text-3xl text-primary mb-5">
              Positioning Aggies as Leaders in the Wine&nbsp;Industry
            </h2>
            <p>
              At UC Davis, students can pursue a Bachelor of Science, Master of
              Science, or a minor in Viticulture and Enology. These programs
              combine a strong scientific foundation in grape growing and
              winemaking with hands-on, experiential learning in vineyards and
              wineries. Ph.D. students and postdoctoral scholars also have
              opportunities to conduct research alongside our world-class
              multidisciplinary V&E faculty.
            </p>
            <br />
            <p>
              The career opportunities for V&E graduates are limitless, with
              many going on to be winemakers, vineyard managers, professors,
              consultants, researchers, industry leaders, and more. The V&E
              Department’s cutting-edge facilities, research-driven curriculum,
              and deep industry ties shape students into thinkers,
              problem-solvers, and leaders whose careers will help transform the
              wine industry locally and globally.
            </p>
            <div className="mt-8">
              <Link
                href="https://wineserver.ucdavis.edu/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center space-x-2 text-white rounded-sm hover:bg-primary-light active:bg-primary-dark font-bold bg-primary py-2 px-4"
              >
                <span>Learn more about the UC Davis V&amp;E program.</span>
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <div className="w-full">
            <Image
              src={"./oakville_station.jpg"}
              width={1604}
              height={840}
              alt={
                "A vineyard with rows of grapevines and mountainous background."
              }
            />
            <p className="text-sm mt-1 opacity-75">
              Rows of grapevines in a vineyard stretching into the distance,
              with autumn-colored leaves and a mountainous landscape in the
              background under a clear sky.
              (Gregory&nbsp;Urquiaga&nbsp;/&nbsp;UC&nbsp;Davis)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashHistory;
