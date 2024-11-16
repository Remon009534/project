import Header from './pages/Header.jsx'
import Footer from './pages/Footer.jsx'
import { useEffect, useState } from 'react';
import { motion } from "framer-motion"

function App() {
  window.onscroll = function() {myFunction()};

  function myFunction()
  {
    if(document.documentElement.scrollTop > 50)
    {
      document.querySelector('header').className = "test";
    }
    else
    {
      document.querySelector('header').className = "";
    }
  }
  return (
    <>
    <header>
      <div className='logo'>
        <h1>EduConnect</h1>
      </div>
      <nav>
        <li><a href='#about2'>About us</a></li>
        <li><a href='#feature'>Features</a></li>
      </nav>
      <div className='button'>
        <button id='btn'><a href='student'>Sign up</a></button>
        <button id='btn2'>Login</button>
      </div>
    </header>
    <section className='main'>
      <div id='title'>
        <h1>Welcome to EduConnect. Where Learning Meets Connection!</h1>
        <p>
        Whether you're looking for personalized tutoring, study tips, or a community of like-minded learners, EduConnect is here to support your educational journey. Connect with qualified tutors who are passionate about helping you succeed, and engage with peers who share your thirst for knowledge.
        </p>
        <div className='button2'>
          <button id='btn'>Start now</button>
        </div>
      </div>
      <div id='image'></div>
    </section>
    <section id='about2' className='about'>
      <div id='about'>
        <h1>About Us</h1>
        <p>We believe that education is a journey best traveled together. That's why we are created a dynamic, supportive platform that connects students and tutors in a way that goes beyond traditional classroom walls. Whether you're looking to learn a new skill, get help with your studies, or find a tutor who truly understands your learning style, we are here to make that process seamless, engaging, and personalized.</p>
        <button id='btn2'>Learn more</button>
      </div>
      <div id='image2'></div>
    </section>
    <section id='feature' className='feature'>
      <h1>Key Features</h1>
      <div className='container'>
        <div id='item'>
          <h2>Community Support & Peer Learning</h2>
          <p>Learning doesnt happen in a vacuum. With our vibrant community features, you can connect with fellow learners, share study tips, and join discussions in forums or study groups. Whether you are looking for advice or motivation, you’ll find a supportive network to help you stay on track and achieve your goals.</p>
        </div>
        <div id='item'>
          <h2>Ratings & Reviews</h2>
          <p>Transparency is key. After every tutoring session, both students and tutors can leave ratings and reviews. This helps you make informed decisions when choosing a tutor and ensures that every tutor is providing high-quality support. Your feedback also helps us continuously improve our platform to meet your needs.</p>
        </div>
        <div id='item'>
          <h2>Mobile-Friendly Design</h2>
          <p>Take your learning on the go! Our platform is designed to work seamlessly on both desktop and mobile devices. You can book sessions, access your learning materials, and connect with your tutor from anywhere, at any time.</p>
        </div>
        <div id='item'>
          <h2>Personalize Tutor Matching</h2>
          <p>We believe that the right tutor can make all the difference in a learner’s journey. Our advanced matching system pairs you with tutors who are not only experts in their subjects but also align with your preferred learning style. Whether you need one-on-one help with homework, project guidance, or exam prep, we connect you with the tutor who can best support your goals.</p>
        </div>
        <div id='item'>
          <h2>Flexible Scheduling</h2>
          <p>We know that life can get busy, and that’s why we make it easy to book tutoring sessions on your own schedule. Whether you need a quick 30-minute session or an hour-long deep dive, you can choose the time and date that works best for you and your tutor. Need to reschedule? Its simple to adjust your appointments with just a few clicks.</p>
        </div>
        <div id='item'>
          <h2>Tutor Certification & Background Check</h2>
          <p>We ensure that all tutors on our platform are highly qualified and meet our rigorous standards. Each tutor undergoes a certification process and background check to verify their expertise and trustworthiness. This gives students peace of mind, knowing they’re working with knowledgeable, reliable professionals.</p>
        </div>
      </div>
    </section>
    <footer>
      <h2>EduConnect</h2>
      <ul>
        <li>INSTAGRAM</li>
        <li>TWITTER</li>
        <li>FACEBOOK</li>
      </ul>
      <p>&copy; EduConnect 2024</p>
    </footer>
    </>
  )
}

export default App;
