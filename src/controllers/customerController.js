const {uploadSingleFile} = require('../services/fileService');
const {createCustomerService,createArrayCustomerService} = require('../services/customerService');

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
        
        
    }
}