import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollEvent = () => {
    const sections = ["cerebro", "rootex", "gasper", "watchdog", "backdoor", "studyportal", "erdos", "playctf"];
    sections.forEach((id) => {
      const section = document.getElementById(id);
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
        setActiveSection(id);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div className="flex flex-row">
        {/* Left Section: Sidebar Navigation */}
        <div className="w-3/10">
          <ul className="hidden fixed z-10 h-screen bg-white flex flex-col justify-center list-none pl-16 sm:pl-36 sm:w-88 sm:flex">
            {["cerebro", "rootex", "gasper", "watchdog", "backdoor", "studyportal", "erdos", "playctf"].map((id) => (
              <li
                key={id}
                className={`my-6 font-medium text-xs uppercase cursor-pointer ${
                  activeSection === id ? "font-bold text-lg" : "text-gray-500"
                }`}
                onClick={() => handleScroll(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </li>
            ))}
          </ul>
        </div>



        {/* Right Section: Project Descriptions */}
        <div className="w-7/10 ml-10">
          {/* Cerebro Section */}
          <div  id="cerebro" className="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
            <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
            <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
            <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Cerebro
            </h2>
            <p class="text-1.5xl text-grey sm:text-base leading-160">
                A platform for hosting data hackathons exclusively in IITR. It's challenges and competitions are maintained by members of SDSLabs and Data Science Group.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://cerebro.sdslabs.co" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
          <img  src="https://portfolio-backend.sdslabs.co/media/projects/cerebro.png" class="w-full z-20"/><div data-v-80ea1c16="" class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-green"></div></div></div></div></div>

          {/* Rootex Section */}
          <div  id="rootex" className="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
            <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
            <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
            <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Rootex
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Rootex is an advanced C++ 3D game engine powering an in-production game yet to be announced. It offers OpenAL based audio features, a home brewed rendering engine powered by the Direct3D 11 API, a Dear ImGui based custom level editor and a powerful scripting API in a Lua environment.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://rootex.readthedocs.io/en/latest/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div>
              </a></div>
              </div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/rootex_vuNM9tR.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-green"></div></div></div></div></div>




          {/* Add other sections in the same format */}
          <div  id="gasper" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
            <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
            <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
            <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Gasper
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Gasper is an interactive service as a platform built along the lines of heroku. It facilitates easy deployment, management and monitoring of applications and databases and supports a wide range of languages and frameworks.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://github.com/sdslabs/gasper/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div>
              </a></div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/sws_sQmdeJT.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-blue"></div></div></div></div></div>



            <div  id="watchdog" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
              <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
              <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
              <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Watchdog
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Watchdog is a personalised server access management tool (and a slack bot) which keeps a track of all the administrative rights attempts (like sudo and su) on server (via SSH) and allows/disallows log-in attempts based on public key of user and logs all activity in form of slack message. It provides easy granting/revoking access to servers to team members through pull requests on a keyhouse repository.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://watchdog.sdslabs.co/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/watchdog.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-black"></div></div></div></div></div>


            <div  id="backdoor" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
              <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
              <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
              <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Backdoor
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Backdoor is a platform for computer security enthusiasts. After opening up for users outside of IIT Roorkee, this online CTF (Capture the Flag) competition has quickly garnered over 2000 users globally. Some of the top teams in the world also take part in the CTFs held on backdoor.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://backdoor.sdslabs.co/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/backdoor.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-error"></div></div></div></div></div>


         
          
            <div  id="studyportal" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
              <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
              <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
              <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Studyportal
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Study Portal is an online portal for accessing study materials in IIT Roorkee. The platform is managed by SDSLabs in collaboration with ARP IITR.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://study.sdslabs.co/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/study-mockup.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-blue"></div></div></div></div></div>
          
          
            <div  id="erdos" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
              <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
              <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
              <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                Erdos
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                Erdős is an application for math geeks to try out new mathematical problems. It’s a portal for users to test their mettle on various mathematical problems, some of which may require users to write code.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://erdos.sdslabs.co" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/erdos.png" class="w-[900px] z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-darkblue"></div></div></div></div></div>


            <div  id="playctf" class="pt-60 sm:pt-navbar sm:h-screen flex justify-end items-center fullpage section">
              <div  class="project-wrapper sm:w-5/6 flex flex-col-reverse sm:flex-row justify-center sm:items-center">
              <div  class="mt-20 sm:mt-0 sm:w-4/10 sm:pr-16">
              <h2  class="uppercase font-black text-3xl leading-170 pb-12">
                playCTF
            </h2>
            <p  class="text-1.5xl text-grey sm:text-base leading-160">
                playCTF is a Jeopardy-style CTF challenge deployment, and management platform. playCTF incorporates BEAST, our CTF creation platform which provides container-based isolation of each challenge.
            </p>
            <div  class="text-sm pt-16">
              <a  href="https://playground-playctf.sdslabs.co/" rel="noreferrer noopener" target="_blank" class="no-underline flex flex-row max-w-[200px] bg-black inline-block font-bold text-1.5xl sm:text-base text-white leading-none px-14 py-10 sm:py-5 border-solid border-black border-1">
              <div>Open App</div></a>
              </div></div>
              <div  class="-ml-6 flex sm:-ml-0 sm:pl-24 sm:w-7/10">
              <div  class="image self-center flex flex-row z-10">
                <img  src="https://portfolio-backend.sdslabs.co/media/projects/playCTF-mockup.png" class="w-full z-20"/>
                <div  class="w-140 sm:w-100 h-180 sm:h-148 self-end -mr-16 -mt-14 -mb-14 sm:-mt-8 sm:-mb-8 -ml-5/10 sm:-mr-0 sm:mr-26 bg-orange"></div></div></div></div></div>
          
        </div>
      </div>
    </>
  );
}

export default App;
