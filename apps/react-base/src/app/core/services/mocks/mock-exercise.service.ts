import { NetworkResponseBuilder } from './../../util/NetworkResponseBuilder';
import { IServiceCollection } from './../service-collection';
import { ICreateExerciseFormInput } from '../../../redux/exercises.actions';
import { INetworkResponse } from '../../interfaces/INetworkResponse';

export interface IExerciseService {
  createExercise(input: ICreateExerciseFormInput): INetworkResponse<CreateExerciseResponseDto>;
  completeExercise(input: string): INetworkResponse<CompleteExerciseResponseDto>
}

interface CreateExerciseResponseDto {
  success: boolean;
}

interface CompleteExerciseResponseDto {
  success: boolean;
}

export class MockExerciseService implements IExerciseService {
  constructor(private _serviceCollection: IServiceCollection) {}

  createExercise(input: ICreateExerciseFormInput): INetworkResponse<CreateExerciseResponseDto> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }

  completeExercise(input: string): INetworkResponse<CompleteExerciseResponseDto> {
    return NetworkResponseBuilder.build({ success: true }, []);
  }
}
