import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle,faTimes } from '@fortawesome/free-solid-svg-icons'
import ImgEar from '../images/ear 1.png'
const Body = () =>{
    const element = <FontAwesomeIcon icon={faPlayCircle} />
    const elementTwo = <FontAwesomeIcon icon={faTimes} />


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
        </div>
    )
}
export default Body