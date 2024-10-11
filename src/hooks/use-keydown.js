import React from "react";

function useKeyDown(key, callback){
    
  React.useEffect(() => {
    function handleEscapeKey(event) {
      //console.log(event);
      if(event.key === key){
        callback(true);
      } 
    }
    window.addEventListener('keydown', handleEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    }
  }, [key, callback]);

}

export default useKeyDown;