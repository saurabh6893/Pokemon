import { Col, Row } from "react-bootstrap";
import Pokemon from "../Components/Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { PokemonInterface } from "../Interfaces/Pokemon"; // Replace with the correct path to your Pokemon interface file

const Homescreen = () => {
    const [AllPokemon, setAllPokemon] = useState<PokemonInterface[]>([]);

    useEffect(() => {
        const fetchPokemon = () => {
            axios
                .get<PokemonInterface[]>("http://localhost:5000/api/pokemon")
                .then((response) => {
                    const data = response.data;
                    setAllPokemon(data);
                })
                .catch((error) => {
                    console.error("Error fetching Pokemon:", error);
                });
        };



        fetchPokemon()
    }, []);

    return (
        <>
            <h1> Pokemon</h1>
            <Row>
                {AllPokemon.map((pokemon) => (
                    <Col key={pokemon.id} sm={12} md={6} lg={4} xl={3}>
                        <Pokemon pokemon={pokemon} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Homescreen;
