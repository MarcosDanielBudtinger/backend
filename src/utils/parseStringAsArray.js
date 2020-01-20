module.exports = function parseStringAsArray(arrayAsString){
    return arrayAsString.split(',').map( tech => arrayAsString.trim());
}