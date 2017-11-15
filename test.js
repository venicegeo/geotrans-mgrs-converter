/** 
 * Example usage
 * @author Gibran Parvez
 * Last updated: 11/15/2017
 */
const converter = require("./geotransMgrsConverter");
//Set environment if shell script fails
const setenv= require('setenv');
setenv.set('MSPCCS_DATA', 'geotrans3.7/data');

//Constant for test
EXAMPLE_MGRS_STRING = "12UUA8432340791";
EXAMPLE_DATUM = "WGE";

//Instantiate new converter
let myMgrsConverter = new converter(EXAMPLE_DATUM);

let exampleResult = myMgrsConverter.convert(EXAMPLE_MGRS_STRING);

console.log(exampleResult);
