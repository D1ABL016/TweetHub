class ApiResponse{
    constructor(data,statusCode,message="succesfully executed"){
        this.data = data
        this.statusCode = statusCode
        this.message = message
        this.success = statusCode < 400
    }
    
}
module.exports = ApiResponse