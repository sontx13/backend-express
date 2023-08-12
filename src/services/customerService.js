const Customer = require("../model/Customer");

const createCustomerService = async (customerData) => {
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

const createArrayCustomerService = async (arrayCustomerData) => {
    try {
        let results = await Customer.insertMany(arrayCustomerData);

        return results;
    } catch (error) {
        console.log(">>error"+error)
        return null;
    }
}


const getCustomersService = async () => {
    try {
        let results = await Customer.find({});

        return results;
    } catch (error) {
        console.log(">>error"+error)
        return null;
    }
}

const putCustomersService = async (customerData) => {
    try {
        let results = await Customer.updateOne(
            {_id:customerData.id},
            {email:customerData.email,
            name:customerData.name,
            address:customerData.address}
        );

        return results;
    } catch (error) {
        console.log(">>error"+error)
        return null;
    }
}

const deleteCustomersService = async (id) => {
    try {
        let results = await Customer.deleteById(id);
        return results;
    } catch (error) {
        console.log(">>error"+error)
        return null;
    }
}

module.exports = {
    createCustomerService,createArrayCustomerService,getCustomersService,putCustomersService,deleteCustomersService
}