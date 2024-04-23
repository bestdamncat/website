import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.png";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">The Purr-fect Revolution</h1>
			<h3>Unleash Your Inner Crypto-Cat with the Best Damn Cat Token!</h3>
			<p>
			<a href="https://twitter.com/bestdamncat" style="font-family: Arial, sans-serif; color: #0088cc; text-decoration: none;">
					<i class="fab fa-twitter" style="font-size: 1.2em; margin-right: 5px;"></i>
			</a>				

			</p>
			<p>
				<img src={rigoImage} />
			</p>
		</div>
	);
};

export default Home;
