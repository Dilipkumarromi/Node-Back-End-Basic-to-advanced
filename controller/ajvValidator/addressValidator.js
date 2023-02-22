const addressValidatorSchema = {
    type: "object",
    properties: {
        city: {type: "string",maxLength: 5},
        email: {type: "string"},
        mobile: {type: "number"}
    },
    required: ["city","email","mobile"],
    additionalProperties: true
  }
  module.exports=addressValidatorSchema