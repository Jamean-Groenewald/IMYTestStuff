//u23524121

const fs = require("fs");

const fileRead = () =>
{
    const fileData = fs.readFileSync('events.json', 'utf-8');

    return JSON.parse(fileData);
}

const fileWrite = (data) => {
    const writingData = JSON.stringify(data, null, 2);

    fs.writeFileSync('newEvents.json', writingData, 'utf-8');
} 

module.exports = {fileRead, fileWrite};