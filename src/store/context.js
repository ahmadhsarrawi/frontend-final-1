import React, { useState } from "react";



export const context =React.createContext({
    
    

});

const contextData = {
    
    
}


const ContextProvider = (props) => {
  return (
      <context.Provider value={contextData}>
          {props.children}
    </context.Provider>
  )
}

export default ContextProvider;


