import React from "react";

const useIsMounted = () => {
  const isMounted = React.useRef(false);
  return isMounted.current;
};

export default useIsMounted;
