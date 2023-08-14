const Customer = require("../model/Customer");
const aqp = require('api-query-params');

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


const getCustomersService = async (limit,page,reqQuery) => {

    try {
        let results = null;
        if (limit&&page) {
            let offset = (page-1)*limit;

            const{filter} = aqp(reqQuery);
            delete filter.page;
            console.log(">>check filter"+ JSON.stringify(filter));

           results  = await Customer.find(filter).skip(offset).limit(limit).exec();
           
        } else {
            results  = await Customer.find({});
        }
    
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

const deleteArrayCustomerService = async (arrayCustomerData) => {
    try {
        let results = await Customer.delete({_id:{$in:arrayCustomerData}});

        return results;
    } catch (error) {
        console.log(">>error"+error)
        return null;
    }
}

module.exports = {
    createCustomerService,createArrayCustomerService,getCustomersService,putCustomersService,deleteCustomersService,deleteArrayCustomerService
}