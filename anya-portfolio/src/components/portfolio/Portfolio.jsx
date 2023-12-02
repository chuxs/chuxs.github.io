import React from 'react'
import './portfolio.css'
import IMGA from '../../assests/ecommercestore.png'
import IMGB from '../../assests/Firbasechatapp.png'
import IMGC from '../../assests/Google map api Distance and time calculator.png'
import IMGD from '../../assests/lulusnativekitchen.png'
import IMGE from '../../assests/Proactive validation form.png'
import IMGF from '../../assests/Simplecalculator.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGA} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGB} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGC} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGD} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGE} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMGF} alt="store" />
          </div>
          <h4>This is a Poject Title</h4>
          
          <div className="portfolio_item-cta"> 
          <a href="https://chuxs.github.io/ChuxLiveStore/index.html" className='btn btn-primary' rel="noreferrer" target='_blank'> 
          Demo </a> 
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio