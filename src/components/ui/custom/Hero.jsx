import React from 'react'
import { Button } from '../button'

function Hero() {
  return (
    <div className = "flex flex-col items-center mx-56 gap-9">
      <h1 className = "font-extrabold text-[60px] text-center">
      <span className = "text-[#8f4f36]">Ready to Plan Your Next Adventure?</span><span className = "text-[#74a07e]">MapLeap: Personalized AI Travel Companion</span></h1>
      <p className = "font-semibold text-2xl text-gray-500 text-center">Discover your next journey with personalized recommendations, curated itineraries, and smart travel insighs. All powered by AI</p>
      
      <Button>Map It</Button>
    </div>
  )
}

export default Hero
