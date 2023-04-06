import { LogBox, StatusBar } from "react-native"; 
import { MyTabs } from "./routes/Routes";
import React from "react";

  LogBox.ignoreAllLogs(false)

export default function App() {
  return (
    <>
      <StatusBar
        
        barStyle={"dark-content"}
        backgroundColor={"transparent"}
        translucent
      />
      <MyTabs />
    </>
  );
}
