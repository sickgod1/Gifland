
const config = require("../config.json");

module.exports = (client) => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity("bogdane baga niste boti",
    {
        type: "STREAMING",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    });
}; 