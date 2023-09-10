import React from 'react'

const Header = () => {
  return(
    <>
        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-between">
            <div>
                Logo
            </div>
            <nav className="">
                <ul className="flex text-white text-lg font-semibold">
                    <li className="mr-8 hover:text-MyGreen cursor-pointer">Home</li>
                    <li className="mr-8 hover:text-MyGreen cursor-pointer">About</li>
                    <li className="mr-8 hover:text-MyGreen cursor-pointer">Services</li>
                    <li className="mr-8 hover:text-MyGreen cursor-pointer">Our Work</li>
                    <li className="mr-8 hover:text-MyGreen cursor-pointer">Testimonials</li>
                    <li className="hover:text-MyGreen cursor-pointer">Contact</li>
                </ul>
            </nav>
        </div>
        {/* End of the Desktop Menu */}
        {/* Mobile Toogle Menu */}
        <div className="flex lg:hidden justify-between">
            <div>
                Logo
            </div>
            <div>
                toggle
            </div>
        </div>
        {/* End of the Mobile Toogle Menu */}
    </>
  )
    
  
    
  
}

export default Header