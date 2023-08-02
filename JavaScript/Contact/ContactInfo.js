class ContactInfo{
    static Id=0
   
       constructor(typeOfContact,valueOfContact){
       this.Id=ContactInfo.Id++
       this.typeOfContact=typeOfContact
       this.valueOfContact=valueOfContact
       }
   }
   
   module.exports=ContactInfo