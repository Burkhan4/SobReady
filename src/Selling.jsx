import { translations } from "./translations";

function Selling({ lang }) {
  const t = translations[lang];

  return (
    <section className="bg-[#F7F7F7] min-h-173.75 dark:bg-black">
      <div className="container text-center pt-17.5 px-33.75">
        <h2 className="text-[24px] font-semibold mb-5">{t.SellingH2}</h2>
        <ul className="flex max-w-109.5 gap-5 m-auto mb-10">
            {t.SellingList.map((item, index) => (
            <li
              key={index}
              className="text-[16px] duration-300 transition-all hover:text-[#E21A43] hover:-translate-y-1"
            >
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-4 max-w-297.75">
          {t.New.map((item, index) => (
            <div
              key={index}
              className="max-w-67.5 w-full min-h-60 duration-200 mb-10 bg-white pl-3.75 pt-3 transition-all dark:bg-[#474545] cursor-pointer hover:-translate-y-1"
            >
              <img
                className="w-61.5 h-67"
                src={`/img/new${index}.png`}
                alt=""
              />
              <p className="text-[18px] pt-2 pb-3.75">{item}</p>
              <p className="mb-7 text-[22px] text-[#666666]">$40.00 <span className="text-[#333333] #666666">$30.00</span> <span className="text-[12px]">(1kg)</span></p>
            </div>
          ))}
        </div>
        <img className="m-auto cursor-pointer" src="/svg/Selling.svg" alt="" />
      </div>
    </section>
  );
}

export default Selling;
