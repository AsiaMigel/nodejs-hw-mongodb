import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import { env } from './utils/env.js';
import { getAllContacts, getContactById } from './services/contacts.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
    
}