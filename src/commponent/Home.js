import React from 'react'
import './Home.css';
//import About from './About'
//import Skills from './Skils'
//import Education from './Education'
//import Projects from './Projects'
import { Icon } from '@iconify/react'
const Home = () => {
  return (
    <div>
     

       
      <section className='home'>
        <div className='text'>
          <h4>Hello, my name is<br></br><span style={{ fontSize: '4rem', }}>Sujata</span></h4>
          <h2>and I'm a Frontend and React developer</h2>
          <div className='logo'>
            <a href='https://github.com/sujatakuma'><Icon icon="devicon:github" /></a>
            <a href='https://www.linkedin.com/in/sujata-832194259/'><Icon icon="eva:linkedin-fill" /></a>
            <a href='https://instagram.com/sujata030420?igshid=MzNlNGNkZWQ4Mg=='><Icon icon="skill-icons:instagram" /></a>
          </div>


        </div>
        <div className='home-img'>
          <img src='https://media.istockphoto.com/id/1434212363/photo/middle-eastern-woman-talking-on-smartphone-holding-paper-at-workplace.jpg?s=612x612&w=0&k=20&c=bqnG5duTqdi0lc-XiniDalktIg58TrdL3qqKX3LrhyI=' alt=''>

          </img>
        </div>



      </section>

    </div>

  )
}

export default Home
