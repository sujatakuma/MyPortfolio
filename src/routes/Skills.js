import React from 'react'
import './Skills.css'
import { Icon } from '@iconify/react';
const Skills = () => {
  return (
    <div className='all'>
<h1>Technical skills</h1>
      <div className='box'>
        <div className='box-1'>
          <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' icon="logos:html-5" />
          </div>

        </div>
        <div className='box-1'>
          <div class="progress-bar-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' icon="logos:css-3" /></div>
        </div>
        <div className='box-1'>
          <div class="progress-bar-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' style={{ background: 'yellow' }} icon="ic:baseline-javascript" /></div>
        </div>
        <div className='box-1'>
          <div class="progress-bar-4" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' icon="logos:bootstrap" /></div>
        </div>
        <div className='box-1'>
          <div class="progress-bar-5" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' icon="skill-icons:react-dark" /></div>
        </div>
        <div className='box-1'>
          <div class="progress-bar-6" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><Icon className='icon' style={{background:'green'}}icon="akar-icons:node-fill" /></div>
        </div>
      </div>
    </div>






  )
}

export default Skills
