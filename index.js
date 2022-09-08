class Circle {
 constructor (radius) {
    this.radius = radius;
 }


get diameter () {
    return this.radius + this.radius; 
}

get circumference () {
    return (this.radius * Math.PI) * 2;
}

get area () {
    return Math.PI * this.radius ** 2;
}
set area (num) {
this.radius = Math.sqrt(num/Math.PI);
}

set diameter (num) {
 return  this.radius = num / 2;
}

set circumference (num) {
this.radius = num/(Math.PI * 2) 
}
}