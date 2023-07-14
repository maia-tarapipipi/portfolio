import { Router } from 'express'

import * as db from '../db/profile'

const router = Router()

router.get('/', async (req, res) => {
  try {
    res.json({})
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router
