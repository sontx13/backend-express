const Customer = require("../model/Customer");

const createCustomerSevice = async (customerData) => {
   try {
      let results = await Customer.create({
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
        image: customerData.image
      })

      return results;
   } catch (error) {
        console.log("error=="+error);
        return null;
   }
}

module.exports = {
    createCustomerSevice
}