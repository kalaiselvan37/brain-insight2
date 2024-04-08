import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Herosection = () => {
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
    return (
        <div className="flex-grow">
            <main>
            <section className="relative py-6">
                <div className="w-full max-w-full mx-auto">
                    <div className="grid grid-cols-1 px-4 xl:grid-cols-2 ">
                        <div className="flex items-center justify-center gap-2 ">
                            <div className="">
                                <h1 className="text-xl font-bold md:text-4xl xl:text-5xl saira-stencil text-primary ">
                                    Enhancing Knowledge, </h1>
                                <h1 className="text-xl font-bold text-black md:text-4xl xl:text-5xl saira-stencil">Empowering Insight, </h1>
                                <h1 className="text-xl md:text-4xl xl:text-5xl saira-stencil font-bold text-[#FBAC14]   ">
                                    Driving Decisions</h1>
                            </div>
                        </div>
                        <div className="">
                            <img className="w-full h-full" src="/images/HomepageImage.png" alt=""/>
                        </div>
                    </div>
                    <div>
                        <img className="absolute bottom-[68%] md:bottom-[78%] xl:bottom-[55%] h-[150px] md:h-[200px] xl:h-[300px] left-[2%] md:left-[5%] xl:left-[2%] "
                            src="/images/circle.png" alt=""/>
                        <img className="absolute top-[5%] xl:top-[25%] left-[8%] xl:left-[3.9%]"
                            src="/images/Ellipse1.png" alt=""/>
                        <img className="absolute top-[25%] xl:top-[10%] right-[15%] xl:left-[50%] hidden sm:block"
                            src="/images/Ellipse 2.png" alt=""/>
                        <img className="absolute bottom-[40%] xl:bottom-[40%] left-[25%] xl:left-[25%] hidden sm:block"
                            src="/images/Ellipse 3.png" alt=""/>
                        <img className="absolute top-0 md:top-[1%] xl:top-[12%] 2xl:top-[22%] h-[30px] xl:h-[40px] left-[2%] md:left-[15%] xl:left-[0%] 2xl:left-[5%] "
                            src="/images/Line1.png" alt=""/>
                        <img className="absolute top-[25%] md:top-[15%] xl:top-[40%] h-[30px] xl:h-[40px] right-[8%] md:right-[15%] xl:left-[40%] 2xl:left-[45%]"
                            src="/images/line2.png" alt=""/>
                        <img className="absolute h-[200px] md:h-[350px] xl:h-[500px] bottom-[0%] xl:bottom-[2%] manandrocket"
                            src="/images/manandrocket.png" alt=""/>
                        <img src="/images/rectangle.png" alt=""/>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 mb-0 text-center">
                        <p className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg"
                            id="aboutus">ABOUT
                            <span className="text-[#FF2759]">US</span> </p>
                    </div>
                </div>
            </section>
                        <section className="relative py-9">
                <div className=" max-w-[100rem] px-4 mx-auto ">
                    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                        <div>
                            <div className="flex gap-2">
                                <h1 className="text-4xl font-bold text-primary">Brain </h1><span
                                    className="text-4xl text-[#FBAC14] font-bold ">Insights</span>
                            </div>
                            <div className="py-4 lg:text-xl">
                                <h1>At Brain Insight, we&apos;re dedicated to guiding students towards a brighter future through 
                                    comprehensive educational programs and practical experiences. As a leading provider of final year 
                                    projects, courses in full-stack development, internships, and industrial training, we empower 
                                    individuals with the skills and knowledge necessary to thrive in today&apos;s competitive landscape.
                                </h1>
                            </div>
                            <div className="gap-4 mt-2">
                                <h1 className="text-xl font-bold text-black lg:text-2xl">Why Choose Brain Insight?</h1>
                                <div className="py-4 lg:text-xl">
                                    <p className="py-2"><span className="font-bold text-black">Experienced Faculty:</span> Our
                                        team consists of seasoned professionals and industry experts who bring years of
                                        practical experience to the classroom.</p>
                                    <p className="py-2"><span className="font-bold text-black">Hands-on Learning:</span> We
                                        believe in learning by doing. Our programs emphasize practical, project-based
                                        learning to ensure that students are equipped with the skills and confidence to
                                        succeed.</p>
                                    <p className="py-2"><span className="font-bold text-black">Industry Connections:</span>
                                        Through our partnerships with leading companies and organizations, we provide
                                        students with access to internship opportunities, mentorship, and networking
                                        events that enhance their career prospects.</p>
                                    <p className="py-2"><span className="font-bold text-black">Personalized Support: </span> At
                                        Brain Insight, we prioritize the success of each student. Our small className sizes
                                        and personalized approach to learning ensure that every individual receives the
                                        attention and support they need to thrive.</p>
                                </div>
                                <div className="py-5">
                                    <h1><span className="text-xl font-bold text-black"/>Join us at <span
                                                className="text-primary">Brain</span> <span className="text-[#FBAC14]">Insight
                                            </span> and embark on a journey of discovery, growth, and endless
                                            possibilities. Let&apos;s unlock your potential together!</h1>
                                </div>
                                <div className="text-center">
                                <button className="p-2 px-6 text-xl font-bold border lg:text-2xl rounded-2xl bg-secondary text-primary" onClick={myModel}>
                                    JOIN <span className="text-[#FF2759]">US</span>
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="lg:py-44">
                            <img src="/images/homeimage2.png" alt=""/>
                        </div>
                    </div>
                    </div>
            </section>
            <div id="modal"
                className="hidden flex overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full p-4">
                    {/* <!-- Modal content --> */}
                    <div className="relative text-black rounded-lg shadow bg-[#F5F7FA]" style={{ boxShadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)' }}>
                        {/* <!-- Modal header --> */}
                        <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#FF275A]">
                            <h3 className="text-xl font-bold text-white lg:text-2xl">
                                Contact
                            </h3>
                            <button onClick={myModel} type="button"
                                className="end-2.5 text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center "
                                data-modal-hide="authentication-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="relative p-4 md:p-5 group">
                            <div className="relative z-[2]">
                                <p className="mb-3 font-bold">PHONE NUMBER</p>
                                <p className="text-[25px] mb-3"><i
                                        className="mb-0 fa-solid fa-square-phone-flip fa-rotate-90 text-primary-color me-2"></i>
                                    <span className="text-base ">7010809200</span></p>
                                <p className="mb-3 font-bold">EMAIL ADDRESS</p>
                                <p className="text-[25px] mb-3"><i
                                        className="mb-0 fa-solid fa-envelope text-primary-color me-2"></i> <span
                                        className="text-base ">hr@brain-insight.com</span></p>
                                <p className="mb-3 font-bold">OFFICE LOCATION</p>
                                <p className="text-[25px] mb-3"><i
                                        className="mb-0 fa-solid fa-location-dot text-primary-color me-2"></i> <span
                                        className="text-base ">No. 113, Vaibhav Co Opp Nagar, P-1, Opposite VIT (3rd Gate),
                                        Katpadi, Vellore - 632014</span></p>
                                <div className="flex justify-center p-3">
                                    <button onClick={myModel}
                                        className="p-2 font-semibold text-black w-[100px] px-4 py-3 rounded-xl shadow-lg bg-[#F3F25B] ">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="relative">
                <img src="/images/ourservices/Layer-up.png" alt="" className="relative w-full h-full pb-5"/>
                <div className="absolute bottom-0 left-0 right-0 mb-0 text-center">
                    <p
                        className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg">
                        OUR
                        <span className="text-[#FF2759]">SERVICES</span> </p>
                    {/* <!-- <img class="absolute top-[50%] xl:top-[49%] left-[66%] md:left-[56.5%] xl:left-[55%]  2xl:left-[53%] h-[22px] xl:h-[22px]  z-10"
                        src="/images/dropshadow.png" alt=""> --> */}
                </div>
            </section>
            <section className="relative p-2 py-10" id="services">
                <div className="text-xl font-semibold text-center lg:text-3xl">Fostering a playful & engaging learning <br/>
                    environment</div>
                <div className="flex items-center justify-center py-9">
                        <div className="flex items-center justify-center ">
                            <Link to="/softwaretraining" className="overflow-hidden">
                                <div className="card bg-[#F3F25B] p-8 rounded-md shadow-md">
                                    <div className="flex gap-2 text-2xl font-semibold text-[#0051A4]">
                                        <img src="/images/ourservices/software-training.png" alt=""/>Software<span className="text-[#FF2759]">Training</span>
                                    </div>
                                    <div className="mt-7 text-xl flex-wrap lg:w-[450px] p-1">
                                    &quot;We offer expert software training designed to empower individuals and businesses with essential digital skills for success in today&quot;s dynamic landscape.&quot;
                                    </div>
                                </div>
                           </Link>
                        </div>
                </div>
                <div className="max-w-full mx-auto">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
                        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                            <Link to="/academicprojects" className="overflow-hidden card-link">
                                <div className="card bg-[#F3F25B] p-8 rounded-md shadow-md">
                                    <div className="flex gap-2 text-2xl font-semibold text-[#0051A4]">
                                        <img src="/images/ourservices/software-training.png"
                                            alt=""/>Academic<span className="text-[#FF2759]">Projects</span>
                                    </div>
                                    <div className="mt-7 text-xl flex-wrap lg:w-[450px] p-1">
                                    &quot;Explore our academic projects, meticulously crafted to foster innovation and
                                        address real-world challenges.&quot;
                                    </div>
                                </div>
                           </Link>
                            <Link to="/internshipprogram" className="overflow-hidden card-link">
                                <div className="card bg-[#F3F25B] p-8 rounded-md shadow-md">
                                    <div className="flex gap-2 text-2xl font-semibold text-[#0051A4]">
                                        <img src="/images/ourservices/software-training.png"
                                            alt=""/>Internship<span className="text-[#FF2759]">Program</span>
                                    </div>
                                    <div className="mt-7 text-xl flex-wrap lg:w-[450px] p-1">
                                    &quot;Welcome to our Internship Program, where budding talents ignite their potential
                                        through hands-on experience and mentorship.&quot;
                                    </div>
                                </div>
                           </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center py-9">
                    <Link to="/inplanttraining" className="overflow-hidden card-link">
                        <div className="card bg-[#F3F25B] p-8 rounded-md shadow-md">
                            <div className="flex gap-2 text-2xl font-semibold text-[#0051A4]">
                                <img src="/images/ourservices/software-training.png" alt=""/>Inplant / Industrial<span className="text-[#FF2759]">Training</span>
                            </div>
                            <div className="mt-7 text-xl flex-wrap lg:w-[450px] p-1">&quot;Welcome to our Industrial Training
                                program, where we equip aspiring professionals with practical skills and hands-on
                                experience to thrive in today&quot;s competitive industrial landscape.&quot;
                            </div>
                        </div>
                   </Link>
                </div>
                <div>
                    <img className="absolute -bottom-[5%] md:-bottom-[13%] xl:-bottom-[25%] h-[180px] 2xl:h-[500px] md:h-[300px] xl:h-[400px]"
                        src="/images/footer/rocketandman.png" alt=""/>
                </div>
            </section>
            </main>
            <footer className="" id="contactus">
        <img src="/images/footer/Layer-down.png" alt="" className="w-full h-full"/>
        <div className="max-w-full mx-auto">
            <div className="flex flex-col items-center justify-center lg:flex-row lg:gap-10">
                <div className="flex items-center justify-start lg:justify-center">
                    <img src="/images/footer/footer-logo.png" alt="" className="w-auto h-auto"/>
                </div>
                <div className="flex flex-col p-3 space-y-3">
                    <div className="text-xl"><i className="mr-5 fa-solid fa-location-dot fa-xl" style={{color: '#184aa0'}}></i>No.
                        113, Vaibhav Co Opp Nagar, P-1, Opposite VIT (3rd Gate), Katpadi, Vellore - 632014</div>
                    <Link to="tel:(123) 456-7890">
                        <div className="text-xl"><i className="mr-5 fa-solid fa-phone fa-xl" style={{color: '#184aa0'}}></i>+91
                            7010809200</div>
                   </Link>
                    <div className="text-xl"><i className="mr-5 fa-solid fa-envelope fa-xl"
                            style={{color: '#184aa0'}}></i>hr@brain-insight.com</div>
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
            <Link to="">
                <p>HOME</p>
           </Link>
            <Link to="#aboutus">
                <p>ABOUT US</p>
           </Link>
            <Link to="#services">
                <p>SERVICES</p>
           </Link>
            <Link to="#contactus">
                <p>CONTACT US</p>
           </Link>
        </div>
        <div className="py-10 text-xl text-center">
            © 2024 Brain Insight. All rights reserved.
        </div>
    </footer>
        </div>
    );
};
export default Herosection;
