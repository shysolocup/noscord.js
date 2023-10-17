module.exports = async (handler) => {
    
    await handler.init("messageCreate", async (/**/) => {
        let types = this.types;
        let msg = new types.Message;
        
        await msg.apply(...Array.from(arguments));
    
        return msg;
    });
    
}
