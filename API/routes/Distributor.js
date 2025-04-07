import express from 'express';
import { approveAdoptionRequest, deleteDistributor, getDaycareBookingRequestDetails, getVetAppointmentRequestDetails, registerDistributor, rejectAdoptionRequest, trackDaycareBookingRequests, trackPetsByUser, trackVetAppointmentRequests, updateDistributor } from '../Controllers/Distributor.js';

const router = express.Router();

router.post('/register', registerDistributor);
router.put('/update/:userID', updateDistributor); 
router.delete('/delete/:userID', deleteDistributor); 
router.post('/approve', approveAdoptionRequest);
router.post('/reject', rejectAdoptionRequest);
router.get('/trackAppointmentRequests/:userID', trackVetAppointmentRequests);
router.get('/trackBookingRequests/:userID', trackDaycareBookingRequests);
router.get('/bookingRequestDetails/:bookingID', getDaycareBookingRequestDetails);
router.get('/appointmentRequestDetails/:appointmentID', getVetAppointmentRequestDetails);
router.get("/myPets/:userID", trackPetsByUser);

export default router;
