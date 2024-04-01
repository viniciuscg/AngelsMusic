import vine from '@vinejs/vine'

export const createSellValidator = vine.compile(
  vine.object({
    userId: vine.number().positive(),
    items: vine.array(
      vine.object({
        quantity: vine.number().positive(),
        productId: vine.number().positive(),
      })
    ),
  })
)

export const updateSellValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    status: vine.number().max(4).positive(),
  })
)

export const getSellValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)