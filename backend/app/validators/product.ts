import vine from '@vinejs/vine'

export const createProductValidator = vine.compile(
  vine.object({
    model: vine.string(),
    quantity: vine.number().positive(),
    description: vine.string(), 
    img: vine.string(), 
    price: vine.number().positive(),
    category_id: vine.number().positive(),
    subCategory_id: vine.number().positive(),
  })
)

export const updateProductValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    model: vine.string(),
    quantity: vine.number().positive(),
    description: vine.string(), 
    img: vine.string(), 
    price: vine.number().positive(),
    active: vine.boolean(),
    categoryId: vine.number().positive(),
    subCategoryId: vine.number().positive(),
  })
)

export const deactivateProductValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    active: vine.boolean(),
  })
)

export const getProductValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)