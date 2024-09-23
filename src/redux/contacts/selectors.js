import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/slice';

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (items, filter, number) => {
    const normalizedFilter = filter ? filter.toLowerCase() : ''; 
    const normalizedNumber = number || ''; 

    const filteredItems = items.filter(item => {
      const itemName = item.name ? item.name.toLowerCase() : ''; 
      return (
        itemName.includes(normalizedFilter) ||
        item.number.includes(normalizedNumber)
      );
    });

    return filteredItems;
  }
);