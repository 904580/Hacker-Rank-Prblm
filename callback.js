// callback
function modifyArr(arr, callback){
    arr.push(23);
    callback();
}
var arr =[3,8,0,2,4];
modifyArr(arr, function(){
    console.log("array added",arr)
});