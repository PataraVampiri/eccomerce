import type { OrderRecord } from '../types/order'
import { ORDER_STORAGE_KEY, safeReadStorage, safeWriteStorage } from './storage'

export function generateOrderId(): string {
  const random = Math.floor(100000 + Math.random() * 900000)
  return `ORD-${random}`
}

export function readOrders(): OrderRecord[] {
  return safeReadStorage<OrderRecord[]>(ORDER_STORAGE_KEY, [])
}

export function writeOrders(orders: OrderRecord[]): void {
  safeWriteStorage(ORDER_STORAGE_KEY, orders)
}

export function saveOrder(order: OrderRecord): void {
  const existing = readOrders()
  writeOrders([order, ...existing])
}

export function getOrderById(orderId: string): OrderRecord | undefined {
  return readOrders().find((order) => order.id === orderId)
}
