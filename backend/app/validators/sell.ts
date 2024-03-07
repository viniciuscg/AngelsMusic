import vine from '@vinejs/vine'

export const createSellValidator = vine.compile(
    vine.object({
        price: vine.number().positive(),
        userId: vine.number().positive(),
    })
)
export const updateSellValidator = vine.compile(
    vine.object({
        status: vine.number().max(4).positive(),
    })
)

export const getSellValidator = vine.compile(
    vine.object({
        id: vine.number().positive(),
    })
)