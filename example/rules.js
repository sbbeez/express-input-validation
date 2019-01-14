module.exports = [
    {
        "from": "query",
        "key": "emailId",
        validation_function: value => value.indexOf("@") > -1
    },
    {
        "from": "header",
        "key": "auth_token"
    },
    {
        "from": "param",
        "key": "id",
        validation_function: value => Number(value)
    },
    {
        "from": "body",
        "key": "value_from_body"
    },
    {
        "from": "query",
        "key": "numberCheck",
        "datatype": "num"
    },
    {
        "from": "query",
        "key": "stringTest",
        "datatype": "string"
    },
    {
        "from": "query",
        "key": "floatTest",
        "datatype": "float"
    },
    {
        "from": "query",
        "key": "alphanumericTest",
        "datatype": "alphanumeric"
    },
    {
        "from": "query",
        "key": "onlyAlphaTest",
        "datatype": "only-alpha"
    },
]