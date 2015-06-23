var exiler = require("exiler");

var options = {
	route: {
		index: {
			ex_data: {
				aaa: 1
			}
		},
		pageAction: {
			ex_data: {
				pageData: "I'm the page"
			},
			ex_template: "page.ejs"
		},
		ex_param_id: {
			ex_data: function (param) {
				return {
					id: param.id
				}
			},
			ex_template: "id.ejs",
			ex_param_secondId: {
				ex_data: function (param) {
					return {
						id: param.id,
						secondId: param.secondId
					}
				},
				ex_template: "id.ejs"
			}
		}
	}
};

exiler.server(options);