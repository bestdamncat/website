import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons'; 

import bbImage from "../../img/buckbundy.gif";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Buck Bundy</h1>
      <h3>I may be just a dog, but even I know that money is like a bone buried in the backyard: hard to find and never enough to go around!</h3>

      <h5>CA: <a href="https://www.pump.fun/"></a></h5>
      <p>
        <a href="https://twitter.com/buckbundysol" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>	
			
        <a href="https://t.me/buckbundysol" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>

      </p>			
      <p>
        <img src={bbImage} />
      </p>
    </div>
  );
};

export default Home;
