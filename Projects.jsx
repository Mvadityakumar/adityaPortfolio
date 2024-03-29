import React,{useEffect} from 'react'
import gym from '../assets/projects/Screenshot 2024-03-18 142421.png'
import Gist from '../assets/projects//gist.png'
import blog from '../assets/projects/Screenshot 2024-03-02 154939.png'
import tourista from '../assets/projects/Hostel.png'
import biryani from '../assets/projects/Screenshot 2024-03-03 165503.png'
import Upscale from '../assets/projects/upscale.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: gym,
      desc:"Gym website made using Html + Css + Javascript ...",
      demo: "https://flexfitt.netlify.app",
      code: "https://github.com/Mvadityakumar/Flexfitt"
    },
    {
      id: 2,
      src: biryani,
      desc: "Restaurant website made using Html + Css",
      demo: "https://biryanivilla.netlify.app",
      code: "https://github.com/Mvadityakumar/Biryani-Villa"
    },
    {
      id: 3,
      src: blog,
      desc: "Tech blog website made using Html + Css.",
      demo: "https://venommblog.netlify.app",
      code: "https://github.com/Mvadityakumar/venomm-blogt"
    },
    
    
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}   target="_blank">Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}  target="_blank"   >Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects