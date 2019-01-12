const { error_messages } = require("./constants");
/** 
 * @param {object} req 
 * @param {Object} rule 
 * @returns {*} value
 * extracts value from header, param, body, query
 */
const extractValue = (req, rule) => {
    if (!rule.from) throw new `from${error_messages.required_field_missing}`; // to extract from which type
    if (!rule.key) throw new `key${error_messages.required_field_missing}`;  // what is the key of the value
    const { key, from } = rule;
    switch (from) {
        case "header":
            return req.get(key);
        case "param":
            return req.query[key];
        case "query":
            return req.params[key];
        case "body":
            return req.body[key];
    }
}

exports.extractValue = extractValue;