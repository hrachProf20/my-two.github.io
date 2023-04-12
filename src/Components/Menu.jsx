import MenuLi from '../Components/MenuLi.jsx'
import ImgLogo from '../images/LOGO2.png'
import ImgOffice from '../images/office.jpg'


const Menu = () =>{
    return(
        <div>
            <div className='div-head'> 
            <div className="div-images">
                <img src={ImgLogo} alt="" />
            </div>
            <div className='div-menu'>
            <ul>
                 <MenuLi name='our SOftware'/>
                 <MenuLi name='Why Zowo'/>
                 <MenuLi name='Resources' className='red'/>
                 <MenuLi name='Pricing'/>  
              </ul>
            </div>


              <div className='div-btn'>
                <button>
                    <a href="#">Try It</a>
                </button>
              </div>
            </div>
            



        </div>
    )
}

export default Menu