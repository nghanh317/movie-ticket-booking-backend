
const login = (req, res) =>{
  res.send("login")
}
const getHomePage = (req, res) => {
  res.send('Home page')
}

const getDetailPage = (req, res) => {
  res.send('Details page')
}

const getSeatSelectionPage = (req, res) => {
  res.send('Seat Selection page')
}
 const getMyBookingPage = (req, res) => {
  res.send('My Booking page')
}

const getDashboardPage = (req, res) => {
  res.send('Dashboard page')
}

const getAddShowPage = (req, res) => {
  res.send('Add Show page')
}

const getListShowsPage = (req, res) => {
  res.send('List Shows page')
}

const getListBookingsPage = (req, res) => {
  res.send('List Bookings page')
}

const getLoginPage = (req, res) => {
  res.send('Login page')
}

module.exports = {
  getHomePage, 
  getDetailPage, 
  getSeatSelectionPage, 
  getMyBookingPage, 
  getDashboardPage, 
  getAddShowPage, 
  getListShowsPage, 
  getListBookingsPage,
  getLoginPage,
  login
}