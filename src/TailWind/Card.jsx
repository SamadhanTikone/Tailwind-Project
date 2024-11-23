

export default function Card() {



  return (
    <>
      <div className="bg-gray-200 w-full">
        <nav className="flex justify-around pt-6">
          <h2 className="text-2xl uppercase opacity-100 text-blue-500 font-semibold ">
            Shine
          </h2>
          <ul className="flex gap-6 ml-6">

            {["Home","Services","Feature","Team","Testimonial","Pricing","Contact"].map((item) => (
              <li key={item}   className={`  hover:text-blue-600  text-black text-sm font-semibold cursor-pointer uppercase p-2 opacity-80`}>
               {item}
               </li>
            ))}
             

       
            
            
          </ul>
          <button className="border-blue-400 border-2 pl-8 pr-8 rounded-full hover:bg-blue-600 hover:text-white transition-all">
            FAQ
          </button>
        </nav>

        <div className="flex flex-col align-middle justify-center m-auto">
          <h2 className="text-4xl font-sans w-1/2 text-gray-800  p-4 mt-24 text-center font-bold m-auto   ">
            StartUp and SaaS Landing Page Built with TailwindCSS
          </h2>
          <button className=" bg-blue-500 w-50 pl-6 pr-6 pt-3 mt-5 pb-3 text-white border-none rounded-full m-auto font-medium">
            Download Now
          </button>
          <img
            className="m-auto w-1/3"
            src="../public/Typing-amico.svg"
            alt="image alternative"
          />
        </div>
      </div>

      {/* pr-12 pl-12 pt-4 pb-4 mb-10 */}

      <div className="  pr-12 pl-12 pt-4 pb-4 mb-10">
        <h2 className="m-auto text-3xl text-center py-10 uppercase font-bold m-12 text-gray-800 ">Our Services</h2>
        <div className="flex flex-col sm:flex-row p-10 justify-around  gap-10">

            {['Web Development', 'Mobile Development', 'Graphics Design'].map((item) =>(

          <div className="flex-1" key={item}>
             <h2 className="text-xl font-bold pb-4 text-blue-400">{item}</h2>
             <p className =''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit id, pariatur praesentium ut cumque error voluptates consequuntur? Molestiae, consequuntur exercitationem.</p>

          </div>
            ))}
           
         
        </div>
        </div>

        <footer className="bg-gray-700 gap-10 px-8 py-12 flex flex-col sm:flex-row ">

            <p className="text-white text-lg w-1/2">All copy right to SAMADHAN TIOKNE</p>
            <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae harum laborum adipisci assumenda! Cum tenetur tempore ex praesentium optio officia, nam assumenda aperiam a perspiciatis sapiente velit consequuntur deserunt animi.</p>


        </footer>
      
    </>
  );
}
