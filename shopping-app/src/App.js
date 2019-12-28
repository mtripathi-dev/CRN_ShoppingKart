import React from 'react';
import MyNav from './Nav';
import MyHeader from './Header';
import TopSlider from './Slider';
import MyLogin from './Login';
import MyFooter from './Footer';

function HomePage() {
  return (
    <div className="App">
		<MyNav/>
		<div id="outer">
			  <div id="outer-canvas">
				  <MyHeader/>
				  <MyLogin/>
				  <MyFooter/>
			  </div>
		</div>
    </div>
  );
}

export default HomePage;
