const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park;
  let dinosaur;
  beforeEach(function () {
    park = new Park('DinoPark', 12, true);
    dinosaur1 = new Dinosaur('t-rex', 'Carnivore', 24);
    dinosaur2 = new Dinosaur('Triceratops', 'herbivore', 26);
    dinosaur3 = new Dinosaur('pterodaptyl', 'carnivore', 12);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'DinoPark');
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 12)
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurCollection;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur1);
    const actual = [dinosaur1];
    assert.deepStrictEqual(actual, park.dinosaurCollection);
  });

  xit('should be able to remove a dinosaur from its collection', function (){
    park.removeDinosaur
    const actual = park.dinosaurCollection.pop ()
    assert.strictEqual(park.dinosaurCollection, 0)
  });

  xit('should be able to find the dinosaur that attracts the most visitors');

  xit('should be able to find all dinosaurs of a particular species');

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');

});
