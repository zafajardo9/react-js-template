/**
 * Shared schema contracts used across the BFF, hooks, and UI components.
 */

export const fieldTypes = {
  TEXT: 'text',
  NUMBER: 'number',
  SELECT: 'select',
};

/**
 * @typedef {Object} FieldSchema
 * @property {string} id
 * @property {string} label
 * @property {'text'|'number'|'select'} type
 * @property {string=} placeholder
 * @property {Array<{label: string, value: string|number>}=} options
 * @property {string=} linkedEntity
 */

/**
 * @typedef {Object} EntitySchema
 * @property {string} id
 * @property {string} name
 * @property {FieldSchema[]} fields
 */

/**
 * @typedef {Object} SchemaResponse
 * @property {EntitySchema[]} entities
 */
