const UtilService = require('../index.js');
const { Soup } = require('stews');


UtilService.newC("List", class {
	constructor(per, object, start=1) {
        var obj = Soup.from(object);

        var paged = new Soup({
            pages: 1,
            length: 0,
			
			page: {
				num: start,
				content: null
			},
			
            contents: new Soup([ (obj.isPair()) ? Soup.from(Object) : Soup.from(Array) ]),

            get(page) {
                return this.contents[page-1];
            },

			next() {
				let { num, content } = this.page;

				if (num+1 > pages)
			}
        });


        var page = 0;
        var count = 0;


        for (let i = 0; i < obj.length; i++) {
                if (!paged.contents.get(page+1) && count >= per) { 
                    page += 1; 
                    paged.pages += 1; 

                    paged.contents.push( (obj.isPair()) ? Soup.from(Object) : Soup.from(Array) ); 
                    
                    count = 0;
                }


                if (obj.isPair()) paged.contents[page].push( ...obj.entries[i] );
                else paged.contents[page].push( obj[i] );

                paged.length += 1;
                count += 1;
       
        }

		
		paged.page.content = paged.get(start);

		
        return paged;
    }
});


module.exports = Pager;
