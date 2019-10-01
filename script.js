class User {
  constructor(name, age, email) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

class Adminstrator extends User {
  constructor(name, age, email, role) {
    super(name, age, email);
    this._role = role;
  }

  get role() {
    return this._role;
  }

  set role(newRole) {
    this._role = newRole;
  }
}

const person = new Adminstrator("Jerry", 20, "jerry@yahoo.com", "Admin");

console.log(person.name);

person.role = "User";

document.getElementById("userList").innerHTML = person.name;
