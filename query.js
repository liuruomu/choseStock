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





connection.query('select disti FROM mktEqud where secID like "00000j.%" order by tradeDate desc  limit 5;', function(err, results){

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
   console.log(results.secID)
 }
 else{
   console.log('no')
}

})

}

