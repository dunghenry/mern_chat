const Joi = require('joi');
const userValidation = (data) => {
    const userSchema = Joi.object({
        name: Joi.string().min(5).max(20).required(),
        email: Joi.string()
            .pattern(new RegExp('@gmail.com$'))
            .email()
            .required(),
        password: Joi.string()
            .pattern(
                new RegExp(
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
                ),
            )
            .required(),
    });
    return userSchema.validate(data);
};
const userLoginValidation = (data) => {
    const userSchema = Joi.object({
        email: Joi.string()
            .pattern(new RegExp('@gmail.com$'))
            .email()
            .required(),
        password: Joi.string()
            .pattern(
                new RegExp(
                    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})',
                ),
            )
            .required(),
    });
    return userSchema.validate(data);
};
module.exports = { userValidation, userLoginValidation };
