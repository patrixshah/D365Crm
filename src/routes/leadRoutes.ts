import { Router } from 'express';
import {
  getLeads,
  getLeadsActiveCount,
  getLeadsInActiveCount,
  getLeadsTotalCount,
  getLeadById,
} from '../controllers/leadController';

const router = Router();

router.get('/', [
  getLeads,
  getLeadsActiveCount,
  getLeadsInActiveCount,
  getLeadsTotalCount,
]);

router.get('/:id', getLeadById);

export default router;
