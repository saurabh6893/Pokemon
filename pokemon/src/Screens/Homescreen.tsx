import { Col, Row } from "react-bootstrap"
import AllPokemon from "../PokemonList"
import Pokemon from "../Components/Pokemon"


const Homescreen = () => {
    return (
        <>
            <h1> Pokemon</h1>
            <Row>
                {
                    AllPokemon.map((pokemon) => (
                        <Col sm={12} md={6} lg={4} xl={3}>
                            <Pokemon pokemon={pokemon} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default Homescreen