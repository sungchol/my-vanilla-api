module.exports = async function (context, req) {
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        //body: responseMessage
        body: {
            text: "Hello from the API"
        }
    };
}