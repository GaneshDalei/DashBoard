import React,{ useState, useEffect } from 'react';

function DashBoardComponent() {
    const [{counter, setcounter},{data, setData}] = useState([{}]);
    function incrementCounter(){
        setcounter(counter + 22)
    }

    useEffect(()=>{
        alert();
    })
     

    return (
        <div>
            <div className="dashBoard">
                <div className="NAme">NAme</div>
                <div className="NAme2">NAme2</div>
            </div>
        </div>
    )
}
export default DashBoardComponent;