import React, { useState, useEffect } from "react";
import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin, InfoWindow } from "@vis.gl/react-google-maps";
import { useLocation } from "react-router-dom";

interface LatLng {
  lat: number;
  lng: number;
}

interface Team {
  name: string, 
  codeInvite: string,
  qaCode: string,
  shareURL: string,
  poiId: string[],
  players: string[]
}

interface POI {
  id: string;
  name: string;
  lat: number;
  long: number;
  beschreibung: string;
  punkte: number;
}


const GameOverPage: React.FC = () => {
  const location = useLocation();
  let { dataGameInstance, playerID, teamID } = location.state || {}; 

  const playerId = playerID;
  const teamIds = teamID;



  return (<p style={{paddingTop:"20vh"}}>Not Implemented Yet</p>);
};


export default GameOverPage;
