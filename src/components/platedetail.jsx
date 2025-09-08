import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Platenumberdetail = () => {
    const params = useLocation();  

    useEffect(() => {
    },[params])

    return(
        <>
          <h1> Plate Details</h1>
        </>
    )
}

export default Platenumberdetail;

