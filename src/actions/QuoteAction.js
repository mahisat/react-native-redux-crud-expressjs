import {SAMPLE_ACTION, ADD_QUOTE, UPDATE_QUOTE, DELETE_QUOTE} from './types';

export const sampleQuoteAction = () => ({
  type: SAMPLE_ACTION,
});

// Add Quote
export const addQuote = (quote) => ({
  type: ADD_QUOTE,
  data: {quote},
});

// Update Quote
export const updateQuote = (quote) => ({
  type: UPDATE_QUOTE,
  data: {quote},
});

// Delete Quote - DELETE (D)
export const deleteQuote = (id) => ({
  type: DELETE_QUOTE,
  data: {id},
});
