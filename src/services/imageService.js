import axios from "axios";
const API_URL =
  "https://api.imgbb.com/1/upload?key=daa256a504894888d9f32fea731c2be8";

const sendImage = (image) => {
  return axios
    .post(API_URL, {
      image,
    })
    .then((response) => {
      console.log(response);
    });
};

const imageService = {
  sendImage,
};
export default imageService;
