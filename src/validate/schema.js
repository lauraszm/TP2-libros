import Joi from 'joi'

export const validateLibro = (libro) => {
    const libroSchema = Joi.object({
        codigo: Joi.string().min(3).max(10).required(),
        titulo: Joi.string().min(2).max(200).required(),
        autor: Joi.string().min(2).max(200).required()
    })

    const { error } = libroSchema.validate(libro)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}