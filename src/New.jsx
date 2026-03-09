import { translations } from "./translations";

function New({ lang }) {
  const t = translations[lang];

  return (
    <section className="bg-[#F7F7F7] min-h-173.75 dark:bg-black">
      <div className="container text-center pt-17.5 px-33.75">
        <h2 className="text-[24px] font-semibold mb-18.5">{t.NewProduct}</h2>
        <div className="grid grid-cols-4 max-w-297.75">
          {t.New.map((item, index) => (
            <div
              key={index}
              className="max-w-67.5 w-full min-h-60 duration-200 bg-white pl-3.75 pt-3 transition-all dark:bg-[#474545] cursor-pointer hover:-translate-y-1"
            >
              <img
                className="w-61.5 h-67"
                src={`/img/new${index}.png`}
                alt=""
              />
              <p className="text-[18px] pt-2 pb-3.75">{item}</p>
              <button className="bg-[#E21A431A] mb-6 w-32.5 h-12.5 text-[#E21A43] text-[16px] duration-200 hover:bg-[#e21a424d] cursor-pointer font-semibold">{t.NewBtn}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default New;
