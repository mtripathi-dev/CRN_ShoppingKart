import React, {Component} from 'react';

class TopSlider extends React.Component{
    render(){
        return(
/* Slider */
<section id="slider"> <a className="scroll-down animate-move-down" href="#" > <span className="icon icon-arrow-down-5"></span> scroll to view content </a>
    <div className="tp-banner-container">
        <div className="tp-banner" >
            <ul>
                /* SLIDE */
                <li data-transition="curtain-2" data-slotamount="7" data-masterspeed="300"  data-saveperformance="off" >
                   /* MAIN IMAGE */
                    <img src="images/slider/slide2-bg.jpg"  alt="background"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                        /* LAYERS */
                        /* LAYER NR. 1 */
                        <div className="tp-caption fade rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="0"
                             data-speed="1000"
                             data-start="850"
                             data-easing="easeInOutQuint"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex:1}}><img src="images/slider/slide1-border.png" alt="" /> </div>

                        /* LAYER NR. 2 */
                        <div className="tp-caption sft rs-parallaxlevel-0"
                             data-x="center" data-hoffset="-360"
                             data-y="center" data-voffset="-175"
                             data-speed="900"
                             data-start="2500"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 3}}><img src="images/slider/slide1-text2.png" alt="" /> </div>
                        /* LAYER NR. 3 */
                        <div className="tp-caption sfb rs-parallaxlevel-0"
                             data-x="center" data-hoffset="360"
                             data-y="center" data-voffset="-175"
                             data-speed="900"
                             data-start="3000"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                 style={{zIndex: 4}}><img src="images/slider/slide1-text3.png" alt="" /> </div>
                        /* LAYER NR. 4 */
                        <div className="tp-caption sfr rs-parallaxlevel-0"
                             data-x="center" data-hoffset="-117"
                             data-y="center" data-voffset="0"
                             data-speed="600"
                             data-start="1200"
                             data-easing="easeInBack"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                 style={{zIndex: 5}}><img src="images/slider/slide1-1.png" alt="" /> </div>

                        /* LAYER NR. 5 */
                        <div className="tp-caption sfl rs-parallaxlevel-0"
                             data-x="center" data-hoffset="117"
                             data-y="center" data-voffset="0"
                             data-speed="600"
                             data-start="2000"
                             data-easing="easeInBack"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                 style={{zIndex: 6}}><img src="images/slider/slide1-2.png" alt="" /> </div>
                        /* LAYER NR. 6 */
                        <div className="tp-caption tp-fade rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="0"
                             data-speed="800"
                             data-start="2500"
                             data-easing="Expo.easeInOut"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                 style={{zIndex: 6}}><img src="images/slider/slide1-line.png" alt="" /> </div>

                        /* LAYER NR. 7 */
                        <div className="tp-caption randomrotate rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="100"
                             data-speed="900"
                             data-start="3500"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                 style={{zIndex: 7}}><img src="images/slider/slide1-text1.png" alt="" /> </div>
                </li>
                /* SLIDE */

                <li data-transition="curtain-2" data-slotamount="7" data-masterspeed="300"  data-saveperformance="off" >
                  /* MAIN IMAGE */
                    <img src="images/slider/slide2-bg.jpg"  alt="background"  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" />
                      /* LAYERS */
                        <div className="tp-caption fade rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="0"
                             data-speed="1000"
                             data-start="850"
                             data-easing="easeInOutQuint"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 1}}><img src="images/slider/slide2-border.png" alt="" /> </div>

                        <div className="tp-caption sft rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="-223"
                             data-speed="900"
                             data-start="1000"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 3}}><img src="images/slider/slide2-text2.png" alt="" /> </div>
                        <div className="tp-caption sfb rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="220"
                             data-speed="900"
                             data-start="1200"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 4}}><img src="images/slider/slide2-text3.png" alt="" /> </div>
                        <div className="tp-caption sft rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="-213"
                             data-speed="600"
                             data-start="2000"
                             data-easing="easeInBack"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 6}}><img src="images/slider/slide2-1.png" alt="" /> </div>

                        <div className="tp-caption sfb rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="115"
                             data-speed="600"
                             data-start="2500"
                             data-easing="easeInBack"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 6}}><img src="images/slider/slide2-2.png" alt="" /> </div>
                        <div className="tp-caption tp-fade rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="-47"
                             data-speed="800"
                             data-start="1600"
                             data-easing="Expo.easeInOut"
                             data-elementdelay="2"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 6}}><img src="images/slider/slide2-line.png" alt="" /> </div>

                        <div className="tp-caption randomrotate rs-parallaxlevel-0"
                             data-x="center" data-hoffset="0"
                             data-y="center" data-voffset="0"
                             data-speed="900"
                             data-start="3500"
                             data-easing="Back.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 7}}><img src="images/slider/slide2-text1.png" alt="" /> </div>

                        <div className="text1 tp-caption skewfromleftshort"
                             data-x="center" data-hoffset="-455"
                             data-y="center" data-voffset="-166"
                             data-speed="700"
                             data-start="4200"
                             data-easing="Power1.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                             style={{zIndex: 7}}>new<br />
                            fashion<br />
                            clothing </div>
                        <div className="text2 tp-caption skewfromrightshort"
                             data-x="center" data-hoffset="455"
                             data-y="center" data-voffset="166"
                             data-speed="700"
                             data-start="4200"
                             data-easing="Power1.easeInOut"
                             data-elementdelay="0.1"
                             data-endelementdelay="0.1"
                             data-endspeed="300"
                                     style={{zIndex: 8}}>FALL<br />
                            WINTER<br />
                            2015 </div>
                </li>
            </ul>
            </div>
    </div>
</section>
         );
     }
}

export default TopSlider;