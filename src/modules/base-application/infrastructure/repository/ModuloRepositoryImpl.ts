import axios from 'axios';
import {
  Modulo,
  ResponseAPI,
} from '@/modules/base-application/domain/entities';
import {
  BASE_APLICATION_UX_URL,
  OCP_APIM_SUBSCRIPTION_KEY,
} from '@/lib/config/environments';
import { ModuloRepository } from '../../domain/repository/ModuloRepository';

export class ModuloRepositoryImpl implements ModuloRepository {
  private baseUrl: string = BASE_APLICATION_UX_URL;
  constructor() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
  }

  async getModuloById(id: string): Promise<ResponseAPI<Modulo>> {
    const options = {
      url: `${this.baseUrl}/modulo/${id}`,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': OCP_APIM_SUBSCRIPTION_KEY,
      },
    };
    try {
      const response = await axios(options);
      return response.data as ResponseAPI<Modulo>;
    } catch (error) {
      return {
        status: 'error',
        message: 'Error al obtener el modulo.',
      };
    }
  }
}
