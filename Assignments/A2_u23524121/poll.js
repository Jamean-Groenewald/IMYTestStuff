//u23524121 Jamean Groenewald

class poll 
{
    constructor(startingVotes)
    {
        this.votes = startingVotes;
    }

    vote(name)
    {
        const cat = this.votes.find(vote => vote.name === name); //find name in arr

        if(cat)
        {
            cat.votes++;
        }
    }

    getVotes()
    {
        return this.votes;
    }
}

module.exports = poll;