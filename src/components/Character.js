// Write your Character component here
import React from 'react';
import styled from 'styled-components';



export default function Character(props) {

    const characterTraits = props.props;

    return (
        <Div>
        {characterTraits.map(traits => {
            return (
                <Info>
                    <h2>{traits.name}</h2>
                    <p>Gender: {traits.gender}</p>
                    <p>Height: {traits.height}</p>
                    <p>Mass: {traits.mass}</p>
                    <p>BirthYear: {traits.birth_year}</p>
                    <p>Eye Color: {traits.eye_color}</p>
                    <p>Hair Color: {traits.hair_color}</p>
                    <p>Skin Color: {traits.skin_color}</p>
                </Info>
            )
        })}
        </Div>
    )

}


const Div = styled.div`
    width: 100%;
`

const Info = styled.div`
    font-size: 30px;
    font-weight: 'bold';
`
