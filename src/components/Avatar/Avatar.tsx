import React from "react";
import {
  Container, 
  Name,
  AvatarImage, 
} from "./Avatar.styles"; 
import { AvatarProps } from "@components/Avatar/types";
export default function Avatar({avatarUrl, userName, lastName}: AvatarProps) {
  return (
    <Container >
        <AvatarImage
          source={{
            uri:avatarUrl,
          }}
        />
        <Name>
          {userName} {lastName}
        </Name>
    </Container>
  );
}
