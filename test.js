var exiler = require("exiler");

var options = {
	publicFolder: "src/public",
	templateFolder: "src/template",
	route: {
		index: {
			ex_data: function (resolve) {
				resolve({aaa: 1});
			}
		},
		nodata: {
			ex_template: "nodata.ejs"
		},
		pageAction: {
			ex_data: {
				pageData: "I'm the page"
			},
			ex_template: "page.ejs"
		},
		paramTest: {
			ex_param_id: {
				ex_data: function (resolve, param) {
					resolve({
						id: param.id
					});
				},
				ex_template: "id.ejs",
				ex_param_secondId: {
					ex_data: function (resolve, param) {
						resolve({
							id: param.id,
							secondId: param.secondId
						});
					},
					ex_template: "id.ejs"
				}
			}
		}
	}
};

exiler.server(options);