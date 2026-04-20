import { Check } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Unfocus inputs to close mobile keyboard properly and prevent viewport shift
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
    
    setIsSubmitted(true);
    
    // Restore viewport position in case the keyboard pushed it up
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="w-full h-[100dvh] bg-[#050014] relative overflow-hidden font-sans text-white fixed inset-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co/wFY8CGcr/IMG-20260418-113340.jpg" 
          alt="Background"
          className="w-full h-full object-cover object-center scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content wrapper - Fixed height with extreme tight flex to fit one screen */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col justify-evenly h-[100dvh] py-[1vh] px-[2vw] md:px-[4vw]">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full h-[6dvh] md:h-[5vh]">
          <button onClick={() => window.location.reload()} className="font-mono text-[#00f0ff] font-black italic text-[2.8vw] md:text-[18px] tracking-widest drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] whitespace-nowrap hover:scale-105 transition-transform cursor-pointer bg-transparent border-none">
            &lt;CODE MASTER&gt;
          </button>
          {/* Nav Links preserved but shrunk on mobile to keep layout identical */}
          <div className="flex items-center space-x-[2vw] md:space-x-[40px] text-[1.8vw] md:text-[16px] font-medium text-gray-100 whitespace-nowrap">
            <button onClick={() => window.location.reload()} className="hover:text-[#00f0ff] transition-colors cursor-pointer bg-transparent border-none">Home</button>
            <a href="https://www.codecademy.com/coaching" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">Courses</a>
            <a href="https://www.getverse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">About</a>
            <a href="https://t.me/GetVerse/486213" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">Contact</a>
          </div>
          <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="border-[1.5px] md:border-[2px] border-[#00f0ff] text-[#00f0ff] px-[2.5vw] md:px-[24px] py-[0.6dvh] md:py-[8px] text-[1.8vw] md:text-[14px] rounded-md font-bold hover:bg-[#00f0ff] hover:text-black transition-colors shadow-[0_0_10px_rgba(0,240,255,0.3)] whitespace-nowrap inline-block text-center cursor-pointer">
            Get Started
          </a>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-[0vh]">
          <h1 className="font-heading font-black text-[7.5vw] md:text-[60px] leading-[1.1] tracking-wide whitespace-nowrap" style={{ textShadow: "0px 4px 15px rgba(0, 0, 0, 0.8)" }}>
            <span className="text-white">BECOME A FULL STACK</span>
            <br />
            <span className="text-[#00f0ff] font-black drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">WEB DEVELOPER</span>
          </h1>
          <h2 className="font-display mt-[1vh] text-[#ffea00] font-bold text-[3.2vw] md:text-[18px] tracking-widest drop-shadow-md whitespace-nowrap uppercase">
            LEARN HTML, CSS & JAVASCRIPT
          </h2>
          
          <div className="mt-[2vh] flex flex-row items-end justify-center gap-[4vw] md:gap-[30px] w-full">
            <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="block bg-[#00f0ff] text-black font-bold px-[6vw] md:px-[30px] py-[1vh] md:py-[10px] text-[3vw] md:text-[15px] rounded-md tracking-widest border border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-white hover:border-white transition-colors whitespace-nowrap text-center cursor-pointer mb-[2px]">
              GET STARTED
            </a>
            
            <div className="flex flex-col space-y-[0.5vh] md:space-y-[8px] text-[2vw] md:text-[13px] font-bold tracking-widest text-left whitespace-nowrap">
              {['FRONT-END & BACK-END', 'BEGINNER TO ADVANCED', 'BUILD REAL WORLD PROJECTS'].map((text, i) => (
                <div key={i} className="flex items-center space-x-[1.5vw] md:space-x-[10px]">
                  <Check className="text-[#00f0ff] w-[3vw] h-[3vw] md:w-[14px] md:h-[14px] drop-shadow-[0_0_5px_rgba(0,240,255,1)] flex-shrink-0" strokeWidth={4} />
                  <span className="drop-shadow-md">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR COURSES Heading */}
        <div className="flex flex-col items-center mt-[1.5vh]">
          <h3 className="font-heading font-black italic text-[4.5vw] md:text-[26px] tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-[1vh] md:mb-[16px] whitespace-nowrap">
            OUR COURSES
          </h3>
          
          {/* 3 Course Boxes */}
          <div className="w-full flex flex-row justify-between gap-[1.5vw] md:gap-[20px]">
             {[
               { title: "HTML & CSS", subtitle: "FUNDAMENTALS", link: "https://www.codecademy.com/search?query=HTML%20and%20CSS&fromPrevSearch=bd72c2dd-79b1-45d2-a81d-6e20a1e2ef84" },
               { title: "JAVASCRIPT", subtitle: "", link: "https://www.codecademy.com/search?query=javascript&fromPrevSearch=05cc7ee9-16b0-43d9-9726-98bbf67f10ec" },
               { title: "FULL STACK", subtitle: "DEVELOPMENT", link: "https://www.codecademy.com/search?query=full%20stack" }
             ].map((course, i) => (
              <div key={i} className="flex-1 w-1/3 border border-[#00f0ff] bg-[#020516]/80 flex flex-col items-center justify-between text-center p-[2vw] md:p-[16px] shadow-[0_0_15px_rgba(0,240,255,0.15)] h-[12vh] md:h-[120px]">
                <div>
                  <h4 className="font-heading font-black italic text-[2.5vw] md:text-[18px] tracking-widest text-white whitespace-nowrap leading-none">
                    {course.title}
                  </h4>
                  <p className="font-display text-[1.8vw] md:text-[10px] text-[#00f0ff] tracking-widest font-bold mt-[0.5vh] whitespace-nowrap uppercase">
                    {course.subtitle}
                  </p>
                </div>
                {course.link !== "#" ? (
                  <a href={course.link} target="_blank" rel="noopener noreferrer" className="block bg-[#00f0ff] text-black font-bold w-full md:w-[85%] py-[0.8vh] md:py-[6px] text-[1.8vw] md:text-[11px] rounded-md tracking-widest hover:bg-white transition-colors whitespace-nowrap text-center cursor-pointer">
                    LEARN MORE
                  </a>
                ) : (
                  <button className="bg-[#00f0ff] text-black font-bold w-full md:w-[85%] py-[0.8vh] md:py-[6px] text-[1.8vw] md:text-[11px] rounded-md tracking-widest hover:bg-white transition-colors whitespace-nowrap">
                    LEARN MORE
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* WHAT YOU'LL LEARN Heading */}
        <div className="flex flex-col items-center mt-[1.2vh]">
          <h3 className="font-heading font-black italic text-[4.5vw] md:text-[26px] tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-[1vh] md:mb-[16px] whitespace-nowrap">
            WHAT YOU'LL LEARN
          </h3>
          
          {/* 4 Learn Boxes */}
          <div className="w-full flex flex-row justify-between gap-[1vw] md:gap-[20px]">
            {[
              { title: "Front-End\nDevelopment", desc: "Master HTML, CSS &\nJavaScript" },
              { title: "Back-End\nDevelopment", desc: "Build powerful server-\nside applications" },
              { title: "Responsive\nDesign", desc: "Create mobile-friendly\nweb pages" },
              { title: "API & Database", desc: "Connect apps to\ndatabases & APIs" }
            ].map((item, i) => (
              <div key={i} className="flex-1 w-1/4 border border-[#00f0ff] bg-[#020516]/80 p-[2vw] md:p-[14px] flex flex-col items-start text-left shadow-[0_0_15px_rgba(0,240,255,0.15)] h-[10vh] md:h-[100px]">
                <h4 className="font-heading font-black italic text-[1.8vw] md:text-[14px] whitespace-pre-line leading-[1.2] tracking-wide text-white">
                  {item.title}
                </h4>
                <p className="text-[1.3vw] md:text-[10px] text-gray-300 mt-[0.5vh] md:mt-[8px] whitespace-pre-line leading-[1.3]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div id="contact" className="flex flex-col items-center mt-[1.2vh] w-full px-[2vw] md:px-0">
          <h2 className="font-heading font-black italic text-[3.5vw] md:text-[28px] tracking-wider md:tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] whitespace-normal md:whitespace-nowrap text-center leading-tight">
            START YOUR CODING JOURNEY TODAY!
          </h2>
          <p className="mt-[0.5vh] text-gray-300 text-[2vw] md:text-[14px] whitespace-nowrap">
            Get Your Free Class &rarr; <a href="https://t.me/GetVerse/486213/512322" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] font-bold cursor-pointer hover:underline">JOIN NOW</a>
          </p>
          
          <div className="mt-[1vh] md:mt-[12px] w-[95%] md:w-[500px] flex flex-col items-center">
            {isSubmitted ? (
              <div className="bg-[#00f0ff]/20 border border-[#00f0ff] p-[1.5vh] md:p-[12px] rounded text-center shadow-[0_0_15px_rgba(0,240,255,0.3)] w-full">
                <p className="text-white text-[2.5vw] md:text-[14px] font-medium leading-relaxed">
                  Thanks for reaching us! Our Verse Coding Boss Sadiku will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="w-full flex flex-col items-center">
                <div className="flex flex-row gap-[2vw] md:gap-[16px] w-full justify-center">
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    className="w-1/2 px-[3vw] md:px-[16px] py-[0.8vh] md:py-[10px] bg-white rounded-md text-black text-[2vw] md:text-[13px] outline-none font-medium"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter Your Phone" 
                    className="w-1/2 px-[3vw] md:px-[16px] py-[0.8vh] md:py-[10px] bg-white rounded-md text-black text-[2vw] md:text-[13px] outline-none font-medium"
                  />
                </div>
                
                <button type="submit" className="inline-block mt-[1.2vh] md:mt-[14px] bg-[#00f0ff] text-black font-bold px-[8vw] md:px-[30px] py-[1vh] md:py-[12px] text-[3vw] md:text-[16px] rounded-md tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:bg-white transition-colors whitespace-nowrap text-center cursor-pointer border-none">
                  GET STARTED
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
