import React, { useState, useEffect } from 'react';
import Nav from './Elements/Nav';
import Header from './Elements/Header';
import Loading from './Elements/Loading';
import Connect from './Connect';
import project from './Elements/projectdata';
import Course from './Elements/Course';
import Achievement from './Elements/Achievement';
import Skills from './Elements/Skills';
import Intro from './Elements/Intro';
import PinnedProject from './PinnedProject';
import Contact from './Elements/Contact';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <div className="App">
      {loading ?<Loading/>: <> 
        <Header />
        <Intro/>
        <Contact/>
        <Connect />
      
      </>
      }
    </div>
  );
}
