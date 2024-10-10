//u23524121

const checkDate = (dateString) => 
{
    const date = new Date(dateString);

    const firstDate = new Date("2024-09-09");
    const secondDate = new Date("2024-09-21");

    if(date>firstDate && date<=secondDate)
    {
        return true;
    }
    else
    {
        return false;
    }
}

const checkName = (nameInput) => 
{
    const characters = /[^a-zA-Z0-9]/; //regex

    if(!characters.test(nameInput))
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = {checkDate, checkName};