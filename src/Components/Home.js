import { Link } from 'react-router-dom'
import { CupSoda,Utensils,Citrus,FishIcon,LucideDrumstick,Beef,Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
const Home = () => {
  return (
    <>

    <div class="body3">
      
      <div className="Home-food" id="home1">
        <div className="food">
          <h1 className="main-ti" id="hom">FooDle</h1>
          <p>Enjoy Your <span className="sp">favourite</span> Food !!</p>
          
       <div class="InputContainer">
  <input type="text" name="text" class="inputse" id="inputse" placeholder="Order..Eat..Repeat !!"/>
  
  <label for="input" class="labelforsearch">
<svg viewBox="0 0 512 512" class="searchIcon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
</label>
<div class="border"></div>

<button class="micButton"><svg viewBox="0 0 384 512" class="micIcon"><path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"></path></svg>
</button>
</div>
      </div> 
        </div>
         </div>

         <div className="cardy">
         <div class="container-card ">

<div class="grid-5 up">
  <div class="card card-elevation color-pink">
    <div class="">
      <img class="img-car" src="https://b.zmtcdn.com/data/dish_photos/a32/4ed3ae0474e59b5e96d9c9bce3ea8a32.jpg" alt="foodimage1"/>
      <h1>Indian cuisine</h1>
      <button class="color-pink btncc">Explore</button>
    </div>
  </div>
</div>
<div class="grid-5 up">
  <div class="card card-elevation">
    <div class="">
      <img class="img-car" src="https://cf0316.s3.amazonaws.com/cookificom/menu/22/95dbaf.jpg" alt="not"/>
      <h1>Continental</h1>
      <button class="color-pink btncc">Explore</button>
    </div>
  </div>
</div>
<div class="grid-5 up">
  <div class="card card-elevation">
    <div class="">
      <img class="img-car" src="https://img.freepik.com/premium-photo/asian-noodles-with-prawns-vegetables-served-bowl-dark-background_1220-5659.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702944000&semt=ais" alt="not"/>
      <h1>Chinese cuisine</h1>
      <button class="color-pink btncc">Explore</button>
    </div>
  </div>
</div>
</div>
</div>
 <div className='Vishmi'>
 <section id="about">
       <div>
       <h2 class="title-text">Food Items</h2>
    </div>
    <div class="about-center">
       
        <article class="about">
            <div class="about-text">
                <h2 class="about-subtitle"><CupSoda/> Drinks</h2>
                <p class="about-info">Making memories, one drink at a time.Sip, smile, repeat.!</p>
            </div>
        </article>
      
        <article class="about">
            <div class="about-text">
                <h2 class="about-subtitle"><Utensils/>  Healthy Food</h2>
                <p class="about-info">It is health that is real wealth and not pieces of gold and silver!</p>
            </div>
        </article>
        
        <article class="about">
          
            <div class="about-text">
                <h2 class="about-subtitle"><Citrus/>  Organic Food</h2>
                <p class="about-info">Wanna be healthy then order Organic Food!</p>
            </div>
        </article>
       
        <article class="about">
            {/* <div class="about-icon"><i class="fas fa-drumstick-bite"></i></div> */}
            <div class="about-text">
                <h2 class="about-subtitle"><LucideDrumstick/>  White Meat</h2>
                <p class="about-info">All the white meat is gone. There's nothin' but..!</p>
            </div>
        </article>
        
        <article class="about">
            <div class="about-text">
                <h2 class="about-subtitle"><FishIcon/>  Sea Food</h2>
                <p class="about-info">Seafood is one of the last wild foods that we eat taste regularly.!</p>
            </div>
        </article>
    
        <article class="about">
            {/* <div class="about-icon"><i class="fas fa-pepper-hot "></i></div> */}
            <div class="about-text">
                <h2 class="about-subtitle"><Beef/>  Hot & Spicy</h2>
                <p class="about-info">indulging in flavors that make life delicious!</p>
            </div>
        </article>
      
    </div>   
   </section>
 </div>

 <div className='mitha'>

          <div class="containerx">
            <div class="row">
              <div class="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <Link to="#">about us</Link>
                  </li>
                  <li>
                    <Link to="#">our services</Link>
                  </li>
                  <li>
                    <Link to="#">privacy policy</Link>
                  </li>
                  <li>
                    <Link to="#">affiliate program</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <Link to="#">FAQ</Link>
                  </li>
                  <li>
                    <Link to="#">Apps</Link>
                  </li>
                  
                  <li>
                    <Link to="#">orders</Link>
                  </li>
                  <li>
                    <Link to="#">payment</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>Food Items</h4>
                <ul>
                  <li>
                    <Link to="#">Drinks</Link>
                  </li>
                  <li>
                    <Link to="#">Healthy Food</Link>
                  </li>
                  <li>
                    <Link to="#">Organic Food</Link>
                  </li>
                  <li>
                    <Link to="#">White Meat</Link>
                  </li>
                  <li>
                    <Link to="#">Sea Food</Link>
                  </li>
                </ul>
              </div>
              <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                  <Link to="/">
                    <Facebook size={24} />
                  </Link>
                  <Link to="/">
                    <Twitter size={24} />
                  </Link>
                  <Link to="/">
                    <Instagram size={24} />
                  </Link>
                  <Link to="/">
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
       

 </div>

    
    
    
    </>
  )
}
export default Home;