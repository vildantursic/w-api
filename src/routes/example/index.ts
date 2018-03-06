import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import Example from '../../models/example/index.model';

/**
 *
 */
router.get('/example', (req: Request, res: Response) => {
  res.send('W-API example GET');
});

/**
 *
 */
router.post('/example', (req: Request, res: Response) => {
  res.send('W-API example POST');
});

/**
 *
 */
router.put('/example/:id', (req: Request, res: Response) => {
  res.send('W-API example PUT');
});

/**
 *
 */
router.delete('/example/:id', (req: Request, res: Response) => {
  res.send('W-API example DELETE');
});

module.exports = router;
