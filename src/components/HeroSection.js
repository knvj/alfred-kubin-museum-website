import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted/>
        <h1>Welcome to The Ket</h1>
        <div className='hero-btns'>
            <Link to="/plan">
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            >
                Plan your visit
            </Button>
            </Link>
        </div>
    </div>
  );
}

export default HeroSection;
