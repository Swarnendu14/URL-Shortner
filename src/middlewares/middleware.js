
const validURL = async (req,res,next) => {
    try {
        const longURL = req.body.longUrl;
        if (!longURL) {
            return res.status(400).json({status: false, message: "URL not given"})
        }
        const urlRegex = /^(https?|ftp?| http):\/\/[^\s/$.?#].[^\s]*$/;

        if (!urlRegex.test(longURL)) {
            return res.status(400).json({status: false, message: "Invalid URL"})
        }

        next();
        
    } catch(err) {
        res.status(500).json({status: false, message: err.message})
    }
}

const validPathParam = async (req, res,next)=> {
    try {
        const urlCode = req.params.urlCode;
        const idRegex = /^[a-z0-9_-]+$/;

        if (!idRegex.test(urlCode)) {
            return res.status(400).json({status: false, message: "Something going wrong"});
        }

        next();
    } catch(err) {
        res.status(500).json({status: false, message: err.message})
    }
}

module.exports = { validURL, validPathParam }
