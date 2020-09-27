const router = require('express').Router();
const express = require('express');
const URL = "C:/Users/mou/Documents/Tutoriel/Lab/NodeJs/Tp1/";
const products = require('../../Models/Test/product.test');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended : false }))
app.use(bodyParser.json());
const fs = require('fs');
router.route('/').get((req, res) => {
      items = JSON.stringify(products);
      fs.readFile( URL +'public/views/product.html', { encoding: 'utf8' }, (err, content) => {
        if(err) return console.error(err);
        res.send(content)
        });
}); 


function getDataStat()
{
    // varGroup3 = { $group : {"_id" : "$borough", "total" : {$sum : 1} } };
    // db.restaurants.aggregate( [ varMatch, varGroup3 ] );
    varUnwind = {$unwind : "$grades"}
    varGroup4 = { $group : {"_id" : "$borough", "moyenne" : {$avg : "$grades.score"} } };
    varSort2 = { $sort : { "moyenne" : -1 } }
    db.restaurants.aggregate( [ varUnwind, varGroup4, varSort2 ] );
}
function createProduct (product)
{
    return new Promise((resolve, reject) => {
       products.push(product)
       const error = false;
       if(!error)
           resolve();
       else
         reject('Error: Something went wrong')
    });
}
router.route('/').post((request, response) => {
  
   prduit = {
    "id" : products.length + 1,
    "name" : "Test produit",
    "price" : 200,
    "stock" : 10,
   }
   createProduct(prduit);
  
    console.log("le tableau clonné: ",request.body)
});

// Update
router.route('/:id').post((req, res) => {
   
});

// recherche
router.route('/:id').get((req, res) => {
    const found = products.some(product => product.id === parseInt(req.params.id))

    if(found) {
        res.json(products.filter(product => product.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ msg: `No user with the id of ${req.params.id}`})
    }
});

// delete
router.route('/:id').delete((req, res) => {

});

 function loadData() {
    fetch('/api/issues').then(response =>
    response.json()).then(data => {
        console.log("Total count of records:", data._metadata.total_count);
        data.records.forEach(issue => {
        issue.created = new Date(issue.created);
            if (issue.completionDate)
            issue.completionDate = new Date(issue.completionDate);
            });
    this.setState({ issues: data.records });
    }).catch(err => {
    console.log(err);
    });
};
function createIssue(newIssue) {
    fetch('/api/issues', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newIssue),
    }).then(response => response.json())
        .then(updatedIssue => {
        updatedIssue.created = new Date(updatedIssue.created);
            if (updatedIssue.completionDate)
            updatedIssue.completionDate = new Date(updatedIssue.completionDate);
        const newIssues = this.state.issues.concat(updatedIssue);
        this.setState({ issues: newIssues });
        })
    .catch(err => {
    alert("Error in sending data to server: " + err.message);
    });
   
}
module.exports = router;