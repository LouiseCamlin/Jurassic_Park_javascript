var assert = require('assert');
var Dinosaur = require('../dinosaur.js');

describe("Dinosaur", function(){

  var velociraptor;
  var tyrannosaurus;
  var triceratops;

  beforeEach(function(){
    velociraptor = new Dinosaur("velociraptor", 5);
    tyrannosaurus = new Dinosaur("tyrannosaurus", 1);
    triceratops = new Dinosaur("triceratops", 3);
  })

  it("should have a type", function(){
    assert.strictEqual("velociraptor", velociraptor.type);
  })

  it("should have a number of children per year", function(){
    assert.strictEqual(5, velociraptor.offspringPerYear);
  })



})