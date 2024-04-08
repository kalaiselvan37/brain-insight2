import { Link } from "react-router-dom";
import { useEffect } from "react";

const InplantTraining =()=>{
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
                    <p className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg">INDUSTRIAL/INPLANT
                        <span className="text-[#FF2759]">TRAINING</span>
                    </p>
                </div>
            </section>
            <section className="py-10 lg:py-0">
                <div className="max-w-[50rem] mx-auto">
                    <div className="text-2xl font-semibold text-center lg:text-5xl text-primary">Explore Our <span className="text-[#FF2759]">Industrial Inplant Training</span> Program</div>
                </div>
            </section>
            <section className="p-2 py-0 lg:py-10">
                <div className="max-w-[70rem] mx-auto">
                    <div className="p-2 rounded-xl">
                        <p className="text-2xl font-medium text-center">Looking to bridge the gap between theoretical knowledge and practical application in the industrial sector?
                             Our Industrial Inplant Training Program offers a comprehensive learning experience designed to equip participants with hands-on skills and industry insights.
                        </p>
                    </div>
                </div>
                <div className="max-w-[50rem] mx-auto py-10">
                    <img src="/images/industrial-training1.png" alt=""/>
                </div>
            </section>
            <section className="p-2 space-y-4 text-white ">
                <div className="max-w-[70rem] mx-auto bg-primary p-3 shadow-md rounded-lg">
                        <p className="text-center text-[#F3F25B] text-2xl font-semibold">What we Offer?</p>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Hands-On Learning:</div>
                        <p className="p-3 text-lg">Engage in practical, hands-on training sessions conducted by industry experts. 
                            Work with state-of-the-art equipment and technologies to gain real-world experience in industrial settings.</p>
                    </div>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Industry-Relevant Curriculum:</div>
                        <p className="p-3 text-lg">Our training program is tailored to meet the demands of the industry, covering essential topics such as [list specific areas/topics covered].
                             Acquire relevant skills and knowledge that align with current industry trends and standards.</p>
                    </div>
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Experienced Trainers:</div>
                        <p className="p-3 text-lg"> Learn from experienced trainers and professionals who bring years of industry experience to the table. 
                            Benefit from their expertise, guidance, and mentorship as you navigate through various training modules.</p>
                    </div>                    
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Customized Training Modules:</div>
                        <p className="p-3 text-lg">We offer flexible training modules that can be customized to suit the specific needs and interests of participants.</p>
                    </div>                    
                    <div>
                        <div className="text-[#F3F25B] font-medium text-lg"><i className="mx-3 fa-solid fa-circle-right"></i>Certification:</div>
                        <p className="p-3 text-lg"> Upon successful completion of the training program, participants will receive a certificate recognizing their dedication and achievement.
                             Our certification is a testament to your commitment to professional development and excellence in the industrial sector.</p>
                    </div>
                </div>
            </section>
            <section className="p-2">
                <div className="max-w-[70rem] mx-auto">
                    <div className="p-2 rounded-xl" style={{boxshadow: '0px 0px 10px 0px rgba(62, 60, 60, 0.2)'}}>
                        <p className="text-xl font-medium text-center">Take the first step towards a successful career in the industrial sector with our comprehensive Inplant Training Program. 
                            Gain practical skills, industry insights, and valuable experience that will set you apart in today&lsquo;s competitive job market. 
                            Apply now and unlock your potential in the world of industry.
                        </p>
                    </div>
                </div>
            </section>
            <img className="right-0 hidden md:block h-[130px] xl:h-[150px] 2xl:h-[250px] bottom-0 md:-bottom-[120%] xl:-bottom-[185%] 2xl:-bottom-[160%] manandrocket absolute z-10" src="/images/inplant-training.png" alt=""/>
        </main>
   
    <div id="modal" className="hidden flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div className="relative w-full max-w-md max-h-full p-4">
            {/* <!-- Modal content --> */}
            <div className="relative text-black rounded-lg shadow bg-[#F5F7FA]">
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
            {/* <!-- <img src="/images/softwaretraining/MarketingHero 1 (1).png" alt="" class="absolute manandrocket bottom-[30px] md:bottom-[45px] xl:bottom-[100px] 2xl:bottom-[150px] h-[100px] md:h-[200px] xl:h-[250px]  2xl:h-[400px]  "> --> */}
            <img src="/images/footer/Layer-down.png" alt="" className="w-full h-full"/>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:bottom-20 bottom-3">
                <h6 className="text-sm font-semibold lg:text-5xl">Ready to join Industrial Inplant Training?</h6>
                <button className="mx-4 font-bold button-82-pushable" onClick={myModel} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                     Call now
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

export default InplantTraining;