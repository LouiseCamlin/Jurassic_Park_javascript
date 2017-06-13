var Park = function(){
  this.enclosure = [];
}

Park.prototype = {
  addDinosaur: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaurs: function(type){
    for (var i = this.enclosure.length -1; i >= 0; i--){
      if (this.enclosure[i].type === type) {
        this.enclosure.splice(i, 1);
      }
    }
  },


  getFertileDinos: function() {
    var fertileDinos = []
    for (var dinosaur of this.enclosure) {
      if (dinosaur.offspringPerYear > 2)
        fertileDinos.push(dinosaur);
    }
    return fertileDinos
  }


   }




module.exports = Park;


