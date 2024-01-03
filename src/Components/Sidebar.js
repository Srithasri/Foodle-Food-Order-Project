import React,{useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../Assets/Css/style.css'
import {useNavigate} from 'react-router-dom'
import {Home,Menu,PenTool,Settings, User} from 'lucide-react'
const Sidebar=({Children})=>
{
    const navigate=useNavigate();
    const handleClick=()=>
    {
        navigate('/Home')
    }
   
    return(
        <>
        
        <div id="viewport">
 
  <div id="sidebar">
    <header>
      <a href="#">Dashboard</a>
    </header>
    <ul class="nav">
      
      <li>
        <a href="#">
          <i class="zmdi zmdi-link"></i> Profile
        </a>
      </li>
      <li>
        <a href="#">
          <i class="zmdi zmdi-widgets"></i>Carts
        </a>
      </li>
      
      <li>
        <a href="#">
          <i class="zmdi zmdi-info-outline"></i>Orders
        </a>
      </li>
     
      <li>
        <a href="#">
          <i class="zmdi zmdi-comment-more"></i> WishList
        </a>
      </li>
      <li>
        <a href="#">
          <i class="zmdi zmdi-comment-more"></i> Payment
        </a>
      </li>
      <li>
        <a href="#">
          <i class="zmdi zmdi-view-dashboard"></i> Settings
        </a>
      </li>
    </ul>
    <div>

        <button className='btncc-bt' onClick={handleClick}>
          <i class="zmdi zmdi-view-dashboard" ></i> LogOut
        </button>
    </div>
    
  </div>
 
  <div id="content">
  <div className="dhead">
            <h1> Menu</h1>
            
             </div>
            <div className="dgcont">

                <div class="dcard">
                    <img className="sizereduce" src="https://b.zmtcdn.com/data/pictures/2/20277422/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg?output-format=webp" alt="image" />
                    <h4>Sri Akshaya Hotel</h4>
                    <p>South Indian, Chinese, Beverages</p>
                    <h3>Singanallur, Coimbatore</h3>
                    
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce" src="https://b.zmtcdn.com/data/pictures/0/19882120/56ed24c2a43a10069e50784c6b4955ae_o2_featured_v2.jpg" alt="image" />
                    <h4>Biriyani Day</h4>
                    <p>Biryani, Chinese</p>
                    <h3>Lakshmi Mills, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/1/20945561/a8f867a81a9cced60856d785b90a500b_o2_featured_v2.jpg" alt="image"/>
                    <h4>Rocket Joes Pizza</h4>
                    <p>Pizza, Chinese, Fast Food, Wraps, Desserts, Shake</p>
                    <h3>Peelamedu, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont2">
                <div class="dcard">
                <img className="sizereduce"src="https://b.zmtcdn.com/data/dish_photos/fb7/48d82fd443c1a9296e529728d9e68fb7.jpg" alt="image"/>
                    
                    <h4>Junior Sri Biriyani</h4>
                    <p>Biryani, South Indian, North Indian, Chinese</p>
                    <h3>Coimbatore</h3>
                    <input type="submit" value="Order Now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/8/3000378/93f0ba995d6eddf1eede9592b02dcd9c.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="image"/>
                    <h4>Meat And Eat</h4>
                    <p>9Burger, Fast Food, Wraps, Beverages</p>
                    <h3>Ganapathy, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/2/3000632/54772719192680f5cf309e4d08318973_o2_featured_v2.jpg" alt="image"/>
                    <h4>Agarwal Sweet Palace</h4>
                    <p>2Mithai, Street Food, Fast Food</p>
                    <h3>ARS Puram, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont3">
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/1/18781271/1510b17021b38cecce7f9b5980f1b2e0_o2_featured_v2.jpg" alt="image"/>
                    <h4>Hotel Sri </h4>
                    <p>South Indian, Chinese, Shake, Sichuan</p>
                    <h3>Vadavalli,Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/dish_photos/573/e64c7ac6b8bbacb5c98b9779ca9ad573.jpg" alt="image"/>
                    <h4>Mr. Milkshakes</h4>
                    <p>Juices, Shake, Beverages, Fast Food, Desserts</p>
                    <h3>Town Hall, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/8/20930548/3941749cafade04f1f20f017c6cd49c7_o2_featured_v2.jpg" alt="image"/>
                    <h4>Shree Kulfi</h4>
                    <p>Ice Cream</p>
                    <h3>Vadavalli, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
            </div>
            <div className="dgcont4">
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/5/20217565/be7ff5f4fd3990627b35721ebe610b9f_o2_featured_v2.jpg" alt="image"/>
                    <h4>Gilly's Dine In</h4>
                    <p>Shawarma, Chinese, Shake</p>
                    <h3>Kavundampalayam, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/7/19190607/d41124aa1259bc56d85d21916f6dd634_o2_featured_v2.jpg" alt="image" />
                    <h4>Arab Tasty</h4>
                    <p>Burger, Street Food, Pizza, Desserts, Beverages</p>
                    <h3>ASaibaba Colony, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
                <div class="dcard">
                    <img className="sizereduce"src="https://b.zmtcdn.com/data/pictures/chains/2/3002542/73bc68502b9a37238e7fd2854a45a226_o2_featured_v2.jpg" alt="image"/>
                    <h4>Chetinaad</h4>
                    <p>Sichuan, Chinese, North Indian, Ice Cream</p>
                    <h3>ASaibaba Colony, Coimbatore</h3>
                    <input type="submit" value="Order now" className="dogbtn" />
                </div>
            </div>
  </div>
</div>

            
            </>
    )
}
export default Sidebar