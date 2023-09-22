import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked:
        !this.state.clicked
    })
  }
  render() {

    return (

      <div >
        <header className='header'>
          <div className='logo'>
            <h3 style={{ color: 'black', marginLeft:'0.10px'  }}>Por<span style={{ color: 'orange' }}>tf</span>olio</h3>
          </div>

          <div className='menu-icon'>

          </div>

          <nav id='navbar' className={this.state.clicked ? '#navbar active' : '#navbar'}  >
            <Link className='menu' id='active' to='/'>Home</Link>
            <Link className='menu' to='/about'>About </Link>
            <Link className='menu' to='/skills'>Skills</Link>
           
            <Link className='menu' to='/project'>Projects</Link>

          </nav>
          <div id='mobile' onClick={this.handleClick}>
            <i id='bar'
              className=
              {this.state.clicked ? 'fas fa-times' :
                'fas fa-bars'}>

            </i>

          </div>
        </header>

      </div>

    )
  }
}

export default Navbar