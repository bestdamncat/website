import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faTelegram } from '@fortawesome/free-brands-svg-icons';
import rigoImage from "../../img/rigo-baby.png";

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">The Purr-fect Revolution</h1>
      <h3>Unleash Your Inner Crypto-Cat with the Best Damn Cat Token!</h3>

      <h5>CA: <a href="https://www.pump.fun/Gm8ZAUfqS1qr2PbXKceLhiTEzq9DzQmcfuWMX9MRqPS3">Gm8ZAUfqS1qr2PbXKceLhiTEzq9DzQmcfuWMX9MRqPS3</a></h5>
      <p>
        <a href="https://twitter.com/bestdamncat" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>	
			
        <a href="https://t.me/bestdamncat" style={{ fontFamily: 'Arial, sans-serif', color: '#0088cc', textDecoration: 'none' }}>
          <FontAwesomeIcon icon={faTelegram} style={{ fontSize: '1.2em', marginRight: '5px' }} />
        </a>

      </p>			
      <p>
        <img src={rigoImage} />
      </p>
    </div>
  );
};

export default Home;
