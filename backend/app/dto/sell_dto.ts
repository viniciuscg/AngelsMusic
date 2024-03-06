import { DateTime } from "luxon"
import { SellStatus } from "./enum.js"

export interface SellDto {
  id: number
  price: number
  date: DateTime
  userId: number
  status: SellStatus
}