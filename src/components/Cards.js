import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div id="exhibitionSection" className='cards'>
      <h1>Exhibitions and Events</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='images/the-last-king.jpg'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Duis euismod dui eget volutpat ultrices. Duis consequat libero id eros porttitor, nec commodo urna varius.'
                />
                <CardItem
                src='images/david-with-the-head-of-goliath.jpg'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod dui eget volutpat ultrices.
                 Duis consequat libero id eros porttitor, nec commodo urna varius.'
                />
                <CardItem
                src='images/charles-baudelaire.jpg'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Duis euismod dui eget volutpat ultrices. Duis consequat libero id eros porttitor, nec commodo urna varius.'
                />
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
