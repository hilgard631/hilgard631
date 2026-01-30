import Image from "next/image";

const SplashAbout: React.FC = () => {
  return (
    <section id="about" className="bg-primary text-white">
      <div className="main-container">
        <div className="pt-16 pb-24">
          <div className="flex flex-col md:flex-row">
            <div className="md:ml-auto w-full md:w-2/3">
              <h2 className="text-3xl mb-4">Origins of Hilgard631</h2>
              <p>
                The name Hilgard631 pays tribute to Dr. Eugene Hilgard, a
                pioneering soil scientist, viticulturist, and the first director
                of the University Agricultural Experiment Station (AES), which
                has, and continues to, lay the groundwork for successful
                agriculture in California. The number 631 is the address of the
                UC Davis LEED Platinum Teaching and Research Winery on Hilgard
                Lane—the world’s first winery to receive this distinction in
                sustainability.
              </p>
              <br />
              <h3 className="text-2xl mb-2">The Grapes and Wines</h3>
              <p>
                Wines are made in the UC Davis LEED Platinum Teaching and
                Research Winery from grapes grown by us. They come from Oakville
                Station, our premier Napa Valley vineyard used for generations
                to produce both world-class research and wines, and our
                vineyards that surround the UC Davis campus. Each year students
                with the support of V&E staff and faculty make wine as part of
                the classes taught to undergraduate and graduate students.
              </p>
            </div>
          </div>

          {/* IMAGE 1 */}
          <div className="flex flex-col mb-5 mt-12">
            <div className="w-full">
              <Image
                src={"./about_1.jpg"}
                width={1600}
                height={818}
                alt={"Hands inspecting grape clusters in a vat."}
              />
            </div>
            <p className="text-sm mt-1 opacity-75">
              Hands sort freshly harvested grapes. (Gregory Urquiaga / UC Davis)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashAbout;
