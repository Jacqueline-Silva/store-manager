const runSchema = (schema) => async (valueValidate) => {
  const { error, value } = await schema.validate(valueValidate);
  const { details } = error;

  if (error) {
    if (details[0].message.includes('is required')) {
      error.code = 400;
      throw error;
    }
    if (details[0].message.includes('length')) {
      error.code = 422;
      throw error;
    }
    return;
  }

  return value;
};

module.exports = {
  runSchema,
}; 