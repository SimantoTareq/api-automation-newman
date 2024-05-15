const newman = require('newman');

newman.run({

    //collection: requre(./collection/dmonet.json),
    collection: 'https://api.postman.com/collections/11448754-bf240395-a6f7-4e5d-a35e-adf48d81b257?access_key=PMAT-01HXVE4ANN1Y2HRM4KDATN0Q72',
   //environment:require(./collection/env.json),
    reporters: 'htmlextra',
    iterationCount :1,
    reporter: {
        htmlextra:{
            export: './Reports/report.html', //If not specified, the file will be written to 'newman/' in the current working directory.
        }
    }
}, function(err){
    if(err){throw err; }
    console.log('Collection run complete');
}

);