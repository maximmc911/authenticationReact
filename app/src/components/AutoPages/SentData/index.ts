import axios from "axios";
import { formInput } from "../interface/index";

export function SentMessage(formData: formInput): boolean {
  let askServer: boolean = false;
  const USER_URL: string = ""; // Необходимо ввести актуальный URL
  const actualInfo: formInput = {
    email: `test@mail.ru`,
    password: `maks1111`,
  };
  const getData = async () => {
    try {
      if (USER_URL.length) {
        // Если есть реальный бек, то отправляем данные и/или получаем их для сверки данных и предоставляем/отказываем в доступе
        const { data } = await axios(USER_URL);
      } else {
        if (
          formData.email == actualInfo.email &&
          formData.password == actualInfo.password
        ) {
          askServer = true;
        } else {
          askServer = false;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  getData();
  return askServer;
}
