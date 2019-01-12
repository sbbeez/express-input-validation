const { error_messages } = require("./constants");
/** 
 * @param {object} req 
 * @param {Object} rule 
 * @returns {*} value
 * extracts value from header, param, body, query
 */
const extractValue = (req, rule) => {
    if (!rule.from) throw new Error(`from ${error_messages.required_field_missing}`); // to extract from which type
    if (!rule.key) throw new Error(`key ${error_messages.required_field_missing}`);  // what is the key of the value
    const { key, from } = rule;
    switch (from) {
        case "header":
            return req.get(key);
        case "param":
            return req.params[key];
        case "query":
            return req.query[key];
        case "body":
            if(!req.body) return undefined;
            return req.body[key];
    }
}

exports.extractValue = extractValue;