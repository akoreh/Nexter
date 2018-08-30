import React from 'react'

import './Story.css';
import Wrapper from '../../hoc/Wrapper';


export default () => {
  return (
    <Wrapper>
        <div className="story__pictures">
            Story pictures
        </div>
        <div className="story__content">
            Story content
        </div>
    </Wrapper>
  )
}
