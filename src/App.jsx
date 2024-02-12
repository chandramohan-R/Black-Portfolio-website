import "./App.css";
import Porfile from "./assets/Photo.png";
import Project1 from "./assets/project1.png";
import Project2 from "./assets/project2.png";
import Project3 from "./assets/project3.png";
import Project4 from "./assets/project4.png";
import Project5 from "./assets/project5.png";
import Project6 from "./assets/project6.png";
import Facebook from "./assets/facebook.svg";
import LinkedIn from "./assets/linkedin.svg";
import Instagram from "./assets/instagram.svg";
import ArrowDown from "./assets/arrow-down.svg";
import Pixels from "./assets/Pixels.mp4";
import MyResume from './Resume/Resume.pdf'
import { useEffect, useState } from "react";

function App() {
  const [scrolling, setScrolling] = useState(false);
  const [videoPlaying1, setVideoPlaying1] = useState(false);
  const [videoPlaying2, setVideoPlaying2] = useState(false);
  const [videoPlaying3, setVideoPlaying3] = useState(false);
  const [videoPlaying4, setVideoPlaying4] = useState(false);

  const handleLivePreviewClickOne = () => {
    setVideoPlaying1(true);
  };
  const handleLivePreviewClickTwo = () => {
    setVideoPlaying2(true);
  };
  const handleLivePreviewClickThree = () => {
    setVideoPlaying3(true);
  };
  const handleLivePreviewClickFour = () => {
    setVideoPlaying4(true);
  };



  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true)
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll)
    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])


  const imageStyle = {
    width: '280px',
    margin: 'auto',
    position: 'relative',
    zIndex: '10',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Adjust shadow values as needed
    border: '8px solid #ff69b4', // Pink color border
    borderRadius: '12px', // Adjust border radius as needed
    backgroundImage: 'linear-gradient(to bottom, #ff69b4, #ff1493)', // Pink linear gradient
    backgroundClip: 'padding-box', // Clip the gradient to the border box
  };

  return (
    <div className="max-w-4xl m-auto relative">
      <header className={`${scrolling ? 'border-b border-gray-900' : ''}  fixed left-0 right-0 top-0 z-20`} id="home">
        <div className="container m-auto px-4 py-6 max-w-4xl bg-black">
          <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
            <div>
            <h1 className="font-bold text-2xl" style={{ backgroundImage: "linear-gradient(45deg, #e74c3c, #ffffff)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
  Chandru Portfolio
</h1>
  </div>
            <div>
              <ul className="flex gap-4">
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white cursor-pointer">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#technologies" className="text-gray-400 hover:text-white cursor-pointer">
                    Technologies
                  </a>
                </li>
                <li>
                  <a href="#aboutme" className="text-gray-400 hover:text-white cursor-pointer">
                    About me
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="relative mt-28">
        {/* Intro/Banner section */}
        <section>
          <div className="container m-auto px-4 pt-12 pb-12 sm:pt-20 flex flex-col sm:flex-row gap-6 text-center sm:text-left">
            <div>
              <h2 className="font-bold text-4xl">Hello, I'm ChandraMohan,</h2>
              <div>
                <h2 className="font-bold text-4xl mt-1 gradiant-text">Frontend developer</h2>
              </div>
              <div>
                <p className="mt-4 text-gray-400">
                  Passionate about React.js and Frontend Web Development,I specialize in creating modern and user-friendly interfaces. <br></br>
                  I'm skilled in HTML, CSS, and JavaScript, aiming to bring a new and <br></br>
                  engaging touch to web applications. As a recent graduate, I'm dedicated to learning and eager to contribute my skills to collaborative development teams.
                </p>
                
    <button className="px-8 shadow-gray-500 shadow-md py-3 mt-5 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700"><a href={MyResume} alt="resume" download>Download Resume</a></button>
              </div>
            </div>
            <div className="relative">
              <div className="after:bg-[url('./large-long.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[520px] after:absolute after:top-0 after:-left-20 sm:after:-left-40  before:bg-contain before:block before:bg-no-repeat before:w-[220px] before:h-[120px] before:absolute before:bottom-0 before:-right-10">
                <img src={Porfile} className="relative z-10 w-[280px] m-auto sm:w-[600px]" />

              </div>


            </div>
            <div id="circle-orbit-container">


              <div id="inner-orbit">
                <div className="inner-orbit-cirlces"></div>
              </div>

              <div id="middle-orbit">
                <div className="middle-orbit-cirlces"></div>
              </div>

              <div id="outer-orbit">
                <div className="outer-orbit-cirlces"></div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects">
          <div className="container m-auto px-4 sm:py-12">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <div className="flex flex-col sm:flex-row gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project1} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  MERN stack Blog website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Developed a MERN stack website with HTML, CSS, JavaScript,
Bootstrap,React.js, Node.js, and MongoDB. Implemented
Firebase for secure login and sign-up authentication. 
                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying1 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickOne}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project2} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                MERN STACK Task MANAGER 
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Built a Task Manager application with React.js, Node.js, and
MongoDB, featuring CRUD operations and API integration for
seamless task creation, editing, deletion, and updates.
                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying2 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickTwo}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project3} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                React js Weather Application
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Developed a React.js weather application utilizing the
OpenWeather API for real-time weather data, providing users
with accurate and up-to-date weather information.

                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying3 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickThree}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project4} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                Ecommerce website
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Designed and implemented an E-commerce website using
React.js, featuring a dynamic home page, category page, and
advanced filtering options for products based on category and
price range.

                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying4 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickFour}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  gap-10 mt-11">
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project5} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                  React js Portfolio Website Tailwind css
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Developed a comprehensive portfolio project showcasing my skills and achievements in [insert your field]. The curated collection includes diverse samples, such as writing, design, and coding projects, providing a succinct overview of my expertise.
                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying3 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickThree}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
              <div className="border border-gray-500 rounded-md p-5 flex-1">
                <img src={Project6} className="w-full h-auto" />
                <h3 className="text-2xl font-semibold mt-8">
                React js Movie Booking Application
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                Built a React.js movie booking app with MongoDB storage,
Node.js backend movie management and booking.

                </p>
                <div className="flex mt-12">
                  <div>
                    {videoPlaying4 ? (
                      <video
                        controls
                        autoPlay
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                        src={Pixels}
                      />
                    ) : (
                      <button
                        className="flex-1 text-sm pl-5 pr-5 py-3 bg-gradient-to-t from-blue-500  to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
                        onClick={handleLivePreviewClickFour}
                      >
                        Live preview
                      </button>
                    )}
                  </div>

                </div>
                <button className="flex-1 text-sm py-3 pl-5 pr-5 mt-5 border  hover:border-blue-500 hover:text-blue-500">
                  Checkout GitHub
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Technoglies section */}
        <section className="py-10" id="technologies">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">Technologies</h2>
            <div className="mt-14">
              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">HTML</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-full h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">CSS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Bootstrap 5.0</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">
                    JavaScript
                  </h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">UI design in Figma</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[85%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Node JS</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[30%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>



              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">React</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>
              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Tailwindcss</h2>
                  <p className="text-gray-500">Advanced</p>
                </div>
                <span className="w-[75%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

              <div className="mt-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">Mongodb</h2>
                  <p className="text-gray-500">Connectivity and database creation</p>
                </div>
                <span className="w-[30%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
              </div>

            </div>
          </div>
        </section>
        {/* Additional skills section */}
        <section>
          <div className="container m-auto px-4 py-14">
            <h2 className="text-2xl font-semibold">
              Additional technologies and skills
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-28 mt-12 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  MS word
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Canva
                </p>
              </div>

              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Teamwork
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Quick learning
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-36 mt-4 sm:mt-6 w-[80%]">
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Kabbadi
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  Farming
                </p>
              </div>
              <div>
                <p className="font-bold before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:block before:rounded-full before:mt-1 before:-left-6 before:absolute relative left-5">
                  AI Tools
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-8" id="aboutme">
          <div className="container m-auto px-4">
            <h2 className="text-2xl font-semibold">About me</h2>
            <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
              <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2017</h3>
                <p>
                  10th - State BoardM<br></br>
                  Sevai Shanthi Matric Higher Secoundary School<br></br>
                  Mark score- 420/500 [84%]


                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
                <p>
                  11th - State BoardM<br></br>
                  Sevai Shanthi Matric Higher Secoundary School<br></br>
                  Mark Score- 419 /600 [70%]
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2019</h3>
                <p>
                  12th - State Board<br></br>
                  Sevai Shanthi Matric Higher Secoundary School<br></br>
                  Mark Score- 393/600 [65%]


                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  UG - Graduated<br></br>
                  Bachelor of Engineering, Chettinad College of Engineering and Technology<br></br>
                  CGPA 8.3%<br></br>
                  No Backlocks
                </p>
              </div>
              <div className="pl-24 mt-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
                <h3 className="absolute left-0 text-lg font-semibold">2023</h3>
                <p>
                  Internship - Company   [6 months -completed]<br></br>
                  IVA TECHNOS<br></br>
                  Front End Web development Role
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container m-auto flex justify-between px-4 py-6">
          <div>
            <p className="text-gray-300 text-sm">Copyright @ 2023</p>
          </div>
          <div>
            <ul className="flex gap-4">
              <li>
                <a>
                  <img src={Facebook} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={LinkedIn} className="w-5" />
                </a>
              </li>
              <li>
                <a>
                  <img src={Instagram} className="w-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      {
        scrolling && (
          <button className="fixed block right-8 bottom-0 w-24" onClick={() => {
            window.scrollTo(0, 0);
          }}>
            <img src={ArrowDown} />
          </button>
        )
      }
    </div>
  );
}

export default App;
