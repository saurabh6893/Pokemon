import { Link, useParams } from "react-router-dom";
import AllPokemon from "../PokemonList";
import { Card, Col, Image, ListGroup, Row } from "react-bootstrap";
import Exp from "../Components/Exp";
import React from "react";

const PokemonScreen = () => {
    const { id: pokemonId } = useParams<{ id: string }>();
    const pokemon = AllPokemon.find((p) => p.id === Number(pokemonId));

    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Back
            </Link>
            <Row>
                <Col md={5}>
                    <Image src={pokemon?.image} alt={pokemon?.name} fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{pokemon?.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Exp value={pokemon?.baseExperience} />
                        </ListGroup.Item>


                    </ListGroup>
                </Col>
                <Card.Text as="h3">
                    {pokemon?.type.map((type: string, index: number) => (
                        <React.Fragment key={type}>
                            {index !== 0 && <span className="mx-1">|</span>}
                            <span>{type}</span>
                        </React.Fragment>
                    ))}
                </Card.Text>
            </Row>

        </>
    )
}

export default PokemonScreen;
