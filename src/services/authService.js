import axios from 'axios';

export const authenticateUser = async(loginData) => 
{
    try
    {
        const authResponse = await axios.post("/login", {loginData});
        const response = authResponse.data;
        return response;
    }
    catch(error)
    {
      throw error;
    }
}
