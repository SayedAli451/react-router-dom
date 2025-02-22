import { useParams } from 'react-router-dom';
const PokemonDetails = (props) => {
    const { pokemonId } = useParams();
    const singlePokemon = props.pokemon.find((poke) => poke._id === Number(pokemonId));
    console.log('Pokemon Object:', singlePokemon)
    console.log(props); // Always verify that any props are being passed correctly!
    return (
        <>
            <h2>{singlePokemon.name}</h2>
            <dl>
                <dt>Weight : {singlePokemon.weight}</dt>
                <dt>Height: {singlePokemon.height}</dt>

            </dl>
        </>
    );
};

export default PokemonDetails;