import React from 'react';
import "./Footers.css"

const Footers = () => {
    return (
        <div>
            <div className='' >


                <footer className="footer p-32 bg-dark text-white">
                    <div>
                        <img className='w-20' src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXBwbGUlMjBsYXB0b3B8ZW58MHx8MHx8&w=1000&q=80" alt="" />
                        <p>RESELL Industries Ltd.<br />Providing reliable tech since 2000</p>
                    </div>
                    <div>
                        <span className="footer-title">Services</span>
                        <a href="/" className="link link-hover">Branding</a>
                        <a href="/" className="link link-hover">Design</a>
                        <a href="/" className="link link-hover">Marketing</a>
                        <a href="/" className="link link-hover">Advertisement</a>
                    </div>

                    <div>
                        <span className="footer-title">Legal</span>
                        <a href="/" className="link link-hover">Terms of use</a>
                        <a href="/" className="link link-hover">Privacy policy</a>
                        <a href="/" className="link link-hover">Cookie policy</a>
                    </div>
                </footer>
            </div >

        </div>
    );
};

export default Footers;