class BaseError extends Error{
    constructor(message,name,httpstatuscode,specificMessage){
    super(message,name)
        this.name = name
        this.httpstatuscode = httpstatuscode
        this.speceficMessage = specificMessage
    }
}
module.exports = BaseError
