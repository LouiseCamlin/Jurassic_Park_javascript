var assert = require('assert');
var Dinosaur = require('../dinosaur.js');
var Park = require('../park.js');


describe("Park", function(){

  var park;

  beforeEach(function(){
    park = new Park();
    dinosaur1 = new Dinosaur("velociraptor", 5);
    dinosaur2 = new Dinosaur("tyrannosaurus", 1);
    dinosaur3 = new Dinosaur("triceratops", 3);
    dinosaur4 = new Dinosaur("triceratops", 5);
    dinosaur5 = new Dinosaur("triceratops", 2);

  })

  it("should start empty", function(){
    assert.strictEqual(0, park.enclosure.length);
  })

  it("can add dinosaurs to enclosure", function() {
    park.addDinosaur(dinosaur2);
    assert.strictEqual(1, park.enclosure.length);
  })

  it("can add multiple dinosaurs", function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    assert.strictEqual(3, park.enclosure.length);
  })

  it("can all remove dinosaurs of similar type", function(){
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur5);
    park.addDinosaur(dinosaur2);
    assert.strictEqual(5, park.enclosure.length);
    park.removeDinosaurs("triceratops");
    assert.strictEqual(2, park.enclosure.length);
  })

  it("can get all the dinsaurs with more than 2 kids", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.addDinosaur(dinosaur5);
    assert.strictEqual(5, park.enclosure.length);
    assert.strictEqual(3, park.getFertileDinos().length);
  })


})