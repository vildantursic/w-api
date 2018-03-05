import express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

import {} from './helpers/example.helper.js';

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
