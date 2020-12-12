import React, {useEffect, useState} from 'react';
import './App.scss';
import Header from "../../components/Header/header";
import SectionOne from "../../components/Sections/One/section-one";
import SectionTwo from "../../components/Sections/Two/section-two";
import SectionThree from "../../components/Sections/Three/section-three";
import SectionFour from "../../components/Sections/Four/section-four";
import SectionFive from "../../components/Sections/Five/section-five";
import SectionSix from "../../components/Sections/Six/section-six";
import Footer from "../../components/Footer/footer";

const useScrollEvent = () => {
    const [classes, setClasses] = useState({home: 'active', events: ''});
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const height = window.innerHeight;
            const width = window.innerWidth;

            if (scrollY < height) {
                setClasses({home: 'active', events: ''});
            } else if (scrollY > 1.8 * height && scrollY < 5.5 * height) {
                setClasses({home: '', events: 'active'});
            } else {
                setClasses({home: '', events: ''});
            }
        })
    }, []);

    return classes;
};

function App() {
    const {home: homeClass, events: eventsClass} = useScrollEvent();
  return (
    <div className="App flex flex-column">
        <div className="header-wrap" id="home">
            <Header homeClass={homeClass} eventsClass={eventsClass} />
        </div>
        <SectionOne />
        <SectionTwo />

        <div className="events-wrap" id="events">
            <SectionThree />
        </div>
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
