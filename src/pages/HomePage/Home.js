import React from 'react';
import { Navbar, Footer } from "../../components";
import { InfoSection,InfoVideo } from "../../components";
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';

const lightBg = false;

const Home = () => {
    return (
      <>
        <Navbar lightBg={lightBg} />
        <InfoVideo {...homeObjOne} />
        <InfoSection {...homeObjThree} />
        <InfoSection {...homeObjTwo} />
        <InfoSection {...homeObjFour} />
        <Footer lightBg={lightBg}  />
      </>
    );
}

export default Home;