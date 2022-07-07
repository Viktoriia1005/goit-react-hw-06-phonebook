import { createAction } from '@reduxjs/toolkit';

export const contactAdd = createAction('contacts/add');

export const contactDelete = createAction('contacts/delete');

export const changeFilter = createAction('filter/changeFilter');
