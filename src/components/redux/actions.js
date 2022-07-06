import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactAdd = createAction('contacts/add', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));

export const contactDelete = createAction('contacts/delete');

export const changeFilter = createAction('filter/changeFilter');
