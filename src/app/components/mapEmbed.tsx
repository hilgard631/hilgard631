import Image from "next/image";

const MapEmbed: React.FC = () => (
  <div className="relative w-full pb-[55%]">
    <Image
      src={"./map.png"}
      alt="map location of Hilgard sales"
      width={400}
      height={400}
      className="object-cover mb-2 w-full"
    />
    {/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121.0739287679385!2d-121.75389222408072!3d38.532063971804355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80852910da394fbf%3A0xfb28465776fbe59f!2s631%20Hilgard%20Ln%2C%20Davis%2C%20CA%2095616!5e0!3m2!1sen!2sus!4v1748382644000!5m2!1sen!2sus"
      className="absolute top-0 left-0 w-full h-full border-0"
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map of 631 Hilgard Ln, Davis, CA"
    ></iframe> */}
  </div>
);

export default MapEmbed;
