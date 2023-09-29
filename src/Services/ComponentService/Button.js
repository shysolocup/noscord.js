const ComponentService = require('./index.js');


ComponentService.newC("Button", class {
    constructor(data) {
        
        // component type
        data.type = 2;

        
        // custom id
        data.custom_id = (data.id && !data.custom_id) ? data.id : (data.customId && !data.custom_id) ? data.customId : data.custom_id;

        
        // style
        data.style = ((style) => {
            
            // if style is not given default to primary
            if (!style) return 1;
            

            // if style is a number then return the number
            return  (typeof style == "number") ? style : 

                
            // if style is a string format that out
            (() => {
                style = style.toLowerCase();

                return  (style == "primary")    ? 1 : // primary style (bit 1)
                        (style == "secondary")  ? 2 : // secondary style (bit 2)
                        (style == "success")    ? 3 : // success style (bit 3)
                        (style == "danger")     ? 4 : // danger style (bit 4)
                        (style == "link")       ? 5 : // link style (bit 5)
                                                  1; // default to primary if not given
            })()
        })(data.style);


        return data;
    }
});

module.exports = Button;

require('./functions/lock.js');
require('./functions/lock.js');
