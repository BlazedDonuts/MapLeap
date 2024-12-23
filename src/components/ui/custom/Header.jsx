import React from 'react'
import { Button } from '../button'


function Header() {
  return (
    <div className="p-3 shadow-sm flex justify-between items-center">
      <img src = '/logo.png'/>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  )
}

export default Header
