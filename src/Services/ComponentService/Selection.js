const ComponentService = require('./index.js');


ComponentService.newC("Selection", class {
    constructor(data) {
        
        // component type
        data.type = 3;

        
        // custom id
        // can be data.id, data.customId, or data.custom_id
        data.custom_id = (data.id && !data.custom_id) ? data.id : (data.customId && !data.custom_id) ? data.customId : data.custom_id;

        
        // placeholder text
        // can be data.text, data.label, or data.placeholder
        data.placeholder = (data.text && !data.placeholder) ? data.text : (data.label && !data.placeholder) ? data.label : data.placeholder;


        // minimum values
        // can be data.min, data.minimum, or data.min_values
        data.min_values = (data.min && !data.min_values) ? data.min : (data.minimum && !data.min_values) ? data.minimum : data.min_values;


        // maximum values
        // can be data.max, data.maximum, or data.max_values
        data.max_values = (data.max && !data.max_values) ? data.max : (data.maximum && !data.max_values) ? data.maximum : data.max_values;


        return data;
    }
});
