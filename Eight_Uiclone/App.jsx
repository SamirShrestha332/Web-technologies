import { useState } from "react";
import SvgIcon from "./assets/SvgIcon.jsx";
import SvgIcon1 from "./assets/SvgIcon1.jsx";
import VideoComponent from "./VideoComponent";
import VideoComponent1 from "./VideoComponent1.jsx";
import VideoComponent2 from "./VideoComponent2.jsx";
import CarouselComponent from "./CarouselComponent.jsx";



export default function App() {
  const [hoverEffect, setHoverEffect] = useState(false);

  function hoverFunction(e) {
    setHoverEffect(true);
  }

  function leaveFunction(e) {
    setHoverEffect(false);
  }

  const dropdownStyle = hoverEffect ? { display: "flex" } : { display: "none" };

  return (
    <>
      <div className="container">
        <div className="navbar">
          <nav>
            <div className="logo">
              <p>EIGHT</p>
            </div>
            <div className="navigation">
              <ul>
                <li>
                  <ion-icon name="headset-outline"></ion-icon>
                  <p>Home</p>
                </li>
                <li>
                  <p>Listen</p>
                </li>
                <li>
                  <p>For Creators</p>
                  <ion-icon
                    name="caret-down-outline"
                    className="dropdownIcon"
                    id="dropdownIcon"
                    onMouseOver={hoverFunction}
                    onMouseOut={leaveFunction}
                  ></ion-icon>
                </li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="getAppBtn">
              Get the App <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div
              className="dropdown"
              style={dropdownStyle}
              onMouseOver={hoverFunction}
              onMouseOut={leaveFunction}
            >
              <span className="dropdown_categories">Musician</span>
              <span className="dropdown_categories">Podcaster</span>
              <span className="dropdown_categories">Studio</span>
            </div>
          </nav>
        </div>
        <VideoComponent1 />
        <div className="headertitle">
          <h2>
            Experiences
            <span className="text-change">
              <span className="text">Stories</span>
              <SvgIcon />
            </span>
            Like Never Before
          </h2>
        </div>
        <div className="Categoriesection">
          <div className="image_gallery">
            <div className="cards_horror">
              <div className="cards_gradiant_horror">
                <h3>Horror</h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/shakchunni-horror.64060da4.png"
                alt="Horror-Category"
              />
            </div>
            <div className="cards_crime">
              <div className="cards_gradiant_crime">
                <h3>Crime & Thriller</h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/hand-crime-7-thriller.d9616f01.png"
                alt="Crime&Thriller-category"
              />
            </div>
            <div className="cards_romance">
              <div className="cards_gradiant_romance">
                <h3>Romance</h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/Faaslon-ka-Ishq-romance.1273bc31.png"
                alt="Romance-category"
              />
            </div>
            <div className="cards_comedy">
              <div className="cards_gradiant_comedy">
                <h3>Comedy</h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/joker-comedy.7d7d4704.png"
                alt="Comedy-categopry"
              />
            </div>
            <div className="cards_war">
              <div className="cards_gradiant_military">
                <h3>Military and War</h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/war-millitry.d4e530bf.png"
                alt="Military and war Category"
              />
            </div>
            <div className="cards_religious">
              <div className="cards_gradiant_religious">
                <h3>
                  Religion/ <b />
                  Spirituality
                </h3>
              </div>
              <img
                src="https://home.eight.network/_next/static/media/shiva-religion.9f66ff43.png"
                alt="Religious/Sprituality Category"
              />
            </div>
          </div>
        </div>
        <div className="story_swiper_banner_section">
          <div className="swiperbanner">
            <div className="banner">
              <img src="/assets/banner1.webp"  alt="" />
              <img src="/assets/banner2.webp"  alt="" />
              <img src="/assets/banner3.webp"  alt="" />
              <img src="/assets/banner4.webp"  alt="" />
              <img src="/assets/banner5.webp"  alt="" />
            </div>

            <div className="content">
              <h4>Top Shows</h4>
              <div className="aboutposter">
                <h3>Header</h3>
                <p className="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deleniti laboriosam sequi quod vitae adipisci, quidem commodi quasi fugit suscipit modi eligendi odio odit sunt ea aliquid expedita alias aliquam?</p>
              </div>
              <button className="ListenNowBtn">Listen now <ion-icon name="arrow-forward-outline"></ion-icon> </button>
            </div>
          </div>
        </div>


        <div className="illustrator_section">
          <VideoComponent />
          <div className="footer_illustrator">
            <div className="rated">
              <h4>4.1 Rated</h4>
              <p>On the Playstore</p>
            </div>
            <div className="audience">
              <h4>1 Million</h4>
              <p>Happy Listeners</p>
            </div>
            <div className="stories">
              <h4>10,000+</h4>
              <p>Stories</p>
            </div>
          </div>
        </div>
        <div className="podcast_section">
       
      <div className="mobilescreen">
      <CarouselComponent/>
        <div className="title"><h2>Title</h2></div>
        <div className="buttons">


          <span className="reverse">
          <ion-icon name="return-up-back-outline"></ion-icon>
          <p>10</p>
          </span>

         <span className="play"><ion-icon name="play-outline"></ion-icon></span>
         
          <span className="forward">
          <ion-icon name="return-up-forward-outline"></ion-icon>
            <p>10</p>
          </span>


        </div>
        <img src="https://home.eight.network/_next/static/media/mobile-layout-footer.920d83e4.png" alt="playimage" />
      </div>
        </div>
        <div className="Live_Section">
          <div className="liveBackground">
          <img src="/assets/Live.png" className="Live_Section_Image" alt="Live mobile phone" />
          </div>
        </div>
        <div className="gallerySection">
          <div className="gallery">
            <img src="https://home.eight.network/_next/static/media/battle-of-voices-banner.c1b1db33.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/how-to-banner.7761cc59.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/cricket-face-off-banner.cf5a17a6.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/eight-premiere-banner.c92cca12.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/high-way-banner.c3ac0cc6.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/battle-of-opinions-banner.fdc8e3e9.png" alt="" />
            <img src="https://home.eight.network/_next/static/media/house-of-talent-banner.7cd90ae1.png" alt="" />
          </div>
          <div className="getAppBtn">
              Get the App <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
        </div>

        <div className="Earning_section">
        <div className="Earning_section_heading">
        <h2>Be the Next Gen Creator And </h2> <span className="text-change1">
          <h2> Start Earning</h2>
           <SvgIcon1 />
          </span>
        </div>
        <div className="image_background">
        <img src="https://home.eight.network/_next/static/media/coins-1.233a9ce3.png"  className='coin1' alt="coin" />
       <img src="https://home.eight.network/_next/static/media/coins-2.603e3ff3.png"  className='coin2'  alt="coin" />
       <img src="https://home.eight.network/_next/static/media/creator-person-img.7bd08142.png" className="SmileMan" alt="SmileMan" />
       <img src="https://home.eight.network/_next/static/media/creator-bg-phone.879f3811.png" className="mobile" alt="mobile" />



        </div>
       
          
        </div>
        <div className="titlediv">
          <p>Let's create the Future of Audio together. Join our Creator Central Program today.</p>
          <button className="Know_more_button">Know More</button>
        </div>


    <div className="communityinfo">
      <h2>Community of 10,000+</h2>
      <p>Podcasters, Script  Writers,Voice Actors,Musicians and many many more </p>
    </div>

    <div className="app_Advertisement">
      <div className="text_container">
        <h1>India's Top Audio <br /> Entertainment App</h1>
        <div className="getAppBtn">
              Get the App <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
      </div>
      <div className="video_container">
      <VideoComponent2/>
      </div>
    </div>
    <footer>
      <div className="heading">
        
        <h2>Podcast. Stories . Live</h2>
        </div>
        <div className="footerbody">
       <div className="navigationList">
       <div className="leftcontent">
        <ul>
          <li>Home</li>
          <li>EigthStudio</li>
          <li>For Podcasters</li>
          <li>For Musicians</li>
          <li>Careers</li>
          <li>Contact Us</li>
          <li></li>

        </ul>
       </div>
       <div className="rightcontent">
        <p>Follow us on </p>
        <div className="icons">
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-linkedin"></ion-icon>
        <ion-icon name="logo-youtube"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>

        </div>
       </div>
       </div>
       <div className="leftovercontent">
       <div className="content_get_it_on_googleplay">
       <p>For Best Experience Download Eight App</p>
       <img src="/assets/image.png" alt="get to the app" />
       </div>
       <div className="qrcodesection">
        <img src="/assets/Qr_code.png" alt="Qr code" />
        <p>Scan & Download</p>
       </div>
       </div>
       </div>
       <div className="lastline">
        <p>Community Guidelines</p>
        <p>Privacy Policies</p>
        <p>Subscription Policy</p>
        <p>Term & Conditions</p>
        <p>Made with ❤️ in India</p>
       </div>

     
    </footer>
      </div>
    </>
  );
}
