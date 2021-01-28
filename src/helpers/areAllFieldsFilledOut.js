/* eslint-disable func-names */
/* eslint-disable no-restricted-syntax */
export default function (formFields) {
  for (const field in formFields) {
    if (formFields[field].trim() === '') {
      return false;
    }
  }
  return true;
}
