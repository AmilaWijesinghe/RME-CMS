import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
    cloud_name: "dxwjj3n0p",
    api_key: 787459185477345,
    api_secret: "EzdgHDphFd-WQ9poN0i06BTDbI4",
  });

export default cloudinary;