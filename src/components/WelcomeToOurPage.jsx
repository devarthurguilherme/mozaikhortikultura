import React from 'react'

const WelcomeToOurPage = () => {
  return (
    <div className="flex flex-col h-full justify-center">
        <p className="text-lg font-semibold md:text-2xl">Welcome to our page intended for</p>
        <h1 className="font-bold text-3xl md:text-myH1 md:leading-myLineHeightTablet mt-2 md:mt-4 lg:hidden">Project Management & Event Coordination</h1>
        <h1 className="font-bold text-3xl md:text-myH1 md:leading-myLineHeightDesktop mt-2 md:mt-4 hidden lg:block">Project Management & Event <br/>Coordination</h1>
    </div>
  )
}

export default WelcomeToOurPage