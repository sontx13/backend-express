const {uploadSingleFile} = require('../services/fileService');
const {createCustomerSevice} = require('../services/customerSevice');

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
       
        let customer = await createCustomerSevice(customerData);

        return res.status(200).json(
            {
                EC:0,
                data: customer
            }
        )
    }
}