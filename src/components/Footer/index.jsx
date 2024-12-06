import React from 'react'
import "./Footer.css"
import Logo from '../Logo'
import {footer} from '../../data'
import {Link} from 'react-scroll'

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="column">
            <Logo/>
            <form className="newsletter">
              <h3>Get Weekly Update</h3>
              <div className="control__container">
                <input type="email" placeholder='Enter your email Address' className="control" />
                <button className="btn" type='button'>Subscribe</button>
              </div>
            </form>
          </div>
          {
            footer.map((list,index) => (
              <div className="column" key={index}>
                <div className="routes__name">{list.name}</div>
                <div className="routes__container">
                  {
                    list.routes.map((route,i)=>(
                      <Link to={route.id} className="route__item" key={i}>
                        <p className="name">{route.name}</p>
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <h3>Copyright &copy; All right reserved -| 2024</h3>
          <p className="text_muted">Built with love by Kusemererwa Edson Founder Sontech Solutions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer