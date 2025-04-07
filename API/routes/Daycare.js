import express from 'express';
import { getAllDaycare,bookDaycare, findDaycareBookingsByUserID, registerDaycare, updateDaycare, approveBookingRequest, rejectBookingRequest, deleteDaycare } from "../Controllers/Daycare.js";

const router = express.Router();

router.get('/daycare', getAllDaycare);
router.post('/book', bookDaycare);
router.post('/register', registerDaycare);
router.put('/update/:userID', updateDaycare);
router.delete('/delete/:userID',deleteDaycare);
router.get('/findBookings/:userID', findDaycareBookingsByUserID);
// router.get('/viewSchedule/:userID', viewDaycareScheduleByUserID );
router.post('/approve', approveBookingRequest);
router.post('/reject', rejectBookingRequest);

export default router;
