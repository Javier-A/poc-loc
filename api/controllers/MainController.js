/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

//*
XLSX = require('xlsx');

module.exports = {
	index: function(req, res) {
		console.log('in index');

		var workbook = XLSX.readFile('/Users/jaarroyo/Downloads/location.xlsx');
		var first_sheet_name = workbook.SheetNames[0];
		console.log( first_sheet_name );

		res.view();
	},
	signup: function(req, res) {

	},
	login: function(req, res) {

	},
	chat: function(req, res) {

	}
};
/*/


/*
var MainController = {
	index: function(req, res) {
		//res.view();
	},
	signup: function(req, res) {

	},
	login: function(req, res) {

	},
	chat: function(req, res) {

	}
};
module.exports = MainController;
*/

