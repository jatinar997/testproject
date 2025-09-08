import { Suspense, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useNumberplate } from "../hooks/listinghook";
import { listPayload } from "../model/models";
import config from "../config";
import { useNavigate } from "react-router-dom";
import Calltoaction from "./calltoAction";

const Listing = () => {
  const { mutate, data, isPending, isLoading, isError } = useNumberplate();
  const listingPyayload = useRef(new listPayload());
  const [platelistData, setplatelistData] = useState(null);
  const imgUrl = config.IMG_URL;
  const navigate = useNavigate();
  const forwardRef = useRef();

  useEffect(() => {
    addmoreData();
    console.log("hello from useffect")
  }, []);

  useLayoutEffect(() => {
  console.log("hello from uselayouteffect")
  },[])

  function addmoreData(page) {
    listingPyayload.current = {
      ...listingPyayload.current,
      ["pageNumber"]: page ? listingPyayload.current.pageNumber + page : 1,
    };
    mutate(listingPyayload.current);
  }

  useEffect(() => {
    if (data) {
      if (!platelistData) {
        setplatelistData((e) => data);
      } else {
        // setplatelistData((e) => [...platelistData, ...data]);
      }
    }
  }, [data]);

  if (!data && !isError && !platelistData) return <p> Loading... </p>;

  if (!data && isError) return <p> Something went wrong... </p>;

  function navigateToDetails(data) {
    // navigate({pathname:"/platedetails" })
    navigate("/platedetails", { state: data });
  }

  return (
    <>
      {platelistData ? (
        <div>
          {platelistData.map((item) => {
            return (
              <div key={item.id}>
                <p>Platecode : {item.plateCode}</p>
                <p>Platenumber : {item.plateNumber}</p>
                <img
                  onClick={() => navigateToDetails(item)}
                  src={imgUrl + item.imagePath}
                />
              </div>
            );
          })}
        </div>
      ) : null}

      <div>
        <Calltoaction ref={forwardRef} />
        <button
          type="button"
          onClick={() => {addmoreData(1); forwardRef.current.callaction()}}
          disabled={isPending}
        >
          Load More
        </button>
      </div>

      {isPending && <p> Loading... </p>}
    </>
  );
};

export default Listing;
