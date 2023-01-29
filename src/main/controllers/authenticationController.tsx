import axios from 'axios';
import ILogin from '~/main/interfaces/ILogin';
import IRegister from '~/main/interfaces/IRegister';
import IUser from '~/main/interfaces/IUser';

const authenticationController = {
  onLogin: async(email: string, passwordi: string): Promise<any> => {
    const payload: ILogin = {
      email,
      passwordi
    };
    const responseLogin: any = await axios.post("http://localhost:4000/login", payload).then(x => x.data);
    return responseLogin;
  },

  onRegister: async(emri: string, mbiemri: string, username: string, email: string, nrTelefonit: string, passwordi: string): Promise<any> => {
    const payload: IRegister = {
      emri,
      mbiemri,
      username,
      email,
      nrTelefonit,
      passwordi
    };
    const responseLogin: any = await axios.post("http://localhost:4000/register", payload).then(x => x.data);
    return responseLogin;
  },

  validateUser: async() => {
    if (localStorage.token) {
      const config = {
        headers: {
          Authorization: localStorage.token,
        }
      }
      const response: IUser = await axios.get("http://localhost:4000/validate", config).then(x => x.data);
      return response;
    }
  }
}

export default authenticationController;