import { Router } from 'express';
import {
  getContacts,
  getContactsActiveCount,
  getContactsInActiveCount,
  getcontactsTotalCount,
  getContactById,
} from '../controllers/contactController';

const router = Router();

router.get('/', [
  getContacts,
  getContactsActiveCount,
  getContactsInActiveCount,
  getcontactsTotalCount,
]);

router.get('/:id', getContactById);

export default router;
