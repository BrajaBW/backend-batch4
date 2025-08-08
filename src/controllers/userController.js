exports.getUser = (req, res, next) => {
    const user1 = {
        nama : "braja",
        asal : "Bandung",
        pekerjaan : "sofware develop"
    }
    res.send(user1);
};

exports.createUser=(req,res,next)=>{
    const data = req.body
    data.umur = 31

    res.send(data)
}