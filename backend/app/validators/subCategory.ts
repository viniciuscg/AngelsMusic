import vine from '@vinejs/vine'

export const createSubCategoryValidator = vine.compile(
  vine.object({
    description: vine.string().maxLength(20),
    categoryId: vine.number().positive(),
  })
)

export const getSubCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)

export const deleteSubCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)

export const updateSubCategoryValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    description: vine.string().maxLength(20),
    categoryId: vine.number().positive().nullable(),
  })
)
