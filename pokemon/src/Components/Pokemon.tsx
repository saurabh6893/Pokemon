import { Card } from "react-bootstrap"
import { PokemonProps } from "../Interfaces/Pokemon"
import { Link } from "react-router-dom"
import Exp from "./Exp"

const Pokemon: React.FC<PokemonProps> = ({ pokemon }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/pokemon/${pokemon.id}`}>
                <Card.Img src={pokemon.image} variant="top" width={100} />
            </Link>

            <Card.Body>
                <Link to={`/pokemon/${pokemon.id}`}>
                    <Card.Title as='div'>
                        <strong>
                            {pokemon.name}
                        </strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h3">

                    {
                        pokemon.type.map((i: string) => (
                            <h5>
                                <h3>{i}</h3>
                            </h5>
                        ))
                    }

                </Card.Text>


                <Card.Text as='div'>
                    <Exp value={pokemon.baseExperience} />
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Pokemon

