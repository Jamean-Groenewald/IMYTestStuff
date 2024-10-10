var pets = [
  { name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560 },
  { name: "Fluffy", species: "dog", age: 4, adopted: true, adoptedDate: "2023-03-27",adoptionFee: 890 },
  { name: "Daisy", species: "dog", age: 9, adopted: true, adoptedDate: "2021-01-05", adoptionFee: 780 },
  { name: "Coco", species: "rabbit", age: 3, adopted: true, adoptedDate: "2019-01-30", adoptionFee: 615 },
  { name: "Simba", species: "cat", age: 4, adopted: true, adoptedDate: "2019-09-30", adoptionFee: 995 },
  { name: "Oreo", species: "rabbit", age: 4, adopted: false, adoptedDate: "", adoptionFee: 605 },
  { name: "Bella", species: "cat", age: 6, adopted: false, adoptedDate: "", adoptionFee: 810 },
  { name: "Milo", species: "bird", age: 3, adopted: false, adoptedDate: "", adoptionFee: 740 },
  { name: "Buddy", species: "dog", age: 10, adopted: true, adoptedDate: "2021-02-01", adoptionFee: 735 },
  { name: "Pebbles", species: "bird", age: 4, adopted: false, adoptedDate: "", adoptionFee: 505 },
];

class PetHandler
{
    constructor(petsArr)
    {
      this.petsArr = petsArr;
    }

    findPetsInAgeRange(minAge, maxAge)
    {
      return this.petsArr.filter(pets=> pets.age>=minAge && pets.age<=maxAge);
    }

    listAdoptedPetsByDate()
    {
      return this.petsArr.filter(pets=> pets.adopted === true).sort((pet1, pet2) => {
        
        const pet1AdoptDate = new Date(pet1.adoptedDate); //convert to date to be able to sort according to the date.
        const pet2AdoptDate = new Date(pet2.adoptedDate);

        return pet2AdoptDate - pet1AdoptDate; //if result positive, pet2 comes before pet1 and vice versa. if 0, then stay same.
      });
    }

    ListPets(...input) //... to ensure input is an array type otherwise .map doesn't work.
    {

      // let petOutput;

      // if(input.length > 0)
      // {
      //   if(Array.isArray(input[0])) //test if input is array of objects
      //   {
      //     petOutput = input[0];
      //   }
      //   else //only 1 array of objects given
      //   {
      //     petOutput = input;
      //   }
      // }
      // else //no input given
      // {
      //   petOutput = this.pets;
      // }

      const petOutput = (() => {

        if(input.length === 0)
        {
          return this.petsArr;
          
        }
        else
        {
          if(Array.isArray(input[0]))
          {
            return input[0];
          }
          else
          {
            return input;
          }
        }
      })();

      const createPetItem = (pet) => {//handles creating the strings. Arrow function otherwise line 69 is unreachable code. why?
      
        let stringOutput = `${pet.name} | ${pet.species} | Age: ${pet.age}`;

        if(pet.adopted === true)
        {
          stringOutput += ' | Adopted!';
        }

        return stringOutput;
      };

      return petOutput.map(createPetItem);
    }

    calculateUniqueAdoptionFee(...petNames) //without ..., output=0. allows to handle multiple arguements?
    {
      const uniqueNames = new Set(petNames); //Set to remove duplicates(got this from google)

      const pets = this.petsArr.filter(pet => uniqueNames.has(pet.name)); //.has to filter this.pets member to only have the uniqueNames.
      
      const fee = pets.reduce((total, pet) => total + pet.adoptionFee, 0); //.reduce to make it 1 value. ,0 to specify accumulator starts at 0.

      return fee;
    }
}

Array.prototype.findPetsInAgeRange = function(minAge, maxAge)
{
  return this.petsArr.filter(pets=> pets.age>=minAge && pets.age<=maxAge);
};

Array.prototype.listAdoptedPetsByDate = function()
{
  return this.petsArr.filter(pets=> pets.adopted === true).sort((pet1, pet2) => {
        
    const pet1AdoptDate = new Date(pet1.adoptedDate); //convert to date to be able to sort according to the date.
    const pet2AdoptDate = new Date(pet2.adoptedDate);

    return pet2AdoptDate - pet1AdoptDate; //if result positive, pet2 comes before pet1 and vice versa. if 0, then stay same.
  });
};

Array.prototype.ListPets = function(...input)
{
  const petOutput = (() => {

    if(input.length === 0)
    {
      return this; //this.petsArr; //just use this, because 'this' is the array the method is called on.
      
    }
    else
    {
      if(Array.isArray(input[0]))
      {
        return input[0];
      }
      else
      {
        return input;
      }
    }
  })();

  const createPetItem = (pet) => {//handles creating the strings. Arrow function otherwise line 69 is unreachable code. why?
  
    let stringOutput = `${pet.name} | ${pet.species} | Age: ${pet.age}`;

    if(pet.adopted === true)
    {
      stringOutput += ' | Adopted!';
    }

    return stringOutput;
  };

  return petOutput.map(createPetItem);
};

Array.prototype.calculateUniqueAdoptionFee = function(...petNames)
{
  const uniqueNames = new Set(petNames); //Set to remove duplicates(got this from google)

  const pets = this.petsArr.filter(pet => uniqueNames.has(pet.name)); //.has to filter this.pets member to only have the uniqueNames.
  
  const fee = pets.reduce((total, pet) => total + pet.adoptionFee, 0); //.reduce to make it 1 value. ,0 to specify accumulator starts at 0.

  return fee;
};

// const petHandler = new PetHandler(pets);

// console.log(petHandler.findPetsInAgeRange(5,9));
// console.log(petHandler.listAdoptedPetsByDate());
// console.log(petHandler.ListPets()); //no input
// console.log(petHandler.ListPets({name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560})); //one object
// console.log(petHandler.ListPets([{name: "Polly", species: "bird", age: 1, adopted: false, adoptedDate: "", adoptionFee: 560}])); //array of object
// console.log(petHandler.calculateUniqueAdoptionFee('Milo', 'Coco', 'Milo'));

// console.log(petHandler.findPetsInAgeRange(1,5).ListPets());
// console.log(petHandler.listAdoptedPetsByDate().ListPets());