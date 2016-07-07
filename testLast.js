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
//select * FROM mktEqud where tradeDate > "2016-01-10" group by tradeDate,secID order by tradeDate desc

var sql='select *from mktEqud  group by secID having max(tradeDate) ;'

var query = connection.query(sql);
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
      connection.resume();//connection again
    });
  })
  .on('end', function() {
    processEnd()
    // all rows have been received
  });





var array=new Array();
array=[];
function processRow(data,cb){

 array.push(data.secID);

 cb();
}



var flag=0;


function processEnd(){
        for (var i=0;i<array.length;i++){
          
       var str = 'select * FROM mktEqud where secID=' +'"'+array[i]+'"'+'order by tradeDate desc  limit 5;';
     //  console.log(str);
          connection.query(str,function(err,results){
            if(err){
              throw(err);
              return callback(err);
            }

           else{
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
    console.log(results[0].secID);
    flag=1;
   }
  //  else{

  //    //console.log('no')
  //    console.log(results[0].secID);
  // }
           }


          })
        }

    if(flag==0){
      console.log('no stock ')
    }
}

   // for(var i=0;i<array.length;i++){
   //        var str = 'select * FROM mktEqud where secID=' + array[i]+'order by tradeDate desc  limit 5;';
   //        connection.query(str,function(err,results){

   //             f(err){
   //             throw(err);
   //             return callback(err);
   //           }

  














 // console.log(array[0])
