import { translations } from "./translations";

function Service({ lang }) {
  const t = translations[lang];

  return (
    <section className="container h-146.75 mt-17.5">
      <div className="flex pt-25.5 pl-50.75 gap-7.5 h-64 bg-[url('/img/serviceBg.png')] bg-cover bg-center">
        <div>
          <img src="/img/service.png" alt="" />
        </div>
        <div className="pt-11.75">
          <h2 className="max-w-142.5 text-[60px] text-[#666666] font-semibold leading-[150%] mb-2.25">
            {t.SpecialH2}
          </h2>
          <p className="text-[32px] text-[#666666] font-semibold mb-8.25">
            $20.00 <span className="text-[#333333]">$18.00</span>
          </p>

          <button className="mr-30.5 w-32.5 h-12.5 border border-[#E21A43] cursor-pointer text-[#E21A43] duration-200 font-semibold hover:bg-[#b4002460]">
            {t.HeroBtn2}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Service;
