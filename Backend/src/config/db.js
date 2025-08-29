import mongoose from 'mongoose';

const ConnectDb = async ()=>{
  try {
    const url = process.env.MONGODB__URL;
    mongoose.connect(url);
    console.log('mongoose successfully connected ..');
  } catch (error) {
    console.log('mongoose error ');
    console.log(error)
    process.exit(1)
  }
}


export {ConnectDb}
