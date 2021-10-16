import { Api } from "../axios-config/AxiosConfig";
import GenericException from "../../errors/GenericException";

export interface ILine {
  id: string;
  codigo: string;
  nome: string;
}

const getLines = async (lineType: "o" | "l"): Promise<ILine[]> => {
  try {
    const { data } = await Api().get<ILine[]>(
      `process.php?a=nc&p=%&t=${lineType}`
    );
    return data;
  } catch (error: any) {
    throw new GenericException(error.response);
  }
};

export const LineService = {
  getLines,
};
