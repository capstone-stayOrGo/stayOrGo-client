import React from 'react'
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='program-container'>
                <p className='program'>Front End Team: </p>
                    <div className='person-container'>
                        <p className='name'>Shauna MacFarlane-Okongo</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/shauna-macfarlane-okongo/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/DrSLMac"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='person-container'>
                        <p className='name'>David Stavis</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/dstavis/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/dstavis"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
            </div>
            <div className='program-container'>
                <p className='program'>Back End Team: </p>
                    <div className='person-container'>
                        <p className='name'>Tyler Caudill</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/tyler-caudill-75885b240/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/TeeCaud"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='person-container'>
                        <p className='name'>Nick Jones</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/nickolas-jones-523b66b7/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/nlj77"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='person-container'>
                        <p className='name'>Jonathan Pope</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/jonathan-m-pope/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/jonathanmpope"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='person-container'>
                        <p className='name'>Mary Turpin</p>
                        <a
                            className='linkedin-icon'
                            href="https://www.linkedin.com/in/mary-turpin-434140150/"
                        >
                            <AiFillLinkedin />
                        </a>
                        <a
                            className='github-icon'
                            href="https://github.com/MaryT573"
                        >
                            <AiFillGithub />
                        </a>
                    </div>
            </div>
        </div>
    )
}


export default Footer