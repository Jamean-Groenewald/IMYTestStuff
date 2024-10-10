//u23524121 Jamean Groenewald

// const events = [
//   {
//     name: "A Walk in the Park",
//     date: "2021-09-19",
//     description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
//   },
//   {
//     name: "Beach Day!",
//     date: "2019-12-28",
//     description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
//   },
//   {
//     name: "Pokemon Go Meetup",
//     date: "2016-06-11",
//     description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
//   },
//   {
//     name: "Crochet Date!",
//     date: "2024-07-09",
//     description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
//   },
//   {
//     name: "Yoga in the Morning",
//     date: "2022-07-15",
//     description: "Join us for a refreshing morning #yoga session #wellness #morning"
//   },
//   {
//     name: "Hackathon",
//     date: "2023-03-10",
//     description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
//   },
//   {
//     name: "Summer Braai",
//     date: "2021-08-05",
//     description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
//   },
//   {
//     name: "Art Exhibition",
//     date: "2018-05-20",
//     description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
//   },
//   {
//     name: "Star Wars Under the Stars",
//     date: "2023-05-04",
//     description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
//   },
//   {
//     name: "Live Concert: Rock the Night",
//     date: "2023-06-25",
//     description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
//   },
//   {
//     name: "Farmers Market",
//     date: "2024-04-01",
//     description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
//   },
//   {
//     name: "Comicon Anyone?",
//     date: "2024-09-26",
//     description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
//   }
// ];

// Event Component

class Event extends React.Component
{
  render() 
  {
    //const {name, date, description} = this.props.event;

    return(
      <div>

        {/* <h1>{this.props.events.name}</h1>
        <p>{this.props.events.date}</p>
        <p>{this.props.events.description}</p> */}

        <h1>{this.props.event.name}</h1>
        <p>{this.props.event.date}</p>
        <p>{this.props.event.description}</p>

        {/* <h1>{name}</h1>
        <p>{date}</p>
        <p>{description}</p> */}

      </div>
    );
  }
  
}

// EventFeed Component

class EventFeed extends React.Component
{
  render()
  {
    const sortedEvent = this.props.eventFeed.sort((first, second) => new Date(second.date) - new Date(first.date));

    return(
      <div>
        {sortedEvent.map((event, index) => ( //{
          <Event key={index} event = {event} />
        ))} 
        {/* })}  */}
      </div>
    );
  }
}

// Search Component

class Search extends React.Component
{
  constructor(props)
  {
    super(props);
    this.inputRef = React.createRef(); //ref to use input val.
  }

  search = (e) =>{

    e.preventDefault();

    const searchInput = this.inputRef.current.value;

    //this.props.handleSearch(searchInput);
    this.props.handleSearch(searchInput);
  };

  render()
  {
    return(
      <form onSubmit={this.search}>
        <label>Search <input type="text" ref={this.inputRef} placeholder="Search something..." /> </label>
        <button type="submit">search</button>
      </form>
    );
  }
}

// App Component

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    // this.state =  
    // {
    //   searchTerm: '', //store state of search

      this.initialEvents = 
      [
        {
          name: "A Walk in the Park",
          date: "2021-09-19",
          description: "Let's go walking and feed the ducks. #ducks #walk #park #Sunday",
        },
        {
          name: "Beach Day!",
          date: "2019-12-28",
          description: "Let's have a fun day on the beach right before #xmas !! #beachday #summertime"
        },
        {
          name: "Pokemon Go Meetup",
          date: "2016-06-11",
          description: "I wanna meet up with #PokemonGo fans to #catchEmAll #pokemon #meetup"
        },
        {
          name: "Crochet Date!",
          date: "2024-07-09",
          description: "Let's meetup to go crochet in the park. I'll bring the wool!! #park #crochet #meetup"
        },
        {
          name: "Yoga in the Morning",
          date: "2022-07-15",
          description: "Join us for a refreshing morning #yoga session #wellness #morning"
        },
        {
          name: "Hackathon",
          date: "2023-03-10",
          description: "Compete in this year's #hackathon to win amazing prizes and meet feelow #coders #coding"
        },
        {
          name: "Summer Braai",
          date: "2021-08-05",
          description: "Come and enjoy a delicious braai with friends and family #braai #summertime #summer #fun"
        },
        {
          name: "Art Exhibition",
          date: "2018-05-20",
          description: "Explore modern art at the Joburg #art #exhibition from talented artists around the world #creativity"
        },
        {
          name: "Star Wars Under the Stars",
          date: "2023-05-04",
          description: "Watch your favorite #StarWars movies under the open sky! #movienight #outdoor #maythe4thbewithyou"
        },
        {
          name: "Live Concert: Rock the Night",
          date: "2023-06-25",
          description: "Enjoy an electrifying night of live music from your favourite #rock artists #concert #rockmusic #livemusic"
        },
        {
          name: "Farmers Market",
          date: "2024-04-01",
          description: "Fresh produce, homemade goods, and more at the local farmers market this week #farmersmarket #organic"
        },
        {
          name: "Comicon Anyone?",
          date: "2024-09-26",
          description: "Who's going to #comicon this year? Let's #meetup - I'll be Spiderman!"
        }
      ],
    //};

    this.state = 
    {
      searchTerm: '',
      events: this.initialEvents //did it this way so that when user removes search term, can revert back to initial state 
                                //(I also understood 'initial' state to be what is shown when the page first loads and not the previous state.) 
    };

    this.searchFeed = this.searchFeed.bind(this);
  }

  searchFeed(searchTerm)
  {
    this.setState( {searchTerm} );

    if(searchTerm === "")
    {
      //this.setState({events: this.state.events}); //empty so no change
      this.setState({events: this.initialEvents}); 
    }
    else if(searchTerm[0] === "#")
    {
      // this.setState({events: this.state.events.filter(event => 
      //   event.description.includes(searchTerm)
      // )});

      this.setState({events: this.initialEvents.filter(event => 
        event.description.includes(searchTerm)
      )});
    }
    else
    {
      // this.setState({events: this.state.events.filter(event => 
      //   event.name.includes(searchTerm)
      // )}); 
      
      this.setState({events: this.initialEvents.filter(event => 
        event.name.includes(searchTerm)
      )});  
    }
  }

  render()
  {
    return(
      <div>
        <h1>Events!</h1>
        <h2>Search</h2>
        <Search handleSearch = {this.searchFeed} /> {/*goes first so that search can show up first*/}
        <h2>Feed</h2>
        <EventFeed eventFeed = {this.state.events} />
        {/* <search handleSearch = {this.searchFeed} />  */}
      </div>
    );
  }
}

// render here
const root = ReactDOM.createRoot(document.getElementById("root"));
// complete this code
//root.render(<Event event = {events[0]} />);
//root.render(<EventFeed event = {events} />);
root.render(<App />);