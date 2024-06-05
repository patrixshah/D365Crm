import { Router } from 'express';
import {
  getAccounts,
  getAccountsActiveCount,
  getAccountsInActiveCount,
  getAccountsTotalCount,
  getAccountById,
} from '../controllers/accountController';

const router = Router();

router.get('/', [
  getAccounts,
  getAccountsActiveCount,
  getAccountsInActiveCount,
  getAccountsTotalCount,
]);

router.get('/:id', getAccountById);

export default router;
