import * as yup from "yup";

export function createYupSchema(schema, config) {
  const { key, validationType, rules = [] } = config;
  if (!yup[validationType]) {
    return schema;
  }
  let validator = yup[validationType]();
  rules.forEach(validation => {
    const { params, type } = validation;
    if (!validator[type]) {
      return;
    }
    validator = validator[type](...params);
  });
  schema[key] = validator;
  return schema;
}