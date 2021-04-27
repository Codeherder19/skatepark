class SkatePark {
  constructor(obj) {
    this.name = obj.name;
    this.yearFounded = obj.year;
    this.style = obj.type;
    this.features = obj.features;
    this.isPrivate = obj.isPrivate || false;
    this.cost = obj.price || 0;
    this.occupants = [];
  }
  admit(skater) {
    if (this.occupants.length === 3) {
      return 'Sorry, we are at max capacity. Thank you for understanding.';
    }
    this.occupants.push(skater);
    if (this.cost === 0) {
      return 'Welcome to the free Major Taylor Skatepark!';
    } else if (this.cost > skater.money) {
      return `Sorry, you don't have enough money.`;
    } else {skater.money -= this.cost;
    return 'Welcome to Curbside, the cost will be $12.00.'
  }
  }
}












module.exports = SkatePark;
