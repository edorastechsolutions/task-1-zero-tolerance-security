const Joi = require("joi")
const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required()
}).unknown(false)

function validateUser(req, res, next) {
  const { error } = userSchema.validate(req.body)
  if (error) {
    return res.status(400).json({ message: "invalid request" })
  }
  next()
}

module.exports = { validateUser }