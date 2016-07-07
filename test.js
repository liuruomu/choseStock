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

var query=connection.query(cx);
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
  // console.log(result[0])
}




// connection.query (cx,function(err,results)
//   {
//            // for (var i=0,len=results.length;i<len;i++)
//            // {
//            // 	array[i]=results.secID;
//            // }
//            console.log(results[0]);
            

//      }
// )

