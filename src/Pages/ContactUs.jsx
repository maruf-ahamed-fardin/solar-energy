
import { BiSolidPhoneCall } from 'react-icons/bi';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { PiGithubLogoFill } from 'react-icons/pi';

const Contactus = () => {
    return (
        <section className='flex justify-between px-30 py-20 bg-gray-400'>
        
            <div className='flex flex-col animate-fade-in animation-delay-200'>
                <MdMail className='mt-1.5  opacity-80'  color='#89EA5F' size={15} />
                <a href="mailto:marufahamedfardin7@gmail.com">
                    marufahamedfardin7@gmail.com
                </a>
                <br />
                <BiSolidPhoneCall className='mt-1.5  opacity-80  ' color='#89EA5F'  size={15} />
                <a href="tel:+8801939666135">
                    +8801939666135
                </a>
            </div>

            <div className='flex items-center gap-4 animate-fade-in animation-delay-400'>

                <a href="https://github.com/maruf-ahamed-fardin"><PiGithubLogoFill size={25} className='bg-[#89EA5F]  opacity-80 rounded-md p-1' color='black' /></a>
                <a href="https://www.linkedin.com/in/maruf-ahamed-fardin-36a941215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin size={25} className='bg-[#89EA5F] rounded-md p-1 opacity-80' color='black' /></a>
                <a href="instagram"><FaInstagramSquare  size={25} className='bg-[#89EA5F]  opacity-80 rounded-md p-1' color='black' /></a>



            </div>
        </section>
    );
};

export default Contactus;