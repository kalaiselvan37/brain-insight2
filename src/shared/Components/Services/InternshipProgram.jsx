import { useEffect } from "react";
import { Link } from "react-router-dom";
const InternshipProgram=()=>{
    function myModel() {
        let modal = document.getElementById("modal");
        if (modal.classList.contains('hidden')) {
            modal.classList.remove('hidden');
            modal.classList.add('animate-zoomIn');
        } else {
            modal.classList.remove('animate-zoomIn');
            modal.classList.add('hidden');
        }
    }
    useEffect(() => {
    }, []);

    return(
        <div className="flex-grow">
        <main>
            <section className="relative">
                <div className="w-full max-w-full mx-auto">
                    <div>
                        <img className="z-10 w-full" src="/images/footer/Layer-down.png" alt=""/>
                        <img src="/images/softwaretraining/balloon.png" alt="" className="absolute manandrocket top-[50px] md:-top-[2px] xl:top-[80px] 2xl:top-[100px] h-[200px] xl:h-[250px] 2xl:h-[300px] hidden md:block"/>
                    </div>
                </div>
                <div className="text-center absolute top-[35%] md:top-[50%] xl:top-[50%] 2xl:top-[55%] left-0 right-0 mb-0">
                    <p className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg">INTERNSHIP
                        <span className="text-[#FF2759]">PROGRAM</span> </p>
                </div>
            </section>
            <section className="py-5">
                <div className="max-w-[50rem] mx-auto">
                    <div className="text-2xl font-semibold text-center lg:text-5xl text-primary">100% Real - Time <span className="text-[#FF2759]">Internship Training</span> with Certification</div>
                </div>
            </section>
            <section className="p-2 py-10 space-y-4 text-white">
                <div className="max-w-[70rem] mx-auto bg-primary p-3 shadow-md rounded-lg">
                        <p className="text-center text-[#F3F25B] text-2xl font-semibold">What we Offer?</p>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Hands-On Experience:</div>
                        <p className="p-3 text-lg lg:ml-6">Dive into meaningful projects and tasks that allow you to apply theoretical knowledge to real-world scenarios.
                            Gain practical skills and insights that will set you apart in your field.</p>
                    </div>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Mentorship and Guidance:</div>
                        <p className="p-3 text-lg lg:ml-6">Receive guidance and mentorship from experienced professionals who are dedicated to helping you succeed. 
                            Learn from their expertise and tap into valuable advice as you navigate your career path.</p>
                    </div>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Collaborative Environment:</div>
                        <p className="p-3 text-lg lg:ml-6">Work alongside talented individuals in a collaborative and inclusive environment.
                             Engage in teamwork, brainstorming sessions, and knowledge sharing to foster innovation and creativity.</p>
                    </div>                    
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Networking Opportunities:</div>
                        <p className="p-3 text-lg lg:ml-6">Build your professional network and connect with industry leaders, fellow interns, and potential future employers.
                             Attend networking events, workshops, and seminars to expand your contacts and explore career opportunities.</p>
                    </div>                    
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Professional Development:</div>
                        <p className="p-3 text-lg lg:ml-6">Participate in training sessions, workshops, and skill-building activities designed to enhance your professional development.
                             Develop crucial soft skills such as communication, problem-solving, and time management to excel in your chosen field.</p>
                    </div>
                </div>
            </section>
            {/* <!-- <div class="flex items-center justify-center">
                <p class="bg-[#F3F25B] lg:w-[10%] text-center p-2 text-xl text-primary font-semibold rounded-xl">JOIN US</p>
            </div> --> */}
            <section className="p-2 py-10">
                <div className="max-w-[70rem] mx-auto">
                    <div className="p-2 rounded-xl" style={{boxshadow: '0px 0px 10px 0px rgba(62, 60, 60, 0.2)'}}>
                        <p className="text-xl font-medium text-center">Embark on a journey of discovery and growth with our internship program. 
                            Gain invaluable experience, expand your skillset, and lay the foundation for a successful career in <span className="text-2xl text-primary">Brain</span> <span className="text-[#FBAC14] text-2xl">Insight</span>. 
                            Apply today and seize the opportunity to make your mark in the industry.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    
    <div id="modal" className="hidden flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full p-4">
            {/* <!-- Modal content --> */}
            <div className="relative text-black rounded-lg shadow bg-[#F5F7FA]" style={{ boxshadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)'}}>
                {/* <!-- Modal header --> */}
                <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#FF275A]">
                    <h3 className="text-xl font-semibold text-white lg:text-2xl">
                        Contact
                    </h3>
                    <button onClick={myModel} type="button" className="end-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className="relative p-4 md:p-5 group">
                    <div className="relative z-[2]">
                        <p className="mb-3 font-bold">PHONE NUMBER</p>
                        <p className="text-[25px] mb-3"><i className="mb-0 fa-solid fa-square-phone-flip fa-rotate-90 text-primary-color me-2"></i> <span className="text-base ">7010809200</span></p>
                        <p className="mb-3 font-bold">EMAIL ADDRESS</p>
                        <p className="text-[25px] mb-3"><i className="mb-0 fa-solid fa-envelope text-primary-color me-2"></i> <span className="text-base ">hr@brain-insight.com</span></p>
                        <p className="mb-3 font-bold">OFFICE LOCATION</p>
                        <p className="text-[25px] mb-3"><i className="mb-0 fa-solid fa-location-dot text-primary-color me-2"></i> <span className="text-base ">No. 113, Vaibhav Co Opp Nagar, P-1, Opposite VIT (3rd Gate), Katpadi, Vellore - 632014</span></p>
                        <div className="flex justify-center p-3">
                            <button onClick={myModel} className="w-[100px] px-4 py-3 text-lg font-semibold text-black bg-[#F3F25B] rounded-xl shadow-md">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <footer className="py-10" id="contactus">
        <div className="relative">
            <img src="/images/softwaretraining/MarketingHero 1 (1).png" alt="" className="absolute manandrocket bottom-[30px] md:bottom-[45px] xl:bottom-[100px] 2xl:bottom-[150px] h-[100px] md:h-[200px] xl:h-[250px]  2xl:h-[400px]"/>
            <img src="/images/footer/Layer-down.png" alt="" className="w-full h-full"/>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:bottom-20 bottom-3">
                <h6 className="text-sm font-semibold md:text-3xl lg:text-5xl">Ready to join Internship Program?</h6>
                <button className="mx-4 font-bold button-82-pushable" onClick={myModel} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                     Join Here
                    </span>
                </button>
            </div>
        </div>
        <div className="max-w-full mx-auto">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
                <div className="flex items-center justify-start lg:justify-center">
                    <img src="/images/footer/footer-logo.png" alt="" className="w-auto h-auto"/>
                </div>
                <div className="flex flex-col p-3 space-y-3">
                    <div className="text-xl"><i className="mr-5 fa-solid fa-location-dot fa-xl" style={{color: '#184aa0'}}></i>No. 113, Vaibhav Co Opp Nagar, P-1, Opposite VIT (3rd Gate), Katpadi, Vellore - 632014</div>
                    <Link to="tel:(123) 456-7890">
                        <div className="text-xl"><i className="mr-5 fa-solid fa-phone fa-xl" style={{color: '#184aa0'}}></i>+91 7010809200</div>
                   </Link>
                    <div className="text-xl"><i className="mr-5 fa-solid fa-envelope fa-xl" style={{color: '#184aa0'}}></i>hr@brain-insight.com</div>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-center gap-5 py-5 pb-10">
            <Link to="https://www.facebook.com/profile.php?id=61557747042490" target="_blank">
                <p><i className="fa-brands fa-square-facebook fa-xl" style={{color: '#dd1313'}}></i></p>
           </Link>
            <Link to="https://twitter.com/BrainInsig65978" target="_blank">
                <p><i className="fa-brands fa-x-twitter fa-xl" style={{color: '#dd1313'}}></i></p>
           </Link>
            <Link to="https://www.linkedin.com/company/braininsight/?viewAsMember=true" target="_blank">
                <p><i className="fa-brands fa-linkedin fa-xl" style={{color: '#dd1313'}}></i></p>
           </Link>
            <Link to="https://www.instagram.com/braininsight24/" target="_blank">
                <p><i className="fa-brands fa-square-instagram fa-xl" style={{color: '#dd1313'}}></i></p>
           </Link>
            <Link to="https://www.youtube.com/channel/UCxEakAhF6irsmhCYu48lxuw" target="_blank">
                <p><i className="fa-brands fa-youtube fa-xl" style={{color: '#dd1313'}}></i></p>
           </Link>
        </div>
        <div className="flex items-center justify-between gap-3 p-4 lg:justify-center">
          <Link to=""><p>HOME</p></Link>
          <Link to=""><p>ABOUT US</p></Link>
          <Link to=""><p>SERVICES</p></Link>
          <Link to=""><p>CONTACT US</p></Link>
        </div>
        <div className="mt-5 text-xl text-center">
        © 2024 Brain Insight. All rights reserved.
         </div>
    </footer>
    </div>

    );
};

export default InternshipProgram;