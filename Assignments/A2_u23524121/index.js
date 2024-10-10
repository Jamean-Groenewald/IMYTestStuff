//u23524121 Jamean Groenewald

const socket = io();

let userId = '';

function startVoting() 
{

    document.getElementById('poll').addEventListener('submit', function(event) {
        
        event.preventDefault(); //prevent form submitting. 

        const chosenOption = document.querySelector('input[name="catName"]:checked');

        if(chosenOption)
        {
            const vote = chosenOption.value;

            //console.log('Sending vote:', vote); //debugging

            socket.emit('vote', vote);
        }
    });
}

function voteUpdate(votes)
{
    // document.querySelector('label[for="pebble"] span').textContent = votes.pebble;
    // document.querySelector('label[for="sunshine"] span').textContent = votes.sunshine;

    const totalVotes = document.getElementById('total-votes');

    let numVotes = 0;

    // for(const name in votes)
    // {
    //     const label = document.querySelector(`label[for=${name}]`);

    //     if(label)
    //     {
    //         label.querySelector('span').textContent = votes[name]; //span cuz that is what vote count is in in the html.

    //         numVotes += votes[name];
    //     }
    // }

    votes.forEach(cat => {

        const label = document.querySelector(`label[for=${cat.name}]`);

        if(label)
        {
            label.querySelector('span').textContent = cat.votes; //span cuz that is what vote count is in in the html.

            numVotes += cat.votes;
        }
    });

    totalVotes.textContent = numVotes;
}

function liveFeed(userId, vote)
{
    const feed = document.getElementById('feed');
    const log = document.createElement('p');

    log.textContent = `User ${userId} voted for ${vote}`;

    feed.appendChild(log);
}

socket.on('connect', () => {
    
    socket.on('userId', (id) => {
        userId = id;

        console.log(`I connected with ID:${userId}`);

        startVoting();
    });
    // console.log(`I connected with ID:${socket.id}`);

    // startVoting();
});

socket.on('updateVotes', (votes) => {
    voteUpdate(votes);
});

// socket.on('userId', (id) => {
//     userId = id;
// });

socket.on('liveFeed', ({userId, vote}) => {
    liveFeed(userId, vote);
});

