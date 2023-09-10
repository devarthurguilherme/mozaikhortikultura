import './App.css'
import './index.css';
//Components
import NavMenu from "./components/NavMenu"
import WelcomeToOurPage from './components/WelcomeToOurPage';
import OurImpact from './components/OurImpact';
import WeFindWeEducate from './components/WeFindWeEducate';
import CheckOutOurWork from './components/CheckOutOurWork';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    {/* Header */}
      <header>
        <div className=" bg-red-400 ">
          <div className="container mx-auto h-screen max-w-7xl p-4">
            <div className="h-1/6 bg-blue-400 flex flex-col justify-center">
              <NavMenu/>
            </div>
            <div className="h-5/6 bg-blue-200">
              <WelcomeToOurPage/>
            </div>
          </div>
        </div>
      </header>
      {/* End of the Header */}
      {/* Main */}
      <main>
        <div className="container mx-auto min-h-screen max-w-7xl p-4">
          <div className="min-h-screen bg-pink-900 flex items-center mt-1">
            <OurImpact/>
          </div>
          <div className="min-h-screen bg-pink-800 flex items-center mt-1">
            <WeFindWeEducate/>
          </div>
          <div className="min-h-screen bg-pink-700 flex flex-col mt-1">
            <CheckOutOurWork/>
          </div>
        </div>
        <div className="bg-pink-600 flex flex-col mt-1">
            <div className="container mx-auto max-w-7xl p-4">
              <Testimonials/>
            </div>
        </div>
      </main>
      {/* End of the Main/}
      {/* Contact Us */}
      <div className="bg-pink-500 mt-1">
        <div className="container mx-auto max-w-7xl p-4">
          <ContactUs/>
        </div>
      </div>
      {/* End of the Contact Us */}
      {/* Footer */}
      <footer>
        <div>
          <div className="container mx-auto max-w-7xl p-4">
            
          </div>
        </div>
      </footer>
      {/* End of the Footer */}
    </>
  )
}

export default App
