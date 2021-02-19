import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components"


function Baker({ baker, onAdded, onRemoved, currentUser, favs }) {
    const { id, name, location, contact, profile_image, expertise } = baker;
    
    // console.log(favs);

    function handleClick(e){
        if (e.target.innerText === "Remove Favorite"){
            onRemoved(baker)
        } else {
            onAdded(baker)
        }  
    }

    return (
        <Card>
            <h3>{name}</h3>
            <img src={profile_image} alt={name} style={{ height: 220, width:220 }} />
            <br></br>
            <LinkStyle>
            <Link style={{ textDecoration:"none" }} to={`/bakers/${id}`}>View Sample Pastries </Link>
            </LinkStyle>
            <p> Expertise: {expertise}</p>
            <p> Location: {location}</p>
            <a style={{ marginTop:'2px' }} > Contact: {contact}</a>
            <br></br>
            {currentUser ?
                <button onClick={handleClick}>{favs.find(f=>f.baker.id === id) ? "Remove Favorite" : "Add to My Favorites"}</button>
                : null
            }
        </Card>
    )
}


export default Baker


const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 4%;
  margin-top: 10px;
  margin-buttom: 0px;
  padding: 5px;
  border: 1px solid #df69c6;
  border-radius: 6px;
 

  :hover {
      transform: scale(1.05);
      box-shadow: 2px 5px trasparent;
  }
`;
const LinkStyle = styled.div`
    background-color: #8a6083;
    background-color: #fceefc;
    border: 1px solid white;
    padding: 20px;
    border-radius: 16px; 
`;