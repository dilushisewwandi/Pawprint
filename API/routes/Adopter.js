import express from 'express';
import { deleteAdopter, getAdoptionRequestDetails, registerAdopter, trackAdoptionRequests, updateAdopter } from '../Controllers/Adopter.js';

const router = express.Router();

router.post('/register', registerAdopter);
router.put('/update/:userID', updateAdopter);
router.delete('/delete/:userID', deleteAdopter);
router.get('/trackRequests/:userID', trackAdoptionRequests);
router.get('/adoptionRequestDetails/:petID', getAdoptionRequestDetails);

export default router;
