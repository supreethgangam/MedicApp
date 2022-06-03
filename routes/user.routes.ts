import { Router, Request, Response } from 'express';
import { updateUser, findById, deleteUserById,saveUserData, saveHospitalData, getAllUsers, getAllDocs, getAllHospitals, auth, reg, deleteHospitalById, updateHospital, findHospitalById } from '../services/user.service';

const router = Router();

router.post('/users', (req: Request, res: Response) => {
  saveUserData(req, res);
});
router.post('/users/login', (req: Request, res: Response) => {
  // console.log("yes");
  // console.log(req.params.emailId);
  auth(req, res);
});
router.post('/users/reg', (req: Request, res: Response) => {
  reg(req, res);
});
router.post('/addhospital', (req: Request, res: Response) => {
  console.log(req.body);
  saveHospitalData(req, res);
});
router.put('/users/:id', (req: Request, res: Response) => {
  updateUser(req, res);
});
router.put('/hospitals/:id', (req: Request, res: Response) => {
  updateHospital(req, res);
});
router.get('/users', (req: Request, res: Response) => {
  getAllUsers(req, res);
});
router.get('/docs', (req: Request, res: Response) => {
  getAllDocs(req, res);
});
router.get('/hospitals', (req: Request, res: Response) => {
  getAllHospitals(req, res);
});
router.delete('/users/:id', (req: Request, res: Response) => {
  deleteUserById(req, res);
});
router.get('/users/:id', (req: Request, res: Response) => {
  findById(req, res);
});
router.get('/hospitals/:id', (req: Request, res: Response) => {
  findHospitalById(req, res);
});
export = router