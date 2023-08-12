const {uploadSingleFile} = require('../services/fileService');
const {createCustomerService,createArrayCustomerService,getCustomersService,putCustomersService,deleteCustomersService} = require('../services/customerService');

module.exports = {
    postCreateCustomerAPI : async (req,res) => {

        let{name,address,phone,email,description} = req.body;

        let imageUrl = "";
        console.log("name=="+name,"email=="+email);

        if (!req.files || Object.keys(req.files).length === 0) {
           
        } else{
            let results = await uploadSingleFile(req.files.image);
            imageUrl = results.path;
            console.log(">>>results==="+results);
        }
    
        let customerData = {
            name,address,phone,email,description,image:imageUrl
        }
       
        let customer = await createCustomerService(customerData);

        return res.status(200).json(
            {
                EC:0,
                data: customer
            }
        )
    },
    postCreateArrayCustomerAPI : async (req,res) => {
        console.log(">>data==="+req.body.customers);

        let customer = await createArrayCustomerService(req.body.customers);

        if (customer) {
            return res.status(200).json(
                {
                    EC:0,
                    data: customer
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC:-1,
                    data: customer
                }
            )
        }  
    },
    getCustomersApi: async (req,res) => {
        let customers = await getCustomersService();

        if (customers) {
            return res.status(200).json(
                {
                    EC:0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC:-1,
                    data: customers
                }
            )
        }  
    },
    putCustomersApi: async (req,res) => {
        let{id,name,address,email} = req.body;

        let customerData = {
            id,name,address,email
        }

        //console.log(">>data=="+customerData)
        let customers = await putCustomersService(customerData);

        if (customers) {
            return res.status(200).json(
                {
                    EC:0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC:-1,
                    data: customers
                }
            )
        }  
    },
    deleteCustomerApi: async (req,res) => {
        let id = req.body.id;

        //console.log(">>data=="+customerData)
        let customers = await deleteCustomersService(id);

        if (customers) {
            return res.status(200).json(
                {
                    EC:0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC:-1,
                    data: customers
                }
            )
        }  
    }
}