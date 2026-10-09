import { create } from 'zustand'
import { ORDER_STORAGE_KEY, safeReadStorage, safeWriteStorage } from '../lib/storage'
import type { OrderRecord } from '../types/order'

interface OrderState {
  orders: OrderRecord[]
  saveOrder: (order: OrderRecord) => void
  getOrderById: (orderId: string) => OrderRecord | undefined
}

export const useOrderStore = create<OrderState>((set, get) => ({
  orders: safeReadStorage<OrderRecord[]>(ORDER_STORAGE_KEY, []),
  saveOrder: (order: OrderRecord) => {
    set((state) => {
      const updated = [order, ...state.orders]
      safeWriteStorage(ORDER_STORAGE_KEY, updated)
      return { orders: updated }
    })
  },
  getOrderById: (orderId: string) => {
    return get().orders.find((order) => order.id === orderId)
  },
}))
