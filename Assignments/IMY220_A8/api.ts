interface PokemonData 
{
    pokemonId: number;
    pokemonName: string;
    pokemonHeight: number;
    pokemonWeight: number;
    pokemonTypes: {typeInfo: {typeName: string, typeUrl: string}}[];
}

export async function retrievePokemonData(pokemonName: string): Promise<PokemonData | string> 
{
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName.trim().toLowerCase()}`;

    try 
    {
        const response = await fetch(apiUrl);

        if (!response.ok) 
        {
            if (response.status === 404) 
            {
                return `Sorry, ${pokemonName} is not available in the database.`;
            }

            throw new Error(`Request failed with status: ${response.status}`);
        }

        const pokemonDetails = await response.json();

        const fetchedPokemon: PokemonData = 
        {
            pokemonId: pokemonDetails.id,
            pokemonName: pokemonDetails.name,
            pokemonHeight: pokemonDetails.height,
            pokemonWeight: pokemonDetails.weight,
            pokemonTypes: pokemonDetails.types.map((typeObj: { type: { name: string; url: string } }) => 
            ({
                typeInfo: 
                {
                    typeName: typeObj.type.name,
                    typeUrl: typeObj.type.url,
                }
            })),
        };

        return fetchedPokemon;
    } 
    catch (err) 
    {
        return `Unable to retrieve Pokemon data: ${(err as Error).message}`;
    }
}
