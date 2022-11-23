const Park = function (name, ticketPrice, dinosaurCollection) {
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur);
  };

  Park. prototype.removeDinosaur = function(dinosaur) {
    this.dinosaurCollection.splice(this.dinosaurCollection.indexOf(dinosaur), 1)
  }
module.exports = Park  