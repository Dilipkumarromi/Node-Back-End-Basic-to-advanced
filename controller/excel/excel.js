const reader = require('xlsx')
const db=require('../../models/index')

 
    try {
        const file = reader.readFile('./Book1.xlsx');
        let data = []
        const sheets = file.SheetNames
        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]])
               temp.forEach((res) => {
                  data.push(res)
               })
            
        }
        console.log('final',data)
        db.tbl_address.bulkCreate(data).then(result=>{
             console.log('ddd',result)
        })
       
    
    }
    catch (e) {
        res.send({
            status:500,
            message:e.message
            
        })
    }
 
