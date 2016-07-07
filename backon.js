var sys = require('sys');
var mysql = require('mysql')


  
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

connection.query('select * FROM mktEqud where secID like "000002.%" order by tradeDate desc  limit 5;', function(err, results) {
for(var i=0,len=results.length;i<len;i++){
var item = results[i]
console.log(item.ticker)
}
 //console.log(err,results)
//console.log("Continents : " + database.findAllContinents());

//----------------------还有额外的rows的信息----------------
//connection.query('select * FROM mktEqud where secID like "000002.%" order by tradeDate desc  limit 5;', function(err, rows, fields) {
//  console.log(err,rows,fields)
})



//'SELECT * FROM market.mktEqud;'
var sys = require('sys');
var mysql = require('mysql')


  
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

connection.query('select * FROM mktEqud where secID like "000002.%" order by tradeDate desc  limit 5;', function(err, results)


{
for(var i=0,len=results.length;i<len;i++){
var item = results[i]
console.log(results[0].tradeDate)
}



})




 //console.log(err,results)
//console.log("Continents : " + database.findAllContinents());



//'SELECT * FROM market.mktEqud;'


2
var mysql = require('mysql')


  
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

connection.query('select * FROM mktEqud where secID like "000002.%" order by tradeDate desc  limit 5;', function(err, results){

 var a1=results[0].ClosePrice;
 var a2=results[1].ClosePrice;
 var a3=results[2].ClosePrice;
 var a4=results[3].ClosePrice;
 var a5=results[4].ClosePrice;

 var A1,A2,A3,A4;
//A1
 if((a4-a5)/a5>0.099){
    A1=1;
 }
 else{
    A1=0;
 }
//A2
 if((a3-a4)/a4<0.04&&(a3>a4)){
    A2=1;
 }
 else{
    A2=0;
 }
//A3
 if((a2-a4)/a4<0.04&&(a2>a4)){
    A3=1;
 }
 else{
    A3=0;
 }
//A4
 if((a1-a4)/a4<0.04&&(a1>a4)){
    A4=1;
 }
 else{
    A4=0;
 }
 //
 if(A1&&A2&&A3&&A4){
   console.log('yes')
 }
 else{
   console.log('no')
}


})

3.var mysql = require('mysql')


  
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

//select * FROM mktEqud where secID like "000001.%" order by tradeDate desc  limit 5;
//select * FROM mktEqud where tradeDate > "2016-03-10" group by tradeDate,secID order by tradeDate desc;




var query = connection.query('select * FROM mktEqud where tradeDate > "2016-01-10" group by tradeDate,secID order by tradeDate desc');
query
  .on('error', function(err) {
    // Handle error, an 'end' event will be emitted after this as well
  })
  .on('fields', function(fields) {
    // the field packets for the rows to follow
  })
  .on('result', function(row) {
    // Pausing the connnection is useful if your processing involves I/O
    connection.pause();

    processRow(row, function() {
      connection.resume();
    });
  })
  .on('end', function() {
    processEnd()
    // all rows have been received
  });
var result = {}
function processRow(data,cb){
  if(!result[data.secID]){
      result[data.secID] = []
  }
result[data.secID].push(data)
  cb()
}
function processEnd(){
   console.log('end')
   //console.log(result)
}





4.

var mysql = require('mysql')
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

//select * FROM mktEqud where secID like "000001.%" order by tradeDate desc  limit 5;
//select * FROM mktEqud where tradeDate > "2016-03-10" group by tradeDate,secID order by tradeDate desc;
//select distinct secID FROM mktEqud  order by secID;
//

var array=new Array();
//array=[];
array[0]='"000001.XSHE"';
array[1]='"000002.XSHE"';

for(var i=0;i<2;i++){
var str = 'select * FROM mktEqud where secID=' + array[i]+'order by tradeDate desc  limit 5;';

connection.query(str,function(err,results){

if(err){

throw(err);
return callback(err);

}
5.



var mysql = require('mysql')
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

//select * FROM mktEqud where secID like "000001.%" order by tradeDate desc  limit 5;
//select * FROM mktEqud where tradeDate > "2016-03-10" group by tradeDate,secID order by tradeDate desc;
//select distinct secID FROM mktEqud  order by secID;
//

var array=new Array();
//array=[];
array[0]='"000001.XSHE"';
array[1]='"000002.XSHE"';

for(var i=0;i<2;i++){
	var str = 'select * FROM mktEqud where secID=' + array[i]+'order by tradeDate desc  limit 5;';

	connection.query(str,function(err,results){

	f(err){

	throw(err);
	return callback(err);

	}

	var a1=results[0].ClosePrice;
	 var a2=results[1].ClosePrice;
	 var a3=results[2].ClosePrice;
	 var a4=results[3].ClosePrice;
	 var a5=results[4].ClosePrice;

	 var A1,A2,A3,A4;
	//A1
	 if((a4-a5)/a5>0.099){
	    A1=1;
	 }
	 else{
	    A1=0;
	 }
	//A2
	 if((a3-a4)/a4<0.04&&(a3>a4)){
	    A2=1;
	 }
	 else{
	    A2=0;
	 }
	//A3
	 if((a2-a4)/a4<0.04&&(a2>a4)){
	    A3=1;
	 }
	 else{
	    A3=0;
	 }
	//A4
	 if((a1-a4)/a4<0.04&&(a1>a4)){
	    A4=1;
	 }
	 else{
	    A4=0;
	 }
	 //
	 if(A1&&A2&&A3&&A4){
	   console.log('yes')
	 }
	 else{
	   console.log('no')
	}



})

}


3.17.17:51//new problem  large data
var mysql = require('mysql')
var connection = mysql.createConnection({
	host:'172.24.13.2',
	port:'3306',
	user:'market',
	password:'market',
	database:'market'
})

connection.connect(function(err,data){
  console.log(err,data)
})

//---------------直接显示得到的结果，没有其他信息

//select * FROM mktEqud where secID like "000001.%" order by tradeDate desc  limit 5;
//select * FROM mktEqud where tradeDate > "2016-03-10" group by tradeDate,secID order by tradeDate desc;
//select distinct secID FROM mktEqud  order by secID;
//

var array=new Array();

var sql='select distinct secID from mktEqud  order by secID;';
var q='select * from mktEqud where secID in '+sql+'limit 1;';
var cx='select *from mktEqud  group by secID having max(tradeDate) limit 900;';
var test='select * FROM mktEqud where secID like "000001.%" order by tradeDate desc  limit 5;';
connection.query (cx,function(err,results)
  {
           // for (var i=0,len=results.length;i<len;i++)
           // {
           // 	array[i]=results.secID;
           // }
           console.log(results[0]);
            console.log('yes')

     }
)


