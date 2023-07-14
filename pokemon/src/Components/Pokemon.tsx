import { Card } from "react-bootstrap"
import { PokemonProps } from "../Interfaces/Pokemon"

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {

    return (
        <Card className='my-3 p-3 rounded'>
            <a href={`/pokemon/${pokemon.id}`}>
                <Card.Img src={pokemon.image} variant="top"></Card.Img>
            </a>

            <Card.Body>
                <a href={`/pokemon/${pokemon.id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {pokemon.name}
                        </strong>
                    </Card.Title>
                </a>

                <Card.Text as="h3">

                    {
                        pokemon.type.map((i: string) => (
                            <h5>
                                <h3>{i}</h3>
                            </h5>
                        ))
                    }

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Pokemon

