const { Inngest } = require('inngest');
const User = require('../models/User');

// Create a client to send and receive events
const inngest = new Inngest({ id: "movie-ticket-booking" });
// Create an empty array where we'll export future Inngest functions

const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-form-clerk'},
    {event: 'clerk/user.create'},
    async({even}) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: first_name + " " + last_name,
            image: image_url
        }
        await User.create(userData)
    }
)
module.exports = { inngest, syncUserCreation };