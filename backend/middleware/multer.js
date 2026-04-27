import multer from "multer";

const storage = multer.diskStorage({
    // 2. Fix the naming logic
    filename: function (req, file, callback) {
        // Use 'file', not 'filename' or 'this.filename'
        callback(null, Date.now() + "_" + file.originalname);
    }
});

const upload = multer({ storage });

export default upload;