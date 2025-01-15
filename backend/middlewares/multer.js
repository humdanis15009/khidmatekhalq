import multer from 'multer'
import { v4 as uuid } from "uuid"

const storage = multer.diskStorage({
    destination(req,file,cb){   //cb is callBack function
        cb(null, "uploads")  //uploads folder save image or video
    },
    // uuid generate random id to save various image or video file
     filename(req, file, cb) {
        const id = uuid();

        const extName = file.originalname.split(".").pop();

        const fileName = `${id}.${extName}`
         cb(null, fileName);
     },

});

export const uploadFiles = multer({ storage }).single("file")