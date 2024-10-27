const mongoose = require('mongoose');

module.exports = client => 
  
 
  // run every 10 seconds
  setInterval(() => {
    // generate random number between 1 and list length.
    const activities = [
      "with Michael :)",
      `in ${client.guilds.cache.size} servers`,
      `for ${client.uptime} ms :o`,
      `with ${client.users.cache.size} users :]`,
      "b!help for commands!",
      "on Javascript!"
    ];
    const randomIndex = Math.floor(Math.random() * (activities.length - 1) + 1);
    const newActivity = activities[randomIndex];
    
    client.user.setActivity(newActivity)
    
    
  }, 10000);


