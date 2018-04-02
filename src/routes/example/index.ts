import express from 'express';
const router = express.Router();

import Example from '../../models/example/index.model';

/**
 *
 */
router.get('/example', (req: Request, res: Response) => {
    res.json();
});

/**
 *
 */
router.post('/example', (req: Request, res: Response) => {
    res.json();
});

/**
 *
 */
router.put('/example/:id', (req: Request, res: Response) => {
    res.json();
});

/**
 *
 */
router.delete('/example/:id', (req: Request, res: Response) => {
    res.json();
});

module.exports = router;
