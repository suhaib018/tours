import React ,{useState}from 'react'
import "./index"



const Tour = ({id,name,info,image,price,remove}) => {
    const [showData,setShowData] = useState(false);

return (
    <div className='container'>
        <div  className='wrapper'>
            <img src={image} widt="400px"/>
            <div key={id} className="text-section">
                <div className="text-wrapper">
                        <h2 >{name}</h2>
                        <p style={{border:"1px solid #2374c9",padding:"3px",color:"#2374c9"}}>{price}$</p>
                </div>
                <div>
                    <p>{!showData ? `${info.substring(0,40)} ...`:info}
                    <button onClick={()=> setShowData(!showData)} className="show-more-btn">{showData ?"show less":"show more"}</button>
                    </p>
                </div>
                <button onClick={() => remove(id)} className="remove-btn">not interested</button>

            </div>
        </div>
    </div>
      );
}

export default Tour ;