import React from 'react'
import './About.css'
const About = () => {
  return (
    <div>


       <section className='home'>
       <div className='home-img'>
          <img src='https://media.istockphoto.com/id/1434212363/photo/middle-eastern-woman-talking-on-smartphone-holding-paper-at-workplace.jpg?s=612x612&w=0&k=20&c=bqnG5duTqdi0lc-XiniDalktIg58TrdL3qqKX3LrhyI=' alt=''>

          </img>
        </div>
      <div className='text'>
      <h2 className='heading' style={{textAlign:'center', textDecoration:'underline'}}>About Me</h2>
      <p >I am a frontend developer having expertise in React development. I
              design and develop web applications using the latest technologies to
              deliver the product with quality code.</p>
        

      </div>
      

    </section>
    </div>
  )
}

export default About
