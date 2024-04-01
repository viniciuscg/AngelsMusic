import vine from '@vinejs/vine'

export const createUserValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6), 
  })
)

export const updateUserValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
    fullName: vine.string(),
    email: vine.string().email(),
    password: vine.string().minLength(6), 
  })
)

export const deleteUserValidator = vine.compile(
  vine.object({
    id: vine.number().positive(),
  })
)

export const loginUserValidator = vine.compile(
  vine.object({
    email: vine.string().email(),
    password: vine.string().minLength(6), 
  })
)

export const logoutUserValidator = vine.compile(
  vine.object({
    token: vine.string(), 
  })
)