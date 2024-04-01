import vine from '@vinejs/vine'

export const createCategoryValidator = vine.compile(
  vine.object({
    name: vine.string().maxLength(20),
    description: vine.string(),
  })
)

export const updateCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    name: vine.string().maxLength(20),
  })
)

export const deleteCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)

export const getCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)