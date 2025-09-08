import { forwardRef, useImperativeHandle } from "react";

const Calltoaction = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    callaction: () => {
      console.log("action called");
    },
  }));
  return <>{/* <button type="button">Load More</button> */}</>;
});

export default Calltoaction;
