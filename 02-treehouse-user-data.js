// Require https module
const https = require("https")

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript`;
  console.log(message)
}

function getProfile(username) {
  // Connect to the API URL (https://teamtreehouse.com/username.json)
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
    let body = ''

    // Read the data
    response.on('data', data => {
      body += data.toString()
    })

    response.on('end', data => {
      // Parse the data
      const profile = JSON.parse(body)

      // Print the data
      printMessage(username, profile.badges.length, profile.points.JavaScript)
    })

  })
}

// Get the arguments passed when running node
// eg. 'node 02-treehouse-user-data.js marcelodapper chalkers'
const users = process.argv.slice(2)

// Runs getProfile for each user
users.forEach(getProfile)
