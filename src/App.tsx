import { BsWhatsapp } from 'react-icons/bs';
import Logo from './assets/images/logo-usa-sem-fundo.png';
import Img from './assets/images/img2.jpg';
import Img3 from './assets/images/img3.png';
import Img4 from './assets/images/img4.jpg';
import Img5 from './assets/images/img5.jpg';

export const App = () => {
  return (
    <div className='w-full'>
      <div className='flex justify-center items-center'>
        <div className='w-full'>
          <img
            src={Logo}
            className='w-full'
            alt='Logo PD Energy'
            title='Logo PD Energy'
          />
        </div>

        <nav className='w-full'>
          <ul className='flex justify-center'>
            <a
              href='https://api.whatsapp.com/send/?phone=5519991711316&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+gera%C3%A7%C3%A3o+de+energia+solar+rural.'
              target='_blank'
              className='bg-[#498b00] text-white 2xl:text-xl xl:text-xl lg:text-xl text-xl 
              py-3 px-4 2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center 
              gap-3 rounded-xl my-12 cursor-pointer hover:bg-green-900'
            >
              <BsWhatsapp /> WhatsApp
            </a>
          </ul>
        </nav>
      </div>

      <div className='bg-image'>
        <div className='w-full px-8 py-24 bg-black bg-opacity-50 flex justify-end items-center'>
          <div className='2xl:w-1/2 xl:w-1/2 lg:w-1/2 w-full'>
            <p className='text-white 2xl:text-3xl lg:text-3xl text-3xl text-center font-bold'>
              PD Energy USA designs, installs, and maintains solar panels for
              homes.<br></br>
              With solar energy, you can save on your energy bill, increase the
              value of your home, and become sustainable.<br></br>
              <br></br>
              Contact us to learn more.
            </p>

            <div className='w-full flex justify-center items-center mt-6'>
              <a
                href='https://api.whatsapp.com/send/?phone=5519991711316&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+gera%C3%A7%C3%A3o+de+energia+solar+rural.'
                target='_blank'
                className='bg-[#498b00] text-white 2xl:text-xl xl:text-xl lg:text-xl text-lg py-3 px-4 
                        2xl:px-4 xl:px-4 lg:px-4 flex justify-center items-center gap-3 rounded-xl cursor-pointer hover:bg-green-900'
              >
                <BsWhatsapp /> Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className='w-9/12 my-4 mx-auto p-4 grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 grid-cols-1 justify-center items-center gap-6'>
        <div>
          <h2 className='text-center text-2xl text-green-600 font-bold'>
            Home Solar Systems
          </h2>
          <p className='text-slate-600 my-3 h-14 flex justify-center items-center'>
            Achieve energy independence, reduce your electricity bill with PD
            Energy USA's solar system.
          </p>
          <div className='w-full h-96 overflow-hidden'>
            <img
              src={Img}
              className='w-full justify-center border-2 border-slate-200 shadow-md rounded-md'
              alt='Home Solar Systems'
              title='Home Solar Systems'
            />
          </div>
        </div>
        <div>
          <h2 className='text-center text-2xl text-green-600 font-bold'>
            Panel Cleaning
          </h2>
          <p className='text-slate-600 my-3 h-14 flex justify-center items-center'>
            Panel cleaning is essential for greater energy generation.
          </p>
          <div className='w-full h-96 overflow-hidden'>
            <img
              src={Img3}
              className='w-full justify-center border-lg rounded-md'
              alt='Panel cleaning'
              title='Panel cleaning'
            />
          </div>
        </div>
      </section>

      {/* <section
        className='2xl:w-1/2 xl:w-1/2 w-full h-full m-auto grid 2xl:grid-cols-0 mt-20
      xl:grid-cols-0 grid-cols-2 p-4 gap-6 justify-center items-center'
      >
        <div className='grid grid-cols-2 gap-12'>
          <img
            src={Img3}
            className='w-full justify-center border-lg rounded-md'
            alt='Panel cleaning'
            title='Panel cleaning'
          />
          <div>
            <h2 className='text-center text-lg font-bold'>Panel Cleaning</h2>
            <p>Panel cleaning is essential for greater energy generation.</p>
          </div>
        </div>
      </section>

      <section
        className='2xl:w-1/2 xl:w-1/2 w-full h-full m-auto grid 2xl:grid-cols-0 mt-20
      xl:grid-cols-0 grid-cols-2 p-4 gap-6 justify-center items-center'
      >
        <div>
          <img
            src={Img4}
            className='w-full justify-center'
            alt='Solar Battery'
            title='Solar Battery'
          />
          <div>
            <h2 className='text-center text-lg font-bold'>Solar Battery</h2>
            <p>
              You can store the energy generated by the panels using batteries,
              and use the energy when necessary. In the event of a power outage,
              you will continue to use energy in your home.
            </p>
          </div>
        </div>
      </section>

      <section
        className='2xl:w-1/2 xl:w-1/2 w-full h-full m-auto grid 2xl:grid-cols-0 mt-20
      xl:grid-cols-0 grid-cols-2 p-4 gap-6 justify-center items-center'
      >
        <div>
          <img
            src={Img5}
            className='w-full justify-center'
            alt='Electric Car Charger'
            title='Electric Car Charger'
          />
          <div>
            <h2 className='text-center text-lg font-bold'>
              Electric Car Charger
            </h2>
            <p>PD Energy USA Installs Electric Vehicle Chargers.</p>
          </div>
        </div>
      </section>

      <h1
        className='text-xl text-center 2xl:text-3xl xl:text-3xl lg:text-3xl 
           my-20 mx-auto 2xl:w-2/3 xl:w-2/3 lg:w-2/3 w-full font-bold px-4'
      >
        Want to know more? Request a quote now.
      </h1>

      <section className='flex justify-center items-center mb-10'>
        <a
          href='https://api.whatsapp.com/send/?phone=5519991711316&text=Ol%C3%A1%21+Gostaria+de+mais+informa%C3%A7%C3%B5es+sobre+gera%C3%A7%C3%A3o+de+energia+solar+rural.'
          target='_blank'
          className='bg-[#498b00] text-white py-3 px-10 flex justify-center items-center gap-3 rounded-xl mb-12 cursor-pointer hover:bg-green-900'
        >
          <BsWhatsapp /> Contact Us
        </a>
      </section> */}

      <footer
        className='text-white bg-gradient-to-r 
        opacity-80 from-cyan-500 to-blue-500 py-12 px-20 
        shadow-lg w-full text-center text-sm m-auto'
      >
        Copyright © 2024 PD Energy USA. All rights reserved. Developed by
        <a href='http://missura.com.br' target='_blank'>
          {' '}
          Missura Networks.
        </a>
      </footer>
    </div>
  );
};
