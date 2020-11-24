export const required = value => value ? undefined : "Field is required";

export const maxLengthValidatorCreator = maxLength => value =>
  (value && value.length > maxLength) ? `Max length is ${maxLength}` : undefined;
