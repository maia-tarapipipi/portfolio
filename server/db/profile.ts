import connection from './connection'
import { Fruit } from '../../models/profile'

export function getAllFruits(db = connection): Promise<Fruit[]> {
  return db('fruit').select()
}
