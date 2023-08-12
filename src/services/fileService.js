const path = require("path");


const uploadSingleFile = async (fileOject) =>{ 

  let uploadPath = path.resolve (__dirname,"../public/images/upload")  
  
  console.log(">>uploadPath=="+uploadPath);

  //time-name
  //extension: .png,.jpg
  let extName = path.extname(fileOject.name);
  
  let baseName = path.basename(fileOject.name,extName);
  //+ fileOject.name;

  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  try {
    await fileOject.mv(finalPath);

    return {
        status: 'success',
        path: finalName,
        error: null,
    }
  } catch (error) {
    console.log(">>error=="+error);
    return {
        status: 'failed',
        path: null,
        error: JSON.stringify(error)
    }
  }
  
}



const uploadMultipleFile = async (fileArr) =>{
    try {
        let uploadPath = path.resolve (__dirname,"../public/images/upload");
        console.log(">>uploadPath==="+uploadPath);
        let resultsArr =[];
        let countSuccess = 0;
        for(let i=0;i<fileArr.length;i++){
            console.log("check i = ", i)
            let extName = path.extname(fileArr[i].name);
            let baseName = path.basename(fileArr[i].name,extName);
            //+ fileOject.name;
            let finalName = `${baseName}-${Date.now()}${extName}`;
            let finalPath = `${uploadPath}/${finalName}`;

            //console.log(">>finalName==="+finalName);
            try {
                await fileArr[i].mv(finalPath);
            
                resultsArr.push ({
                    status: 'success',
                    path: finalName,
                    finalName: fileArr[i].name,
                    error: null,
                })
                countSuccess++;
              } catch (error) {
                resultsArr.push ({
                    status: 'fail',
                    path: null,
                    finalName: fileArr[i].name,
                    error: JSON.stringify(error),
                })
            }
        }
        return {
            countSuccess: countSuccess,
            detail: resultsArr
        }

    } catch (error) {
        console.log(">>error=="+error);
    }
}

module.exports = {
    uploadSingleFile,uploadMultipleFile
}