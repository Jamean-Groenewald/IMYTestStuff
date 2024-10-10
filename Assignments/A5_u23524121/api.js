//u23524121 Jamean Groenewald

export const getCharacterByID = async (id) => 
{
    try
    {
        const res = await fetch(`https://swapi.dev/api/people/${id}/`);

        if(!res.ok)
        {
            throw new error(`error trying to get character with ID: ${id}`);
        }

        if(res.status === 401)
        {
            throw new error("unauthorised");
        }

        const data = await res.json();

        return data;
    }
    catch(error)
    {
        console.error("Error trying to get character with id", error);

        return { error: error.message };
    }
};

export const getCharacterByName = async (name) => 
{
    try
    {
        const res = await fetch(`https://swapi.dev/api/people/?search=${name}`);

        if(!res.ok)
        {
            throw new error(`error trying to get character with name: ${name}`);
        }
        
        if(res.status === 401)
        {
            throw new error("unauthorised");
        }

        const data = await res.json();
        
        if(data.count === 0)
        {
            throw new error(`cannot find character with name: ${name}`);
        }

        return data.results[0];
    }
    catch(error)
    {
        console.error("Error trying to get character with name", error);

        return { error: error.message };
    }
};