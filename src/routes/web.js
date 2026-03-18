const express = require('express')
const { getHomePage, getDetailPage, getSeatSelectionPage, 
        getMyBookingPage, getDashboardPage, getAddShowPage, 
        getListShowsPage, getListBookingsPage, getLoginPage } = require('../controllers/homeController')
const router = express.Router()


router.get('/HomePage', getHomePage)

router.get('/DetailsPage', getDetailPage)

router.get('/SeatSelection', getSeatSelectionPage)

router.get('/MyBooking', getMyBookingPage)

router.get('/Dashboard', getDashboardPage)

router.get('/AddShow', getAddShowPage)

router.get('/ListShows', getListShowsPage)

router.get('/ListBookings', getListBookingsPage)

router.get('/Login', getLoginPage)
router.get('/view', (req, res) =>{
    res.render('example.ejs')
})
module.exports = router;