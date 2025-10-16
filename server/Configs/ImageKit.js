import ImageKit from '@imagekit/nodejs';

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});



// console.log(response);

export default imagekit;