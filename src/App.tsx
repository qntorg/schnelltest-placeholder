import CoronaSVG from "./assets/corona.svg";

const data = {
  place: "Sandkrug",
  new_place: "Cloppenburg",
  link: "https://schnelltest-clp.de",
  date: "01.03.2023",
};

export const App = () => {
  return (
    <div className="md:h-screen flex justify-center items-center">
      <div className="max-w-2xl mx-4 my-12">
        <h1 className="text-6xl font-semibold mb-4">
          Liebe Bürger&shy;innen und Bürger,
        </h1>
        <div className="mb-4 mt-2 text-xl">
          <p className="mb-1">
            ab sofort
            <span className="font-semibold"> ({data.date}) </span>
            können keine Corona Testungen mehr am Standort
            <span className="font-semibold"> {data.place} </span>angeboten
            werden. Sollten Sie dennoch dringend einen Corona Test benötigen,
            bieten wir in
            <span className="font-semibold"> {data.new_place} </span>
            eingeschränkte Öffnungszeiten an. Klicken Sie hierzu bitte auf den
            unteren Button.
          </p>
          <p className="mb-4">
            Wir bitten um Ihr Verständnis und bedanken uns für Ihr Vertrauen
            über die lange Zeit in der Pandemie.
          </p>
          <p>Ihr Corona-Testteam aus</p>
          <p>{data.place}</p>
        </div>
        <a
          className="rounded-full px-12 py-3 inline-block border hover:scale-105 hover:border-solid border-red-600 bg-red-600 hover:bg-white text-white hover:text-red-600 shadow-lg hover:shadow-none ease-in-out duration-200 font-medium"
          href={data.link}
        >
          Weiter zu {data.new_place}
        </a>
      </div>
      <div className="hidden md:block">
        <img src={CoronaSVG} alt="CoronaSvg" className="h-96" />
      </div>
    </div>
  );
};

export default App;
