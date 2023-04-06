import { useState } from "react";
import { IUseHomeScreenController } from "./HomeScreen.props";
export const useHomeScreenController = (): IUseHomeScreenController => {

  const [isVisible, setVisible] = useState(false); 

 
  const [currentId, setCurrentId] = useState<string | null>(null);

  return {
    isVisible,
    setVisible,  
    currentId,
    setCurrentId,
  };
};
