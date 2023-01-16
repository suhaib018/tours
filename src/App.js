import React,{useEffect, useState} from "react";
import Tour from "./Tour";
import "./index"
function App() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);


  async function getResponse() {
    const response = await fetch('https://course-api.com/react-tours-project');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const dataApi = await response.json();
    setLoading(false)

    setData(dataApi)
  }

  const remove = (id) =>{
    const newTour =data.filter(item =>{
      return item.id !== id;
    })
    setData(newTour);
  }
  useEffect(() => {
    getResponse()
  },[])
  
  return (
    <div className="App">
        <div style={{textAlign:"center"}}>
          <h1>Our Tours</h1><span className="bottom-border"></span>
        </div>
        <div>
          {data.map((tour) => {
            return <Tour key={tour.id} {...tour} remove={remove}/>;
          })}
                {data.length === 0 && loading === false &&
                    <div style={{textAlign:"center"}}>
                      <h1>No Data</h1>
                      <button onClick={() => getResponse()}>Refresh</button>
                    </div>
                }
                {loading && <h1 style={{textAlign:"center"}}>Loading...</h1>}

        </div>
    </div>
  );
}

export default App;
