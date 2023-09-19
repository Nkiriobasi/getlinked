"use client";

import React, { Dispatch, createContext, SetStateAction, useState } from "react";

interface VisibilityContextType {
  mobileIsActive: boolean
  setMobileIsActive: Dispatch<SetStateAction<boolean>>
}

export const VisibilityContext = createContext<VisibilityContextType>({
  mobileIsActive: false,
  setMobileIsActive: () => {}
})


export const VisibilityContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [mobileIsActive, setMobileIsActive] = useState<boolean>(false);
  
  return (
    <VisibilityContext.Provider 
      value={{ 
        mobileIsActive, 
        setMobileIsActive 
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};