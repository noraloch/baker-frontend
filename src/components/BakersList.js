import React, { useState } from "react";
import Baker from "./Baker"
import Search from "./Search"
import NewBakerForm from "./NewBakerForm";
import styled from "styled-components";


function BakersList({ setShowForm, bakersState, bakerSearch, setBakerSearch, handleAddBaker, showForm, handleFormClick, onAdded, onRemoved, currentUser, favs }) {

  const bakersDisplay = bakersState.map((baker) => {
    return <Baker key={baker.id} baker={baker} onAdded={onAdded} onRemoved={onRemoved} currentUser={currentUser} favs={favs} />
  })

  return (
    <>
      <Inliner>
        <S>
        <Search bakerSearch={bakerSearch} setBakerSearch={setBakerSearch} />
        </S>
        {currentUser ?
        <New>
          {showForm ? <button onClick={handleFormClick}>Hide Form</button> :
            <button onClick={handleFormClick}>New Baker form</button>}
          {showForm ? <NewBakerForm setShowForm={setShowForm} handleAddBaker={handleAddBaker} /> : null}
        </New>
        : null }
      </Inliner>
      <Wrapper>
        <br></br>
        {bakersDisplay}
      </Wrapper>
    </>
  )

}

const Wrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Inliner = styled.div`
  display: flex;
  margin: 20px;

`;

const S = styled.div`
  display:flex;
  margin-right: 300px;
  margin-left: 45px;
  padding: none;  
  border: 1px solid white;
  border-radius: 10px;
`;
const New = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid white;
  border-radius: 10px;
  display:flex;
`;



export default BakersList;
