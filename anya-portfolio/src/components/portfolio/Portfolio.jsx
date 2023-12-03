import React from 'react'
import './portfolio.css'
import IMGA from '../../assests/Firbasechatapp.png'
import IMGB from '../../assests/ecommercestore.png'
import IMGC from '../../assests/lulusnativekitchen.png'
import IMGD from '../../assests/Google map api Distance and time calculator.png'
import IMGE from '../../assests/Proactive validation form.png'
import IMGF from '../../assests/Simplecalculator.png'
import IMGG from '../../assests/oldporfolio.png'

const data = [
  {
    id:1,
    image: IMGA,
    title: 'Firebase Chat App',
    demo: 'https://chuxs.github.io/Chatting Programm JavaScript/index.html'
  },
  {
    id:2,
    image: IMGB,
    title: 'Simple Shopping Site',
    demo: 'https://chuxs.github.io/ChuxLiveStore/index.html'
  },
  {
    id:3,
    image: IMGG,
    title: 'Previous Portfolio',
    demo: 'https://chuxs.github.io/'
  },
  {
    id:4,
    image: IMGC,
    title: 'Food Ordering Service',
    demo: 'http://lulusnativekitchen.com/'
  },
  {
    id:5,
    image: IMGD,
    title: 'Google Map API Distance and Time Calculator',
    demo: 'https://chuxs.github.io/JavaScript Google Map Api Project/index.html'
  },
  {
    id:6,
    image: IMGE,
    title: 'Proactive Validation Form',
    demo: 'https://chuxs.github.io/JavaScript Form Validation/index.html'
  },
  {
    id:7,
    image: IMGF,
    title: 'Simple Calculator',
    demo: 'https://chuxs.github.io/Calculator/index.html'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h4>{title}</h4>
                <div className="portfolio_item-cta"> 
                 <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'> 
                 Demo </a> 
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio