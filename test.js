var exiler = require("exiler");

var options = {
	route: {
		index: {
			ex_data: {
				aaa: 1
			},
			pageAction: {
				ex_data: {
					pageData: "I'm the page"
				},
				ex_template: "page.ejs"
			}
		}
	}
};

exiler.server(options);