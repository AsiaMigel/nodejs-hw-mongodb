import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';

export const isValidid = (req, res, next) => {
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    throw createHttpError(400, 'It is not valid');
  }
  next();
};