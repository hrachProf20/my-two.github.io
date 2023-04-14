import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle,faTimes } from '@fortawesome/free-solid-svg-icons'
import ImgEar from '../images/ear 1.png'
import imgSvg from '../images/data_analytics_icon (1).svg'
import imgSvgTwo from '../images/Employer_records.png'
import imgSvgThree from '../images/phone_icon.png'
import imgSvgFor from '../images/workflow_icon.png'
import imgSvgFive from '../images/reporting_icon.png'
import svgSix from '../images/svg1.png'
import imgSeven from '../images/timetraking_icon.png'








const Body = () =>{



    return(
        <div>
            <div className='div-body'> 
               <div className='div-bac'>
                   <h1>Software</h1>
                   <h3><FontAwesomeIcon icon={faPlayCircle} className='icon-play'/>Wath Video</h3>
               </div>

             <div className='div-register'>
             <div className='icon-times'>
             <FontAwesomeIcon icon={faTimes} className='icon-faTimes'/>
             </div>
             
               <h1>Owerview</h1>

                <h2>You`ll only hear from
                  us when it matters</h2>
                  <div className="div-ear">
                     <img src={ImgEar} alt="" />
                  </div>
                 

             </div>
            </div>

            <div className="div-background">
                
    
                
                <div className="div-macbook">
         
                    <div className="div-icon-one">
                        <div className="div-icon-two">
                            <div className="div-icon-three">
                                <div className="div-icon-for">
                                    <img src={imgSvg} alt="" className='img-svg'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h1>people data &</h1>
                    <p>analytics</p>
                    

                    <div className="div-ic-five-cloune">
                        <div className="div-ic-six-cloune">
                            <div className="div-ic-seven-cloune">
                                <div className="div-ic-eit-cloune">
                                    <img src={imgSvg} alt="" className='img-svg'/>
                                </div>
                            </div>
                        </div>
                        <h1>hiring</h1>
                    </div>   


                    <div className="div-icon-five-cloune">
                        <div className="div-icon-six-cloune">
                            <div className="div-icon-seven-cloune">
                                <div className="div-icon-eit-cloune">
                                    <img src={imgSvg} alt="" className='img-svg'/>
                                </div>
                            </div>
                        </div>
                        <h1>culture</h1>
                    </div>                 
                </div>

                

              
                <div className="div-icon-five">
                        <div className="div-icon-six">
                            <div className="div-icon-seven">
                                <div className="div-icon-eit">
                                    <img src={imgSvg} alt="" className='img-svg'/>
                                </div>
                            </div>
                        </div>
                        <h1>Compensation</h1>
                    </div>

              
                    <div className="div-ic-one">
                        <div className="div-ic-two">
                            <div className="div-ic-three">
                                <div className="div-ic-for">
                                    <img src={imgSvg} alt="" className='img-svg'/>
                                </div>
                            </div>
                        </div>
                        <h1>ONBOARDING</h1>
                    </div>

                    
            </div>


            <div className='people-data'>
           <div className="people-Data-Div">
           <div className='data-div'>
                <h1 className='data-h1'>people data &</h1>
                <p className='data-p'>analytics</p>
                <div  className='data-lorem'>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nisi fuga saepe maiores ipsa error debitis distinctio nam velit neque!
                </p>
                </div>

                <div className="data-icon">
                    <div>
                       <img src={imgSvgTwo} alt="" />
                       <p>EMPLOYEE RECORDS</p>
                       
                    </div>

                    <div>
                       <img src={imgSvgThree} alt="" />
                       <p>EMPLOYEE RECORDS</p>
                    </div>

                    <div>
                       <img src={imgSvgFor} alt="" />
                       <p>EMPLOYEE RECORDS</p>
                    </div>

                    <div>
                       <img src={imgSvgFive} alt="" />
                       <p>EMPLOYEE RECORDS</p>
                    </div>
                   
                </div>

           
               </div>

               <div className='people-img'>
                  
                  </div>
           </div>


           <div className="div-head-onb">
                <div className="div-onboarding">
                   <div className='div-img-svg'>
                   <img src={svgSix} alt="" />
                   </div>
                   <div className="onboarding-img"></div>
               </div>
               <div className="text-onb">
                  <h1>onboarding</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque velit illum ducimus eveniet! Nisi reprehenderit iste, quasi repellat deserunt est.</p>
                  <div className="p">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate asperiores doloribus odio tempora doloremque, sed veritatis recusandae illo illum quod!</p>

                  </div>
                  
                <div className="div">
                    <img src={imgSeven} alt="" />
                    <p>tracking</p>
                  </div>
               </div>
           </div>






            </div>


        
            
        </div>
    )
}
export default Body