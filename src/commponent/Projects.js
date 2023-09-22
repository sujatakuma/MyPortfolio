import React from 'react'
import './Project.css'
import { Icon } from '@iconify/react';
const Projects = () => {
  return (

    <section className='portfolio' id='portfolio'>
      <div className='title'>
        <h2>Projects</h2>

      </div>
      <div className='portfolio-content'>
        <div className='row'>
          <img src='https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=0&k=20&c=upiDYeAZEsxbUBdhX35MXm79drIXA-5Q-FcfmZk71lM=' alt=''></img>
          <div className='layer'>
            <h5>Robotfrinds React Project</h5>
            <a href='https://sujatakuma.github.io/Robotfrinds/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
        <div className='row'>
          <img src='https://images.hdqwalls.com/download/after-dark-68-1920x1080.jpg' alt=''></img>
          <div className='layer'>
            <h5>
            Clock
            </h5>
            <a href='https://sujatakuma.github.io/www-watch.github.io/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
        <div className='row'>
          <img src='https://img.freepik.com/premium-photo/top-view-person-typing-laptop-background_476151-47.jpg' alt=''></img>
          <div className='layer'>
            <h5>Cake website</h5>
            <a href='https://sujatakuma.github.io/spcele/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
        <div className='row'>
          <img src='https://wallpaperaccess.com/full/1759696.jpg' alt=''></img>
          <div className='layer'>
            <h5>Background Generator</h5>
            <a href='https://sujatakuma.github.io/backg.github.io/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
        <div className='row'>
          <img src='https://img.freepik.com/premium-photo/close-up-view-workplace-with-blank-screen-laptop_67155-6401.jpg' alt=''></img>
          <div className='layer'>
            <h5>Calculator</h5>
            <a href='https://sujatakuma.github.io/Calculator/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
        <div className='row'>
          <img src='https://media.istockphoto.com/id/1285206847/photo/hands-close-and-open-a-laptop-computer-on-table-after-finished-using-it.jpg?s=612x612&w=0&k=20&c=CfVpAnya29dNK3GYr8M82tQDkAd8JSDxicDOrInQrq8=' alt=''></img>
          <div className='layer'>
            <h5>Samarat restaurant</h5>
            <a href='https://sujatakuma.github.io/resturent.github.io/'><i><Icon icon="bx:link-external" /></i></a>
          </div>
        </div>
      </div>

    </section>

  )
}

export default Projects
