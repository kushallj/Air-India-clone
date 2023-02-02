const helpDetails = (req,res) => {
    return res.status(200).send({
        message:"Succesfully hitting help api",
        success:true,
        data:{
            contact:"+91XXXXXXXXXX"
        }
    })
};

module.exports = {
    helpDetails
}