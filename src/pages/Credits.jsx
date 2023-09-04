import Joseph from '../assets/Joseph Image.jpg'
import Hariharan from '../assets/Hariharan Image.jpeg'
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 
const Credits = () => {
    return (
        <div className="bg bg-rounded backdrop-blur-md border rounded-lg mt-44 md:m-0 h-screen md:px-24 pt-8 ">
            <h1 className="md:text-3xl text-xl font-semibold mt-4 md:mt-0 text-center m">Creator Credits</h1>
            <div className="font-serif flex flex-row p-10 md:p-10">
                <div className="flex flex-col  ">
                    <img
                        src={Joseph}
                        alt="Joseph Peter J"
                        className="w-17 h-20 rounded-full mb-8"
                    />
                    <img
                        src={Hariharan}
                        alt="Hariharan"
                        className="w-20 h-20 rounded-full mb-8"
                    />
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                        alt="Person 3"
                        className="w-20 h-20 rounded-full  "
                    />
                </div>
                <div className="flex flex-col ml-8 space-y-14  ">
                    <p
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white ">
                        Joseph Peter J
                        <div className='flex flex-row  space-x-6 text-xl'>
                        <a href="https://www.linkedin.com/in/josephpeter-j/" className='mt-2'><FaLinkedin/></a>
                        <a href="https://github.com/josephpeter231/" className='mt-2'><FaGithub/></a>
                        </div>
                    </p>
                    <p
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white">
                        Hariharan R
                        <div className='flex flex-row  space-x-6 text-xl'>
                        <a href="https://www.linkedin.com/in/hariharan-r-62237a244/" className='mt-2'><FaLinkedin/></a>
                        <a href="https://github.com/Hariharan1828" className='mt-2'><FaGithub/></a>
                        </div>
                    </p>               
                    <p
                        
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-semibold text-white mt">
                        Surieya N
                        <div className='flex flex-row  space-x-6 text-xl'>
                        <a href="https://www.linkedin.com/in/surieya-n-110912203/" className='mt-2'><FaLinkedin/></a>
                        <a href="https://github.com/Surieya" className='mt-2'><FaGithub/></a>
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Credits;
