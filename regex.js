const alphanumericRegex = (value) => /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(value);
const onlyAlphabets = (value) => /^[a-zA-Z]+$/.test(value);

exports.alphanumericRegex = alphanumericRegex;
exports.onlyAlphabets = onlyAlphabets;
