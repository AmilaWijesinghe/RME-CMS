import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const CLOUDINARY_CLOUD_NAME="dxwjj3n0p"
const CLOUDINARY_API_KEY=787459185477345
const CLOUDINARY_API_SECRET="EzdgHDphFd-WQ9poN0i06BTDbI4"

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
  });

export default cloudinary;