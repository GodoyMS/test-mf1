import { ModuloRepository } from '@/modules/base-application/domain/repository';

export class GetLibraryByIdUseCase {
  constructor(private moduloRepository: ModuloRepository) {}

  async execute(id: string) {
    return this.moduloRepository.getModuloById(id);
  }
}
