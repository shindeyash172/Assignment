const Contact = require("./Contact");
const ContactInfo = require("./ContactInfo");
class User {
  static allUser = [];
  static ID = 1;

  constructor(fullName, isAdmin, gender, country) {
    this.ID = User.ID++;
    this.fullName = fullName;
    this.isAdmin = isAdmin;
    this.gender = gender;
    this.country = country;
    this.contacts = [];
  }

  static newAdmin(fullName, gender, country) {
    if (typeof fullName != "string") {
      return " Invalid Invalid name";
    }
    return new User(fullName, true, gender, country);
  }

  newUser(fullName) {
    if (!this.isAdmin) {
      return " Unauthorized";
    }
    let userObj = new User(fullName, false, this.gender, this.country);
    User.allUser.push(userObj);
    return userObj;
  }
  getAllUsers() {
    if (!this.isAdmin) {
      return "Unauthorized";
    }
    return User.allUser;
  }

   getUserById(userId){
    // console.log(userId)
    if (!this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfuser, isUserFind] = User.findUser(userId);
    // console.log([indexOfuser, isUserFind])
    if (!isUserFind) {
      return " User Not Found";
    }

    return User.allUser[indexOfuser]

      

  }
  static findUser(userId) {
    for (let index = 0; index < User.allUser.length; index++) {
      // console.log(User.allUser[index]);
      if (userId == User.allUser[index].ID) {
        return [index, true];
      }
    }
    return [-1, false];
  }

  updateUsers(userId, parameter, newValue) {
    if (!this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfuser, isUserFind] = User.findUser(userId);
    if (!isUserFind) {
      return " User Not Found";
    }

    switch (parameter) {
      case " fullName ":
        if (typeof newValue != "string") {
          return "Invalid full Name Format";
        }
        User.allUser[indexOfuser].fullName = newValue;
        break;
      case " gender ":
        if (typeof newValue != "string") {
          return "Invalid gender ";
        }
        User.allUser[indexOfuser].gender = newValue;
        break;
      case " country ":
        if (typeof newValue != "string") {
          return "Invalid country";
        }
        User.allUser[indexOfuser].country = newValue;
        break;
      default:
        return "Parameter not found";
    }
  }
  deleteUser(userId) {
    if (!this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfuser, isUserFind] = User.findUser(userId);
    if (!isUserFind) {
      return " User Not Found";
    }
    User.allUser.splice(indexOfuser, 1);
  }

  createContact(contactfullName) {
    if (typeof contactfullName != "string") {
      return " Invalid contactfullName";
    }
    let contactCreated = new Contact(contactfullName);
    this.contacts.push(contactCreated);
    return contactCreated;
  }

    getContacts(userId) {
    if (this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfuser, isUserFind] = User.findUser(userId);

  
    if (!isUserFind) {
      return " User Not Found";
    }

    return this.contacts;
  }

  findContact(contactId) {
    for (let index = 0; index < this.contacts.length; index++) {
      if (contactId == this.contacts[index].Id) {
        return [index, true];
      }
    }
    return [-1, false];
  }

  updateContact(contactId, newValue) {
    if (!this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfContact, isContactFind] = this.findContact(contactId);
    if (!isContactFind) {
      return " Contact Not Found";
    }
    this.contacts[indexOfContact] = newValue;
    return contacts[indexOfContact];
  }

  createContactDetails(contactId, typeOfContact, valueOfContact) {
    if (this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfContact, isContactFind] = this.findContact(contactId);

    if (!isContactFind) {
      return " Contact Not Found";
    }
    let contactDetailsCreated = new ContactInfo(
      typeOfContact,
      valueOfContact
    );

    this.contacts[indexOfContact].contactInfos.push(contactDetailsCreated);

    return contactDetailsCreated;
  }

  
    getContactByid(contactId){
      if (this.isAdmin) {
        return " Unauthorized";
      }
      // console.log( contactId,contactInfoId)
      let [indexOfContact, isContactExist] = this.findContact(contactId);
    //   console.log([indexOfContact, isContactExist])
    
      if (!isContactExist) {
        return " contact Not Found";
      }
  
          return this.contacts[indexOfContact]
    }
       
    

  

  getContactInfoByid( contactId,contactInfoId){
    if (this.isAdmin) {
      return " Unauthorized";
    }
    //  console.log( contactId,contactInfoId)
    let [indexOfContact, isContactExist] = this.findContact(contactId);
    // console.log([indexOfContact, isContactExist])
  
    if (!isContactExist) {
      return " contact Not Found";
    }
     return this.contacts[indexOfContact].getcontactInfoByid(contactInfoId)
  }

  deleteContact(  contactId){
    if (this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactId);
    if (!isContactExist) {
      return " Contact Not Found";
    }
      this.contacts[indexOfContact].deleteContactDetails()
       this.contacts.splice(indexOfContact, 1);
  }



  deleteContactInfo( contactId){

    if (this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactId);
    if (!isContactExist) {
      return " Contact Not Found";
    }
      this.contacts[indexOfContact].deleteContactDetails()
      //  this.contacts.splice(indexOfContact, 1);
  }
  deleteContactInfoById( contactId,contactInfoId){

    if (this.isAdmin) {
      return " Unauthorized";
    }
    let [indexOfContact, isContactExist] = this.findContact(contactId);
    if (!isContactExist) {
      return " Contact Not Found";
    }
      this.contacts[indexOfContact].deleteContactDetailsById(contactInfoId)
      //  this.contacts.splice(indexOfContact, 1);
  }

  
  
  



  }


let admin = User.newAdmin("Yash Shinde", "M", "India");
let user1 = admin.newUser("Akash Yadav", "M", "India");
//  user1.createContact("Rohit sabat");
//  user1.createContactDetails(0, "moblie", "100051005");
user1.createContact("Nitesh Kumavat");

console.log(user1.createContactDetails(0, "moblie", "1234567891"));
user1.createContact("Rohit sabat");
 user1.createContactDetails(1, "moblie", "100051005");
console.log(user1)

console.log(user1.getContactInfoByid(1,1));
// console.log(user1.getContactInfoByid(1))
