import axios from "axios";

const GetApi = async (URL_Link) => {

  try {    
    const getData = await axios.get(      
      URL_Link, {
        headers: {          
          Accept: "application/json; charset=utf-8",
          "Content-Type": "application/json; charset=utf-8"          
        }
      });
    return getData.data;    
  } catch (err) {
    console.log(err.response);
  }
};

export default GetApi;
