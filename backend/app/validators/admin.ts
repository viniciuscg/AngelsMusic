import vine from '@vinejs/vine'

export const loginAdminValidator = vine.compile(
  vine.object({
    email: vine.string().maxLength(20).email(),
    password: vine.string().maxLength(20),
  })
)
