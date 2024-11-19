import { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import Logo from './assets/images/logo-usa1.svg';
import Img from './assets/images/img1.png';
import Img3 from './assets/images/img2.png';
import Img4 from './assets/images/img3.png';
import Img5 from './assets/images/img4.png';
import Spain from './assets/images/spain.png';
import Usa from './assets/images/usa.png';

import { LANGUAGES } from './intl';

export const App = () => {
  type languageProps = 'US' | 'ES';
  const [language, setLanguage] = useState<languageProps>('US');

  return (
    <div className="w-full">
      <div className="flex justify-center items-center ">
        <div className="w-full">
          <img
            src={Logo}
            className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-3/4 2xl:mx-24 xl:mx-24 lg:mx-24 mx-6"
            alt="Logo PD Energy"
            title="Logo PD Energy"
          />
        </div>

        <nav className="w-full">
          <div className="flex flex-col-2 justify-end itemns-center mx-auto px-4 mt-4">
            <button
              onClick={() => setLanguage('ES')}
              className="border-sm rounded-md p-2 mb-2 w-12"
            >
              <img src={Spain} alt="Translate page to Spanish" />
            </button>
            <button
              onClick={() => setLanguage('US')}
              className="border-sm rounded-md p-2 mb-2 w-12"
            >
              <img src={Usa} alt="Translate page to English" />
            </button>
          </div>

          <ul className="flex justify-end 2xl:px-24 xl:px-24 lg:px-24 px-4">
            <a
              href="https://api.whatsapp.com/send/?phone=14078677407"
              target="_blank"
              className="bg-[#498b00] text-white 2xl:text-xl xl:text-xl lg:text-xl text-xl 
              py-3 px-4 2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center 
              gap-3 rounded-xl my-12 cursor-pointer hover:bg-green-900"
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </ul>
        </nav>
      </div>

      <div className="bg-image">
        <div className="w-full px-8 py-24 bg-black bg-opacity-50 flex justify-end items-center">
          <div className="2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full">
            <p className="text-white 2xl:text-3xl lg:text-3xl text-3xl text-center font-bold">
              {LANGUAGES[language].HERO_TEXT.P1} <br></br>
              {LANGUAGES[language].HERO_TEXT.P2} <br></br>
              <br></br>
              {LANGUAGES[language].HERO_TEXT.P3}
            </p>

            <div className="w-full flex justify-center items-center mt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=14078677407"
                target="_blank"
                className="bg-[#498b00] text-white 2xl:text-xl xl:text-xl lg:text-xl text-lg py-3 px-4 
                        2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-green-900"
              >
                <BsWhatsapp /> {LANGUAGES[language].WHATSAPP_TEXT}
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full mt-20 mx-auto p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-center items-center gap-6">
        <div>
          <h2 className="text-center text-2xl text-green-600 font-bold">
            {LANGUAGES[language].SERVICES_TEXT1.TITLE}
          </h2>
          <p className="text-slate-600 my-3 h-14 flex justify-center items-center">
            {LANGUAGES[language].SERVICES_TEXT1.P1}
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={Img}
              className="w-full justify-center border-2 border-slate-200 shadow-md rounded-md"
              alt="Home Solar Systems"
              title="Home Solar Systems"
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl text-green-600 font-bold">
            {LANGUAGES[language].SERVICES_TEXT2.TITLE}
          </h2>
          <p className="text-slate-600 my-3 h-14 flex justify-center items-center">
            {LANGUAGES[language].SERVICES_TEXT2.P1}
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={Img3}
              className="w-full justify-center border-lg rounded-md"
              alt="Panel cleaning"
              title="Panel cleaning"
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl text-green-600 font-bold">
            {LANGUAGES[language].SERVICES_TEXT3.TITLE}
          </h2>
          <p className="text-slate-600 my-3 h-14 flex justify-center items-center">
            {LANGUAGES[language].SERVICES_TEXT3.P1}
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={Img4}
              className="w-full justify-center"
              alt="Solar Battery"
              title="Solar Battery"
            />
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl text-green-600 font-bold">
            {LANGUAGES[language].SERVICES_TEXT4.TITLE}
          </h2>
          <p className="text-slate-600 my-3 h-14 flex justify-center items-center">
            {LANGUAGES[language].SERVICES_TEXT4.P1}
          </p>
          <div className="w-full overflow-hidden">
            <img
              src={Img5}
              className="w-full justify-center"
              alt="Electric Car Charger"
              title="Electric Car Charger"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center mt-12">
        <a
          href="https://api.whatsapp.com/send/?phone=14078677407"
          target="_blank"
          className="bg-[#498b00] text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-20 cursor-pointer hover:bg-green-900"
        >
          <BsWhatsapp /> Contact Us
        </a>
      </section>

      <footer
        className="text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm m-auto"
      >
        {LANGUAGES[language].FOOTER_TEXT.FOOTER}
        <a
          href="http://missura.com.br"
          target="_blank"
          className="text-white hover:text-black"
        >
          {' '}
          Missura Networks.
        </a>
      </footer>
    </div>
  );
};
