class User {
    constructor(name, age, work, food, color) {
      this.name = name;
      this.age = age;
      this.work = work;
      this.food = food;
      this. color = color;
    }
}

window.onload = function(){
    var userData = {
        name: prompt("What is your name?"),
        age: prompt("How old are you?"),
        work: prompt("Where do you work?"),
        food: prompt("What's your favorite food?"),
        color: prompt("What's your favorite color?")
    }

    var user = new User(userData.name, userData.age, userData.work, userData.food, userData.color);

    document.getElementById('heading').innerHTML = "A simple site about " + user.name;
    document.getElementById('heading').style.backgroundColor = user.color;

    var divs = document.getElementsByTagName('div');
    divs[0].innerHTML = user.name + ' is ' + user.age + ' years old.';
    divs[1].innerHTML = user.name + ' works at ' + user.work + '.';
    divs[2].innerHTML = user.name + ' likes ' + user.food + '.';

}