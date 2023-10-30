const UtilService = require('../index.js');
const { Soup } = require('stews');


UtilService.newC("List", class {
	constructor(per, object, start=1) {
        var obj = Soup.from(object);

        this.pages: 1;
    	this.length: 0;
			
		this.page: {
			num: start,
			content: null
		};

		
    	this.contents: new Soup([ (obj.isPair()) ? Soup.from(Object) : Soup.from(Array) ]);


        var page = 0;
        var count = 0;


        for (let i = 0; i < obj.length; i++) {
                if (!this.contents.get(page+1) && count >= per) { 
                    page += 1; 
                    this.pages += 1; 

                    this.contents.push( (obj.isPair()) ? Soup.from(Object) : Soup.from(Array) ); 
                    
                    count = 0;
                }


                if (obj.isPair()) this.contents[page].push( ...obj.entries[i] );
                else this.contents[page].push( obj[i] );

                this.length += 1;
                count += 1;
       
        }

		
		this.page.content = this.get(start);
    }
	

	get(page) {
		return this.contents[page-1];
	}

	
	to(page) {
		this.page.num = page;
		this.page.content = this.get(page);

		return this.page;
	}

	
	next(by=1) {
		let { num, content } = this.page;

		if (num+by > this.pages) {
			this.page.num = 1;
			this.page.content = this.get(1);
		}
		else {
			this.page.num = num+by;
			this.page.content = this.get(num+by);
		}
	}

	
	prev(by=1) {
		let { num, content } = this.page;

		if (num-by < 1) {
			this.page.num = this.pages;
			this.page.content = this.get(this.pages);
		}
		else {
			this.page.num = num-by;
			this.page.content = this.get(num-by);
		}
	}
});


module.exports = Pager;
