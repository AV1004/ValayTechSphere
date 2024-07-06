import React from "react";
import { WallFloor } from "./WallFloor";
import { PCSetup } from "./PCSetup";
import { Shelf } from "./Shelf";
import { Rug } from "./Rug";
import { FlowerPort } from "./FlowerPort";
import { Frame1 } from "./Frame1";
import { Frame2 } from "./Frame2";
import { Globe } from "./Globe";
import { Window } from "./Window";

export const Office = ({ section }) => {
  return (
    <group>
      <WallFloor />
      <Window />
      <FlowerPort section={section} />
      {/* <Frame1 />
      <Frame2 /> */}
      <Shelf section={section} />
      <Rug section={section} />
      <Globe section={section} />
      <PCSetup section={section} />
    </group>
  );
};
// Shelf(Astronout , LavaLamp) Done! ,Rug Done! , PCSetup(IMac , Globe Done! , Chair) , FlowerPort Done!
