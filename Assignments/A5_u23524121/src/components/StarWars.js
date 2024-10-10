//u23524121 Jamean Groenewald

import React from "react";
import Person from "./Person";
import Search from "./Search";
import { getCharacterByID, getCharacterByName } from "../../api";

class StarWars extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = 
        {
            character: null,
            currId: 1, 
            error: null //throwing errors caused problems for me, so storing error in state helped.
        };
    }

    componentDidMount()
    {
        this.fetchCharacterById(this.state.currId);
    }

    fetchCharacterById = async (id) =>
    {
        if(id<=0)
        {
            this.setState( {error: 'ID must be greater than 0', character: null} );
            return;
        }

        try
        {
            const character  = await getCharacterByID(id);

            if(character.error)
            {
                this.setState( {error: character.error, character: null} );
            }
            else
            {
                this.setState( {character, error: null} );
            }
        }
        catch(error)
        {
            this.setState( {error: 'error fetching character', character: null} );
        }
    };

    handleNext = () =>
    {
        this.setState( (prevState) => 
        {
            const next = prevState.currId+1;
            this.fetchCharacterById(next);

            return {currId: next};
        });
    };

    handlePrevious = () =>
    {
        this.setState( (prevState) => 
        {
            const previous = prevState.currId-1;

            if(previous>0)
            {  
                this.fetchCharacterById(previous);

                return {currId: previous};
            }

            //return null; return prevState;

            return { currId: 0 }; // Prevent setting to negative values. once 0, button just disables.

        });
    };

    handleSearch = async (name) =>
    {
        try
        {
            const character = await getCharacterByName(name);

            if(character.error)
            {
                this.setState( {error: character.error, character: null} );
            }
            else
            {
                this.setState( {character, error: null} );
            }
        }
        catch(error)
        {
            this.setState( {error: 'error: error fetching character by name', character: null} );
        }
    };

    render()
    {
        //console.log("Current ID:", this.state.currId); // Debugging

        return (
            <div className="starwars-container" >
                <h1 className="starwars-heading" >Activity Feed</h1>

                <Search onSearch={this.handleSearch} onPrevious={this.handlePrevious} onNext={this.handleNext} currId={this.state.currId} />

                {this.state.error && <p className="error-message" >{this.state.error}</p>} {/*ensures that the error only shows up if there is actually an error*/}

                {this.state.character && <Person name={this.state.character.name} birth_year={this.state.character.birth_year}
                eye_color={this.state.character.eye_color} gender={this.state.character.gender} 
                homeworld={this.state.character.homeworld} />} {/*ensures that only displays if character state not null*/}
            </div>
        );
    }
}

export default StarWars;