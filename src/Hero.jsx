import { translations } from "./translations";

function Hero({ lang }) {
  const t = translations[lang];

  return (
    <section className="max-w-[1550px] m-auto pl-10">
      <div className="pt-15.25 flex pl-8.25 justify-between">
        <div className="relative">
          <img
            className="absolute top-0 -left-3"
            src="/svg/three-h1.svg"
            alt=""
          />
          <h1 className="max-w-137 text-[64px] font-semibold mb-6.25">
            {t.HeroH1} <span className="bg-[#E21A431A]">{t.HeroH1Span}</span>
          </h1>
          <p className="text-[16px] text-[#666666] max-w-142.5 mb-6.25">
            {t.HeroP}
          </p>
          <div className="flex gap-6.25">
            <button className="w-32.5 h-12.5 bg-[#E21A43] cursor-pointer text-white duration-200 font-semibold hover:bg-[#b40024]">
              {t.HeroBtn1}
            </button>
            <button className="mr-30.5 w-32.5 h-12.5 border border-[#E21A43] cursor-pointer text-[#E21A43] duration-200 font-semibold hover:bg-[#b4002460]">
              {t.HeroBtn2}
            </button>
            <img className="mt-6.5" src="/svg/heroStar.svg" alt="" />
          </div>
        </div>
        <div><img src="/img/hero-img.png" alt="" /></div>
      </div>
      <div className="max-w-242.5 w-full min-h-32.5 flex gap-17.5 m-auto pt-6.5 pl-7" style={{ boxShadow: "0px 3px 30px 0px #0000000D" }}>
        {t.HeroBottom.map((item, index) => (
            <div
              key={index}
              className="text-[16px] duration-300 transition-all hover:text-[#E21A43] hover:-translate-y-1 text-center"
            >
                <img className="mb-2.25" src={`/img/hero${index+1}.png`} alt="" />
              <a href="#">{item}</a>
            </div>
          ))}
      </div>
    </section>
  );
}

export default Hero;
