class ApiError extends Error{

constructor(status,messege){
super()
this.status = status
this.message = messege
}

static Badreqest(message){
return new ApiError(404, message)


}

static internal(message){return new ApiError(500, message)}


static farbiden(message){
        return new ApiError(403, message)
        
        
        }




}

module.exports = ApiError