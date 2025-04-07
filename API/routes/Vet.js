import express from 'express';
import { getAllVetProfiles, registerVet,bookVetAppointment,findVetAppointmentsByUserID, approveAppointmentRequest, rejectAppointmentRequest, updateVet, deleteVet} from "../Controllers/Vet.js";

const router = express.Router();

router.post('/register',registerVet);
router.put('/update/:userID', updateVet);
router.delete('/delete/:userID', deleteVet);
router.get('/vetProfiles', getAllVetProfiles);
router.post('/vetAppointment', bookVetAppointment);
router.get('/findVetAppointments/:userID',findVetAppointmentsByUserID);
router.post('/approve',approveAppointmentRequest);
router.post('/reject',rejectAppointmentRequest);

export default router;

