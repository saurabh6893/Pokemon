import { useParams } from "react-router-dom";
import { PokemonInterface } from "../Interfaces/Pokemon";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spinner } from "react-bootstrap";

const PokemonScreen = () => {
  const { id } = useParams<{ id: string }>();
  const productId: string = id || "";

  const [aPokemon, setaPokemon] = useState<PokemonInterface | null>(null);

  useEffect(() => {
    const fetchPokemon = () => {
      axios.get<PokemonInterface>(`http://localhost:5000/api/pokemon/${productId}`)
        .then((response) => {
          const { data } = response;
          setaPokemon(data);
        })
        .catch((error) => {
          console.error("Error fetching Pokemon:", error);
        });
    };

    fetchPokemon();
  }, [productId]);

  // If the data is still being fetched, display a loading spinner
  if (!aPokemon) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <img src={aPokemon.image} alt={aPokemon.name} className="card-img-top" />
            <div className="card-body">
              <h1 className="card-title">{aPokemon.name}</h1>
              <p className="card-text">Type: {aPokemon.type.join(", ")}</p>
              <p className="card-text">Height: {aPokemon.height} m</p>
              <p className="card-text">Weight: {aPokemon.weight} kg</p>
              <p className="card-text">Base Experience: {aPokemon.baseExperience}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonScreen;
