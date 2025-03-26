const express=require('express');
const multer=require('multer');
const {CallRecording}=require('../controller/CallController');
const router=express.Router();

const storage=multer.memoryStorage();
const upload=multer({storage});

router.post('/call',upload.single('recording'),CallRecording);
module.exports=router;