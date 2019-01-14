const { error_messages } = require("./constants");
const { alphanumericRegex, onlyAlphabets } = require("./regex");

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
            if (!req.body) return undefined;
            return req.body[key];
    }
}


/**
 * takes a type and value and checks if the type required and datatype of value is matching
 * @param {string} type 
 * @param {any} value 
 */

const dataTypeCheck = (type, value) => {
    switch (type.toLowerCase()) {
        case "number":
        case "int":
        case "integer":
        case "num":
            return !isNaN(Number(value));
        case "str":
        case "string":
            return typeof value == "string" && isNaN(Number(value)); // checks if typeof is string and first character is not a number
        case "only-alpha":
            return typeof value == "string" && isNaN(Number(value)) && onlyAlphabets.test(value);
        case "alphanumeric":
            return typeof value == "string" && isNaN(Number(value)) && alphanumericRegex.test(value);
        case "float":
            return !isNaN(Number(value)) && Number(value) % 1 != 0;
        case "object":
        case "obj":
            return typeof value == "object";
    }
}


exports.extractValue = extractValue;
exports.dataTypeCheck = dataTypeCheck;