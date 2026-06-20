import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} alt="logo" className='w-32 mb-5' />
                    <p className='text-gray-500 w-full md:w-2/3'>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.

                    </p>
                </div>
                <div>
                    <p className='font-medium text-xl mb-5'>COMPANY</p>
                    <ul className='text-gray-500 flex flex-col gap-1'>

                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>

                    </ul>
                </div>

                <div>
                    <p className='font-medium text-xl mb-5'>GET IN TOUCH</p>
                    <ul className='text-gray-500 flex flex-col gap-1'>

                        <li>+1-212-456-7890</li>
                        <li>contact@forever.com</li>
                        

                    </ul>
                </div>

            </div>

            <div>
                <hr  />
                <p className='text-center text-sm py-5'>© 2026 Forever.com All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer