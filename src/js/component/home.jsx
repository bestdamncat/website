import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'; 

import bbImage from "../../img/buckbundy.gif";

const Home = () => {
  return (
    <div className="container">
      <div className="text-center" style={{ width: '80%', margin: '0 auto' }}>

    <div className="text-center">
      <h1 className="text-center mt-5">Buck Bundy</h1>
      <h3>I may be just a dog, but even I know that money is like a bone buried in the backyard: hard to find and never enough to go around!</h3>

      <h5>CA: <a href="https://www.pump.fun/DtdSYdz5VGUyv2WohK2msc9GXSPULY7MTU9aYQ2C2J2e">DtdSYdz5VGUyv2WohK2msc9GXSPULY7MTU9aYQ2C2J2e</a></h5>
      <p>
        <a href="https://twitter.com/buckbundysol" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>	
			
        <a href="https://t.me/buckbundy" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>

      </p>			
      <p> 
        <img src={bbImage} style={{ width: '100%', height: 'auto' }} alt="Breaking Bad" />
  
      </p>
    </div>
      </div>
    </div>
  );
};

export default Home;
