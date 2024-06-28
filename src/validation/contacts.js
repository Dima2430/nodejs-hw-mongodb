import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  contactType: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Contact type should be a string',
    'string.min': 'Contact type should have at least {#limit} characters',
    'string.max': 'Contact type should have at most {#limit} characters',
  }),
  isFavorite: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Favorite must be one of [work, home, personal]',
    'any.required': 'Favorite is required',
  }),
  userId: Joi.string().required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Username should be a string',
    'string.min': 'Username should have at least {#limit} characters',
    'string.max': 'Username should have at most {#limit} characters',
    'any.required': 'Username is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone number should be a string',
    'string.min': 'Phone number should have at least {#limit} characters',
    'string.max': 'Phone number should have at most {#limit} characters',
    'any.required': 'Phone number is required',
  }),
  email: Joi.string().email().messages({
    'string.email': 'Email must be a valid email address',
  }),
  contactType: Joi.string().min(3).max(20).optional().messages({
    'string.base': 'Contact type should be a string',
    'string.min': 'Contact type should have at least {#limit} characters',
    'string.max': 'Contact type should have at most {#limit} characters',
  }),
  isFavorite: Joi.string().valid('work', 'home', 'personal').messages({
    'any.only': 'Favorite must be one of [work, home, personal]',
    'any.required': 'Favorite is required',
  }),
});
