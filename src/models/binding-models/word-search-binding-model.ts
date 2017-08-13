import * as Joi from 'joi';

export const wordCountBindingModel = Joi.object().keys({
     word: Joi.string().required(),
}).required();
