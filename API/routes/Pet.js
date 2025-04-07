import express from 'express';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';
import { registerPet, getPetsByDistributor, getAllPets, getPetProfile, getAllPetProfiles, adoptPet, getAdoptionRequestsByDistributor, updatePet, deletePet, getHealthProfile} from '../Controllers/Pet.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post('/register', upload.single('petImage'), registerPet);
router.put('/update/:petID', upload.single('petImage'), updatePet);
// router.put('/update/:petID', updatePet);
router.delete('/delete', deletePet);
router.get('/distributor/:disID', getPetsByDistributor);
router.get('/allpets', getAllPets);
router.get('/petProfile/:petID', getPetProfile);
router.get('/petProfiles', getAllPetProfiles);
router.post('/adopt/:petID', adoptPet);
router.get('/adoptionRequest/:userID',getAdoptionRequestsByDistributor)
router.get("/healthProfile/:petID", getHealthProfile);

export default router;
