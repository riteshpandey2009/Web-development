import React, { use } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function ChangeTheme() {
    const {setTheme} = use(ThemeContext)
  
  return (
    <div>
      <h1>ChangeTheme</h1>
        <select name="" id="" onChange={(e)=> setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">dark</option>
            <option value="system">System</option>
        </select>
    </div>
  )
}

export default ChangeTheme