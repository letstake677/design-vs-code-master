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
    <div className="w-full min-h-screen bg-[#050014] relative font-sans text-white">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co/wFY8CGcr/IMG-20260418-113340.jpg" 
          alt="Background"
          className="w-full h-full object-cover object-center scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto flex flex-col pt-[0.5dvh] pb-[6vh] px-[4vw]">
        
        {/* Navbar */}
        <nav className="flex items-center justify-between w-full h-[6dvh] md:h-[5vh]">
          <button onClick={() => window.location.reload()} className="font-mono text-[#00f0ff] font-black italic text-[5vw] md:text-[18px] tracking-widest drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] whitespace-nowrap hover:scale-105 transition-transform cursor-pointer bg-transparent border-none">
            &lt;CODE MASTER&gt;
          </button>
          {/* Nav Links preserved but shrunk on mobile to keep layout identical */}
          <div className="hidden md:flex items-center space-x-[40px] text-[16px] font-medium text-gray-100 whitespace-nowrap">
            <button onClick={() => window.location.reload()} className="hover:text-[#00f0ff] transition-colors cursor-pointer bg-transparent border-none">Home</button>
            <a href="https://www.codecademy.com/coaching" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">Courses</a>
            <a href="https://www.getverse.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">About</a>
            <a href="https://t.me/GetVerse/486213" target="_blank" rel="noopener noreferrer" className="hover:text-[#00f0ff] transition-colors">Contact</a>
          </div>
          <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="border-[1.5px] border-[#00f0ff] text-[#00f0ff] px-[4vw] md:px-[24px] py-[0.6dvh] md:py-[8px] text-[3vw] md:text-[14px] font-bold hover:bg-[#00f0ff] hover:text-black transition-colors shadow-[0_0_10px_rgba(0,240,255,0.3)] whitespace-nowrap inline-block text-center cursor-pointer">
            Get Started
          </a>
        </nav>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mt-[4vh] mb-[4vh]">
          <h1 className="font-heading font-black text-[12vw] md:text-[44px] leading-[1.1] tracking-wide" style={{ textShadow: "0px 4px 15px rgba(0, 0, 0, 0.8)" }}>
            <span className="text-white">BECOME A FULL STACK</span>
            <br />
            <span className="text-[#00f0ff] font-black drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">WEB DEVELOPER</span>
          </h1>
          <h2 className="font-display mt-[2vh] text-[#ffea00] font-bold text-[6vw] md:text-[18px] tracking-widest drop-shadow-md uppercase">
            LEARN HTML, CSS & JAVASCRIPT
          </h2>
          
          <div className="mt-[4vh] flex flex-col items-center justify-center gap-[4vh] w-full">
            <a href="https://www.codecademy.com/" target="_blank" rel="noopener noreferrer" className="block bg-[#00f0ff] text-black font-bold px-[10vw] md:px-[30px] py-[2vh] md:py-[12px] text-[5vw] md:text-[15px] tracking-widest border border-[#00f0ff] shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:bg-white hover:border-white transition-colors text-center cursor-pointer">
              GET STARTED
            </a>
            
            <div className="flex flex-col space-y-[2vh] md:space-y-[6px] text-[4vw] md:text-[13px] font-bold tracking-widest text-left">
              {['FRONT-END & BACK-END', 'BEGINNER TO ADVANCED', 'BUILD REAL WORLD PROJECTS'].map((text, i) => (
                <div key={i} className="flex items-center space-x-[4vw] md:space-x-[12px]">
                  <Check className="text-[#00f0ff] w-[6vw] h-[6vw] md:w-[22px] md:h-[22px] drop-shadow-[0_0_5px_rgba(0,240,255,1)] flex-shrink-0" strokeWidth={4} />
                  <span className="drop-shadow-md">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUR COURSES Heading */}
        <div className="flex flex-col items-center mt-[4vh] mb-[4vh]">
          <h3 className="font-heading font-black italic text-[9vw] md:text-[26px] tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-[2vh] md:mb-[16px]">
            OUR COURSES
          </h3>
          
          {/* 3 Course Boxes */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-[3vh] md:gap-[20px]">
             {[
               { title: "HTML & CSS", subtitle: "FUNDAMENTALS", link: "https://www.codecademy.com/search?query=HTML%20and%20CSS&fromPrevSearch=bd72c2dd-79b1-45d2-a81d-6e20a1e2ef84" },
               { title: "JAVASCRIPT", subtitle: "", link: "https://www.codecademy.com/search?query=javascript&fromPrevSearch=05cc7ee9-16b0-43d9-9726-98bbf67f10ec" },
               { title: "FULL STACK", subtitle: "DEVELOPMENT", link: "https://www.codecademy.com/search?query=full%20stack" }
             ].map((course, i) => (
              <div key={i} className="flex-1 w-full border border-[#00f0ff] bg-[#020516]/80 flex flex-col items-center justify-between text-center p-[6vw] md:p-[16px] shadow-[0_0_15px_rgba(0,240,255,0.15)] min-h-[20vh] md:h-[120px]">
                <div className="mb-[2vh]">
                  <h4 className="font-heading font-black italic text-[6vw] md:text-[18px] tracking-widest text-white leading-none">
                    {course.title}
                  </h4>
                  <p className="font-display text-[4vw] md:text-[10px] text-[#00f0ff] tracking-widest font-bold mt-[1vh] uppercase">
                    {course.subtitle}
                  </p>
                </div>
                <a href={course.link} target="_blank" rel="noopener noreferrer" className="block bg-[#00f0ff] text-black font-bold w-full md:w-[85%] py-[1.5vh] md:py-[6px] text-[4vw] md:text-[11px] tracking-widest hover:bg-white transition-colors text-center cursor-pointer">
                  LEARN MORE
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* WHAT YOU'LL LEARN Heading */}
        <div className="flex flex-col items-center mt-[4vh] mb-[4vh]">
          <h3 className="font-heading font-black italic text-[9vw] md:text-[26px] tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] mb-[2vh] md:mb-[16px]">
            WHAT YOU'LL LEARN
          </h3>
          
          {/* 4 Learn Boxes */}
          <div className="w-full flex flex-col md:flex-row justify-between gap-[3vh] md:gap-[20px]">
            {[
              { title: "Front-End\nDevelopment", desc: "Master HTML, CSS &\nJavaScript" },
              { title: "Back-End\nDevelopment", desc: "Build powerful server-\nside applications" },
              { title: "Responsive\nDesign", desc: "Create mobile-friendly\nweb pages" },
              { title: "API & Database", desc: "Connect apps to\ndatabases & APIs" }
            ].map((item, i) => (
              <div key={i} className="flex-1 w-full border border-[#00f0ff] bg-[#020516]/80 p-[6vw] md:p-[14px] flex flex-col items-start text-left shadow-[0_0_15px_rgba(0,240,255,0.15)] min-h-[15vh] md:h-[100px]">
                <h4 className="font-heading font-black italic text-[5vw] md:text-[14px] whitespace-pre-line leading-[1.2] tracking-wide text-white">
                  {item.title}
                </h4>
                <p className="text-[3.5vw] md:text-[10px] text-gray-300 mt-[1vh] md:mt-[8px] whitespace-pre-line leading-[1.3]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Section */}
        <div id="contact" className="flex flex-col items-center gap-[2vh] mt-[4vh] mb-[4vh] w-full px-[2vw]">
          <h2 className="font-heading font-black italic text-[8vw] md:text-[28px] tracking-wider md:tracking-widest drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] text-center leading-tight">
            START YOUR CODING JOURNEY TODAY!
          </h2>
          <p className="text-gray-300 text-[4vw] md:text-[14px]">
            Get Your Free Class &rarr; <a href="https://t.me/GetVerse/486213/512322" target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] font-bold hover:underline">JOIN NOW</a>
          </p>
          
          <div className="w-full md:w-[500px]">
            {isSubmitted ? (
              <div className="bg-[#00f0ff]/20 border border-[#00f0ff] p-[3vh] md:p-[12px] rounded text-center shadow-[0_0_15px_rgba(0,240,255,0.3)] w-full">
                <p className="text-white text-[4vw] md:text-[14px] font-medium leading-relaxed">
                  Thanks for reaching us! Our Verse Coding Boss Sadiku will contact you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-[2vh] w-full">
                <div className="flex flex-col md:flex-row gap-[2vh] md:gap-[16px] w-full">
                  <input 
                    type="email" 
                    required
                    placeholder="Your Email" 
                    className="w-full px-[5vw] md:px-[16px] py-[2vh] md:py-[10px] bg-white text-black text-[4vw] md:text-[13px] outline-none font-medium"
                  />
                  <input 
                    type="tel" 
                    required
                    placeholder="Enter Your Phone" 
                    className="w-full px-[5vw] md:px-[16px] py-[2vh] md:py-[10px] bg-white text-black text-[4vw] md:text-[13px] outline-none font-medium"
                  />
                </div>
                
                <button type="submit" className="w-full bg-[#00f0ff] text-black font-bold px-[8vw] py-[2vh] md:py-[12px] text-[5vw] md:text-[16px] tracking-widest shadow-[0_0_20px_rgba(0,240,255,0.5)] hover:bg-white transition-colors text-center border-none">
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
