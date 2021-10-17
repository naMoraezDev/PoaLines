import { Api } from "../axios-config/AxiosConfig";
import GenericException from "../../errors/GenericException";

const getItinerary = async (lineId: string): Promise<any> => {
  try {
    const { data } = await Api().get(`process.php?a=il&p=${lineId}`);
    return data;
  } catch (error: any) {
    throw new GenericException(error.response);
  }
};

export const ItineraryService = {
  getItinerary,
};
