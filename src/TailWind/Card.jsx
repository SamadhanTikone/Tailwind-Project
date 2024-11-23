import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import { useState } from 'react';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(!isOpen);
   
  }

  return (
    <>
      <div className="bg-gray-300 pt-4 w-full relative">
        <nav className="flex justify-between items-center rounded-xl border border-blue-600 p-4 mt-6  md:px-8 mx-6">
          <h2 className="text-2xl uppercase opacity-100 font-serif text-blue-500 font-semibold ">
            Shine
          </h2>

          {/* Menu Items */}
          <div className={`absolute ${isOpen ? 'block bg-gray-500 md:bg-gray-300  text-white' : 'hidden'} md:block  left-0 md:static md:min-h-fit md:w-auto top-[25%] w-screen`}>
            <ul className="flex gap-6 py-4 md:gap-6 ml-6 md:flex-row flex-col justify-center items-center">
              {["Home", "Services", "Feature", "Team", "Testimonial", "Pricing", "Contact"].map((item) => (
                <li key={item} className={`hover:text-blue-600 md:text-black text-sm font-semibold cursor-pointer uppercase p-2 opacity-80`} onClick={handleOpen}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center">
            <button className="border-blue-400 border-2 pl-8 pr-8 rounded-full hover:bg-blue-600 hover:text-white transition-all">
              FAQ
            </button>
            
            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden ml-4 transition-all duration-500" onClick={handleOpen}>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col align-middle justify-center m-auto">
          <h2 className="text-4xl font-sans md:w-1/2  w-[90%] text-gray-800 p-4 mt-24 text-center font-bold m-auto">
            StartUp and <span className='uppercase'>SaaS</span> Landing Page Built with Tailwind CSS
          </h2>
          <button className="hover:bg-blue-500 bg-cyan-400 w-50 pl-6 pr-6 pt-3 mt-5 pb-3 duration-500 text-white border-none rounded-full m-auto font-medium">
            Download Now <DownloadForOfflineIcon/>
          </button>
          <img className="m-auto md:w-1/3 w-[80%]" src="./Typing-amico.svg" alt="image alternative" />
        </div>
      </div>

      {/* Our Services Section */}
      <div className=" md:px-12 py-4  md:mb-10">
        <h2 className="text-3xl text-center py-10 uppercase font-bold my-5 text-gray-800">Our Services</h2>
        <div className="flex flex-col sm:flex-row p-10 justify-around gap-10">
          {['Web Development', 'Mobile Development', 'Graphics Design'].map((item) => (
            <div className="flex-1" key={item}>
              <h2 className="text-xl font-bold pb-4 text-blue-400">{item}</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit id, pariatur praesentium ut cumque error voluptates consequuntur? Molestiae, consequuntur exercitationem.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-700 gap-10 px-8 py-12 flex flex-col sm:flex-row">
        <p className="text-white text-lg md:w-1/2 w-full ">All copy right to SAMADHAN TIOKNE</p>
        <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae harum laborum adipisci assumenda! Cum tenetur tempore ex praesentium optio officia, nam assumenda aperiam a perspiciatis sapiente velit consequuntur deserunt animi.</p>
      </footer>
    </>
  );
}
