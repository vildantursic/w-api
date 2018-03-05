const express = require('express')
const router = express.Router();

import {} from "./helpers/example.helper.js"

/**
 *
 */
router.get('/example', (req, res) => {
  res.send('W-API example GET')
})

/**
 *
 */
router.post('/example', (req, res) => {
  res.send('W-API example POST')
})

/**
 *
 */
router.put('/example/:id', (req, res) => {
  res.send('W-API example PUT')
})

/**
 *
 */
router.delete('/example/:id', (req, res) => {
  res.send('W-API example DELETE')
})

module.exports = router
