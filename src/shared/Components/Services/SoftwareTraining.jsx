import { useEffect } from "react";
import { Link } from "react-router-dom";

const SoftwareTraining=()=>{
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
                     <img src="/images/softwaretraining/balloon.png" alt="" className="absolute manandrocket top-0 md-top-[60px] xl:top-[80px] 2xl:top-[100px] h-[300px] hidden md:block"/>
                    </div>
                </div>
                <div className="text-center absolute top-[30%] md:top-[50%] xl:top-[50%] 2xl:top-[55%] left-0 right-0 mb-0">
                    <p className="font-bold text-xl lg:text-4xl bg-[#F3F25B] inline-block px-6 p-2 text-[#0051A4] rounded-lg">SOFTWARE
                        <span className="text-[#FF2759]">TRAINING</span> </p>
                </div>
            </section>
            <section className="py-20 lg:py-10">
                <div className="flex items-center justify-center">
                    {/* <!-- <img src="/images/softwaretraining/cloud1.png" alt="" class="absolute lg:h-[150px] h-[120px] "> --> */}
                    <div className="absolute text-xl lg:text-3xl font-bold   text-[#0051A4]">COURSES <span className="text-[#FF2759]">OFFERED</span> </div>
                </div>
            </section>
            <section className="p-2 text-white lg:my-14">
                <div className="max-w-[70rem] mx-auto bg-primary p-3 shadow-md rounded-lg">
                    <h1 className="text-center text-[#F3F25B] font-bold text-xl lg:text-2xl">Advanced DataScience and Professionals</h1>
                    <div className="grid grid-cols-1 gap-10 p-3 lg:grid-cols-2">
                        <div className="space-y-2 text-xl">
                            <h1 className="font-bold">What you will learn:</h1>
                            <p className="flex items-start">&#9900; <span className="ml-3">Learn Open source used in datascience like Jupyter Notebooks, Zeppelin, RStudio, Django, and IBM Watson.</span></p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Gain skills in Node.js, Python (with Django or Flask), or Java (with Spring Boot) for server-side programming.</span></p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Master MySQL, MongoDB, or Firebase for efficient data storage and retrieval.</span></p>
                        </div>
                        <div className="space-y-2 text-xl">
                            <h1 className="font-bold">Program Duration:</h1>
                            <p className="flex items-start">&#9900; <span className="ml-3">+3 Months (Weekdays Batch)</span></p>
                            <p className="flex items-start">&#9900; <span className="ml-3">+5 Months (Weekdays Batch)</span></p>
                        </div>
                    </div>
                    
                </div>
            </section>
            <h2 className="text-center lg:text-5xl text-[#0051A4] font-bold"><span className="text-[#dd1313]">Get the opportunity</span> to work on while learning</h2>
            <section className="p-2 lg:my-14">
                <div className="max-w-[70rem] mx-auto bg-[#F3F25B] p-3 shadow-md rounded-lg">
                    <h1 className="text-center text-[#0051A4] font-bold text-xl lg:text-2xl">Fullstack Software Developer</h1>
                    <div className="grid grid-cols-1 gap-10 p-3 lg:grid-cols-2">
                        <div className="space-y-2 text-xl">
                            <h1 className="font-bold">What you will be learn :</h1>
                            <p className="flex items-start">&#9900; <span className="ml-3">Learn Open source used in datascience like Jupyter Notebooks,Zepplin, RStudio,Django and IBM Watson.</span>  </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Gain skills in Node.js, Python (with Django or Flask), or Java (with Spring Boot) for server-side programming </span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Master MySQL, MongoDB, or Firebase for efficient data storage and retrieval.</span>  </p>
                        </div>
                        <div className="space-y-2 text-xl">
                            <h1 className="font-bold">Program Duration:</h1>
                            <p className="flex items-start">&#9900; <span className="ml-2">+3 Months (Weekdays Batch)</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-2">+5 Months (Weekdays Batch)</span></p>
                        </div>
                    </div>
                </div>
            </section>
            <div className="flex items-center justify-center mt-2 2xl:mt-3">
                <p className="bg-[#F3F25B] lg:w-[15%] text-center p-2 text-xl 2xl:text-2xl text-primary font-semibold rounded-xl">Course <span className="text-[#dd1313]">Highlights</span></p>
            </div>
            <section className="p-2">
                <div className="max-w-[50rem] mx-auto mt-3 2xl:mt-5 text-xl">
                    <div className="grid grid-cols-1 gap-3 p-4 border-2 rounded-lg lg:grid-cols-2">
                        <div className="space-y-2 font-semibold">
                            <p className="flex items-start">&#9900; <span className="ml-3">Daily Hands-On Learning and Practices.</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Job oriented course design.</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Customized Curriculum.</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">A digital portfolio in &rsquo;Github&rsquo;.</span> </p>
                        </div>
                        <div className="space-y-2 font-semibold">
                            <p className="flex items-start">&#9900; <span className="ml-3">EMI options available.</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3">Learn in English and Tamil.</span> </p>
                            <p className="flex items-start">&#9900; <span className="ml-3"> No Prior Programming Language.</span></p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <div id="modal" className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center hidden w-full max-h-full overflow-x-hidden overflow-y-auto md:inset-0">
            <div className="relative w-full max-w-lg max-h-full p-4">
                {/* <!-- Modal content --> */}
                <div className="relative text-black rounded-lg shadow bg-[#F5F7FA]" style={{ boxShadow: '0px 0px 10px 0px rgba(28, 27, 27, 0.2)' }}
>
                    {/* <!-- Modal header --> */}
                    <div className="flex items-center justify-between p-4 border-b rounded-t md:p-5 bg-[#FF275A]">
                        <h3 className="text-2xl font-bold text-white">
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
                        <form className="mt-8 space-y-4" id="contactForm">
                            <input type='text' placeholder='Name' id="Name" name="Name" className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                            <input type='email' placeholder='Email' id="Email" name="Email" className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                            <input type='text' placeholder='Phone number' id="Phone_Number" name="Phone_Number" className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required/>
                            <select name="dropdown" id="dropdown" placeholder="Select" className="w-full px-4 py-3 text-base border-2 rounded-md outline-blue-500" required>
                                <option value="">Select</option>
                                <option value="Software Training">Software Training</option>
                                <option value="Academic Projects">Academic Projects</option>
                                <option value="Internship Program">Internship Program</option>
                                <option value="Industrial Inplant Training">Industrial Inplant Training</option>
                            </select>
                            <div className="flex items-center justify-center">
                                <button type="button" onClick="submitForm()" className="w-[100px] px-4 py-3 text-lg font-semibold text-black bg-[#F3F25B] rounded-xl shadow-md">Send</button>
                            </div>
                        </form>
                    </div>                   
                </div>
            </div>
        </div>
        <footer className="py-10" id="contactus">
        <div className="relative">
            <img src="/images/softwaretraining/telescope.png" alt="" className="absolute h-[150px] xl:h-[200px]  2xl:h-[250px] md:bottom-[50px] xl:bottom-[80px] 2xl:bottom-[200px] hidden sm:block left-0 xl:left-8 2xl:left-10"/>
            <img src="/images/footer/Layer-down.png" alt="" className="w-full h-full"/>
            <div className="absolute inset-0 flex items-center justify-center text-center text-white lg:bottom-20 bottom-3">
                <h6 className="text-sm font-bold md:text-xl 2xl:text-5xl">Software Training with Certification <span className="text-[#F3F25B]">@Vellore</span></h6>
                <button className="mx-4 font-bold button-82-pushable" onClick={myModel} role="button">
                    <span className="button-82-shadow"></span>
                    <span className="button-82-edge"></span>
                    <span className="button-82-front text">
                    Join Now
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
            <Link to="/"><p>ABOUT US</p></Link>
            <Link to="/"><p>SERVICES</p></Link>
            <Link to="/"><p>CONTACT US</p></Link>
        </div>
        <div className="mt-5 text-lg text-center">
        © 2024 Brain Insight. All rights reserved.
         </div>
    </footer>
    </div>

    );


};

export default SoftwareTraining;