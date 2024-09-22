import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/slice';

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (items, filter, number) => {
    const normalizedFilter = filter ? filter.toLowerCase() : ''; // Перевірка на null/undefined
    const normalizedNumber = number || ''; // Перевірка на null/undefined

    const filteredItems = items.filter(item => {
      const itemName = item.name ? item.name.toLowerCase() : ''; // Перевірка на null/undefined
      return (
        itemName.includes(normalizedFilter) ||
        item.number.includes(normalizedNumber)
      );
    });

    return filteredItems;
  }
);