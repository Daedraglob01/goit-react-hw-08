import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/slice';

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (items, filter, number) => {
    const normalizedFilter = filter.toLowerCase(); 

    const filteredItems = items.filter(item => {
      const itemName = item.name.toLowerCase(); 
      return (
        itemName.includes(normalizedFilter) ||
        item.number.includes(normalizedFilter)
      );
    });

    return filteredItems;
  }
);