const express = require('express')
const app = express()
const PythonShell = require('python-shell');

var path=require('path');

app.get('/res/api', (req, res, next) => {
  let options = {
    mode: 'text',
    pythonPath: 'C:/Users/diana/AppData/Local/Programs/Python/Python36/python.exe',
    scriptPath: './',
    args: [req.query.age, req.query.glycemie, req.query.shakiness, req.query.hunger, req.query.sweating, req.query.headach, req.query.diabetic_parents, req.query.pale, req.query.urination, req.query.thirst, req.query.blurred_vision, req.query.dry_mouth, req.query.smelling_breath, req.query.shortness_of_breath]
  };

  let details = {
    age: options.args[0],
    glycemie: options.args[1],
    shakiness: options.args[2],
    hunger: options.args[3],
    sweating: options.args[4],
    headache: options.args[5],
    parents: options.args[6],
    pale: options.args[7],
    urination: options.args[8],
    thirst: options.args[9],
    blurred_vision: options.args[10],
    dry_mouth: options.args[11]
  }

  PythonShell.run('expert-system.py', options, (err, results) => {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log(results);

    res.json({ "here are your results": results })
  });

});
       

  app.get('/',function(req,res){
  res.sendFile('index.html',{root: path.join(__dirname,'./')})
 // res.render('/res/api');
});
app.post('/res/api',function(req,res){
 let Age=age;
  let Glycemie=glycemie;
  let Shakiness=shakiness;
    let Hunger=hunger;
      let Sweating=sweating;
    let Headach= headach;
  let Diabetic_parents= diabetic_parents;
 let Pale= pale;
 let Urination=urination;
 let Thirst=thirst;
 let Burred_vision=blurred_vision;
 let Dry_mouth=dry_mouth;
 let Smelling_breath= smelling_breath;
  let Shortness_of_breaath=shortness_of_breath;
res.render('res/api',{
  Age,Glycemie,Hunger,Sweating,Headach,Diabetic_parents,Pale,Urination,Thirst,Burred_vision,Dry_mouth,Smelling_breath
})
});



app.listen(3000, () => console.log('Example app listening on port 3000!'))