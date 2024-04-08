import { useEffect } from "react";
import { Link } from "react-router-dom";
const AcademicProjects=()=>{
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
                        <img src="/images/softwaretraining/balloon.png" alt="" className="absolute manandrocket top-[50px] xl:top-[80px] 2xl:top-[100px] h-[200px] xl:h-[250px] 2xl:h-[300px] hidden md:block"/>
                    </div>
                </div>
                <div className="text-center absolute top-[30%] md:top-[50%] xl:top-[50%] 2xl:top-[55%] left-0 right-0 mb-0">
                    <p className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg">ACADEMIC
                        <span className="text-[#FF2759]">PROJECTS</span>
                    </p>
                </div>
            </section>
                <div className="space-y-2">
                    <h1 className="text-xl font-semibold text-center lg:text-4xl text-[#0051A4]"><span className="text-[#FF2759]">Top Project</span> Categories</h1>
                    <h1 className="text-xl font-semibold text-center lg:text-3xl text-[#0051A4]">IEEE Projects For Final Year Students ECE,EEE,CSE & IT</h1>
                </div>
                <section className="relative p-2 py-10">
                    <div className="max-w-[40rem] mx-auto relative ">
                        <div className="inset-0 flex items-center justify-center text-center ">
                            <h1 className=" absolute text-lg lg:text-2xl bg-[#007bff] text-[#F3F25B] p-3 font-semibold rounded-lg">DOMAIN</h1>
                        </div>
                        <div className="bg-[#F3F25B] p-6 rounded-lg font-semibold text-xl">
                            <div className="grid grid-cols-1 gap-1 py-4 lg:grid-cols-2">
                                <div className="space-y-3 ">
                                    <p>&#9900; DataScience Projects.</p>
                                    <p>&#9900; Datamining Projects</p>
                                    <p>&#9900; Image Processing Projects</p>
                                    <p>&#9900; Cloud Computing Projects</p>
                                    <p>&#9900; Networking Projects</p>
                                    <p>&#9900; Security Projects</p>
                                    <p>&#9900; Wireless Network Projects</p>
                                    <p>&#9900; Big Data Projects</p>
                                    <p>&#9900; Embedded Projects</p>
                                    <p>&#9900; VLSI Projects</p>
                                </div>
                                <div className="space-y-3">
                                    <p>&#9900; Bio-Medical Projects</p>
                                    <p>&#9900; Power Electronics Projects</p>
                                    <p>&#9900; Power System Projects</p>
                                    <p>&#9900; IoT Projects</p>
                                    <p>&#9900; Signal Processing Projects</p>
                                    <p>&#9900; Android Projects</p>
                                    <p>&#9900; Web Application Projects</p>
                                    <p>&#9900; Bio Informatics Projects</p>
                                    <p>&#9900; Grid Computing Projects</p>
                                    <p>&#9900; Communication Projects</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative p-2">
                    <div className="max-w-[75rem] mx-auto">
                        <div className="p-3 rounded-lg bg-primary">
                            <img src="/images/softwaretraining/studentlaptop.png" alt="" className="absolute hidden right-0 md:right-30  xl:right-20 2xl:right-96 bottom-[430px] 2 h-[200px] md:block"/>
                            <h1 className="text-xl lg:text-2xl text-[#F3F25B] text-center font-bold pb-3">Academic Projects</h1>
                            <div className="space-y-2 text-xl text-white">
                                <p className="flex items-start">&#9900; <span className="ml-3">At Brain Insight, we recognize the pivotal role that academic projects play in shaping the educational journey of students.</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Our academic projects are carefully curated to provide students with hands-on experience, practical skills, and a deeper understanding of their field of study.</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Whether you&apos;re pursuing a degree in computer science, engineering, or any other discipline, our diverse range of projects caters to various interests and career aspirations.</span></p>
                            </div>
                            <h1 className="text-xl lg:text-2xl text-[#F3F25B] text-center font-bold pb-3">Key Features of Our Academic Projects:</h1>
                            <div className="space-y-2 text-xl text-white">
                                <p className="flex items-start">&#9900; <span className="ml-3">Relevance</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Hands-on Experience</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Collaborative Learning</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Mentorship and Guidance</span></p>
                                <p className="flex items-start">&#9900; <span className="ml-3">Portfolio Building</span></p>
                            </div>
                        </div>

                    </div>
                </section>
        </main>
    
    {/* <!-- modal --> */}
    <div id="modal" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center hidden w-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0" >
        <div className="relative w-full max-w-lg max-h-full p-4">
            {/* <!-- Modal content --> */}
            <div className="relative text-black rounded-lg shadow bg-[#F5F7FA]" style={{ boxshadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)'}}>
                {/* <!-- Modal header --> */}                                     
                <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#FF275A]">
                    <h3 className="text-xl font-semibold text-white">
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
                <div className="max-w-xl p-4 mx-auto rounded-md ">
                    {/* <!-- <h1 class="text-3xl font-extrabold text-center text-red-500">Contact</h1> --> */}
                    <form className="mt-8 space-y-4" id="contactForm1">
                        <input type='text' placeholder='Name' id="Name" name="Name"
                            className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                        <input type='email' placeholder='Email' id="Email" name="Email"
                            className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                        <input type='text' placeholder='Phone number' id="Phone_Number" name="Phone_Number"
                            className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                        <input type='text' placeholder='Department' id="Department" name="Department"
                            className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                            <select name="dropdown" id="dropdown" placeholder="Select" className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required>
                                <option value="">Select Domain</option>
                                <option value="DataScience Projects">DataScience Projects</option>
                                <option value="Datamining Projects">Datamining Projects</option>
                                <option value="Image Processing Projects">Image Processing Projects</option>
                                <option value="Cloud Computing Projects">Cloud Computing Projects</option>
                                <option value="Networking Projects">Networking Projects</option>
                                <option value="Security Projects">Security Projects</option>
                                <option value="Wireless Network Projects">Wireless Network Projects</option>
                                <option value="Big Data Projects">Big Data Projects</option>
                                <option value="Embedded Projects">Embedded Projects</option>
                                <option value="VLSI Projects">VLSI Projects</option>
                                <option value="Bio-Medical Projects">Bio-Medical Projects</option>
                                <option value="Power Electronics Projects">Power Electronics Projects</option>
                                <option value="Power System Projects">Power System Projects</option>
                                <option value="IoT Projects">IoT Projects</option>
                                <option value="Signal Processing Projects">Signal Processing Projects</option>
                                <option value="Android Projects">Android Projects</option>
                                <option value="Web Application Projects">Web Application Projects</option>
                                <option value="Bio Informatics Projects">Bio Informatics Projects</option>
                                <option value="Grid Computing Projects">Grid Computing Projects</option>
                                <option value="Communication Projects">Communication Projects</option>
                            </select>
                        <div className="flex items-center justify-center">
                            <button type="submit" onClick={myModel}
                                className="w-[100px] px-4 py-3 text-lg font-semibold text-black bg-[#F3F25B] rounded-xl shadow-md">Send</button>
                        </div>
                    </form>
                </div>                   
            </div>
        </div>
    </div>
    <footer className="py-10" id="contactus">
        <div className="relative">
            <img src="/images/softwaretraining/MarketingHero 1 (1).png" alt="" className="absolute manandrocket bottom-[30px] md:bottom-[45px] xl:bottom-[100px] 2xl:bottom-[150px] h-[100px] md:h-[200px] xl:h-[250px]  2xl:h-[400px]"/>
            <img src="/images/footer/Layer-down.png" alt="" className="w-full h-full"/>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:bottom-20 bottom-3">
                <h6 className="text-lg font-bold lg:text-5xl">Ready to join us?</h6>
                <button className="mx-4 font-bold button-82-pushable" onClick={myModel} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                     Click Here
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
          <Link to="/"><p>HOME</p></Link>
          <Link to="/"><p>ABOUT US</p></Link>
          <Link to="/"><p>SERVICES</p></Link>
          <Link to="/"><p>CONTACT US</p></Link>
        </div>
        <div className="mt-5 text-xl text-center">
        © 2024 Brain Insight. All rights reserved.
         </div>
    </footer>
    </div>
    

    );
};

export default AcademicProjects;