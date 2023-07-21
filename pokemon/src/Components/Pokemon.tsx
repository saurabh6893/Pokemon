import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Exp from "./Exp";
import { PokemonProps } from "../Interfaces/Pokemon";

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/pokemon/${pokemon.id}`}>
                <Card.Img src={pokemon.image} variant="top" width={100} />
            </Link>

            <Card.Body>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <Card.Title as='div'>
                        <strong>{pokemon.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    {pokemon.type.map((type: string, index: number) => (
                        <h5 key={index}>{type}</h5>
                    ))}
                </Card.Text>

                <Card.Text as='div'>
                    <Exp value={pokemon.baseExperience} />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Pokemon;
