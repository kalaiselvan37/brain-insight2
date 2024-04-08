import { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    useEffect(() => {
        const toggleBtn = document.getElementById('toggle');
        const collapseMenu = document.getElementById('collapseMenu');

        function handleClick() {
            collapseMenu.style.display = (collapseMenu.style.display === 'block') ? 'none' : 'block';
        }

        toggleBtn.addEventListener('click', handleClick);

        return () => {
            toggleBtn.removeEventListener('click', handleClick);
        };
    }, []); 

    useEffect(() => {
        const servicesLink = document.querySelector('#collapseMenu > li:nth-child(3) > a');
        const servicesDropdown = document.querySelector('#collapseMenu > li:nth-child(3) > ul');
        function showDropdown() {
            servicesDropdown.classList.remove('hidden');
        }
        function hideDropdown() {
            servicesDropdown.classList.add('hidden');
        }
        const handleLinkClick = (e) => {
            e.preventDefault();
            servicesDropdown.classList.toggle('hidden');
        };
        servicesLink.addEventListener('click', handleLinkClick);
        servicesLink.addEventListener('mouseover', showDropdown);
        servicesDropdown.addEventListener('mouseover', showDropdown);
        servicesDropdown.addEventListener('mouseleave', hideDropdown);
        return () => {
            servicesLink.removeEventListener('click', handleLinkClick);
            servicesLink.removeEventListener('mouseover', showDropdown);
            servicesDropdown.removeEventListener('mouseover', showDropdown);
            servicesDropdown.removeEventListener('mouseleave', hideDropdown);
        };
    }, []);
   
    return (
        <header className='shadow-lg py-6 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] sticky z-50 top-0'>
        <div className='flex flex-wrap items-center justify-between gap-5'>
            <Link to={"/"} className="lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2">
                <img src="/images/logo.png" alt="logo" className='w-36 h-[80px]'/>
            </Link>
            <div className='flex items-center gap-5 ml-auto lg:order-1'>
                <Link to={"https://www.facebook.com/profile.php?id=61557747042490"} target="_blank" className="social-icon">
                <p><i className="fab fa-square-facebook fa-xl" style={{ color: '#dd1313' }}></i></p>
                </Link>
                <Link to={"https://twitter.com/BrainInsig65978"} target="_blank" className="social-icon">
                    <p><i className="fa-brands fa-x-twitter fa-xl" style={{ color: '#dd1313' }}></i></p>
                </Link>
                <Link to={"https://www.linkedin.com/company/braininsight/?viewAsMember=true"} target="_blank" className="social-icon">
                    <p><i className="fa-brands fa-linkedin fa-xl" style={{ color: '#dd1313' }}></i></p>
                </Link>
                <Link to={"https://www.instagram.com/braininsight24/"} target="_blank" className="social-icon">
                    <p><i className="fa-brands fa-square-instagram fa-xl" style={{ color: '#dd1313' }}></i></p>
                </Link>
                <Link to={"https://www.youtube.com/channel/UCxEakAhF6irsmhCYu48lxuw"} target="_blank" className="social-icon">
                    <p><i className="fa-brands fa-youtube fa-xl" style={{ color: '#dd1313' }}></i></p>
                </Link>
                <button id="toggle" className='lg:hidden ml-7'>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
            <ul id="collapseMenu" className='lg:flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full'>
            <li className='max-lg:border-b max-lg:bg-[#007bff] max-lg:py-2 px-3 max-lg:rounded'>
                <Link to={"/"} className='hover:text-[#007bff] text-black max-lg:text-white block font-semibold text-[18px]'>Home </Link>
            </li>
            <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
                <Link to={"#aboutus"} className='hover:text-[#007bff] text-black block font-semibold text-[18px]'>About us </Link>
            </li>
            {/* Dropdown for Services */}
            <li className='relative px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
                <Link to='#services' className='hover:text-[#007bff] text-black block font-semibold text-[18px]'>Services</Link>
                <ul className="absolute left-0 hidden w-[200px] bg-white shadow-lg top-full">
                    <li>
                        <Link to={"/softwaretraining"} className='block px-4 py-2 p-2 text-sm text-gray-800 hover:text-[#007bff]'>Software Training</Link>
                    </li>
                    <li><Link to={"/academicprojects"} className='block px-4 py-2 text-sm text-gray-800 hover:text-[#007bff]'>Academic Projects</Link></li>
                    <li><Link to={"/internshipprogram"} className='block px-4 py-2 text-sm text-gray-800 hover:text-[#007bff]'>Internship Program</Link></li>
                    <li><Link to={"/inplanttraining"} className='block px-4 py-2 text-sm text-gray-800 hover:text-[#007bff]'>Inplant/Industrial Training</Link></li>
                </ul>
            </li>
            {/* End Dropdown for Services */}
            <li className='px-3 max-lg:border-b max-lg:py-2 max-lg:rounded'>
                <Link to={"/contactus"} className='hover:text-[#007bff] text-black block font-semibold text-[18px]'>Contact us </Link>
            </li>
        </ul>
        </div>
    </header>

    );
};
export default Header;