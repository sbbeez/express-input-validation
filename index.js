const { extractValue, dataTypeCheck } = require("./utils");

const validate = (rules) => {
    return (req, res, next) => {
        let error_messages = [];
        rules.forEach(rule => {
            let value = extractValue(req, rule);
            if (!value) {
                error_messages.push(rule.message || `Invalid ${rule.key}, value not found in ${rule.from}`);
                return;
            }
            if (rule.datatype && !dataTypeCheck(rule.datatype, value)) {
                error_messages.push(rule.message || `Invalid ${rule.key}, required a ${rule.datatype} value`);
                return;
            }
            if (rule.validation_function && !rule.validation_function(value)) {
                error_messages.push(rule.message || `Invalid ${rule.key}`);
            }
        });
        if (error_messages) {
            res.status(400);
            res.send({ error_messages });
        } else {
            next();
        }
    }
}

exports.validate = validate;