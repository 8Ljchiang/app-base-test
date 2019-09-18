import { MockGamesService } from './mocks/mock-game.service';
import { MockPostsService } from './mocks/mock-posts.service';
import { appConfig } from './../configs/app.config';
import Log from './log.service';
import { MockFeedbackService } from './mocks/mock-feedback.service';
import { ServiceNames } from '../interfaces/ServiceNames';
import { MockExerciseService } from './mocks/mock-exercise.service';


interface IOptional {
  // of(value: any | null): IOptional;
  getValue(): any;
  isSome(): boolean;
}

interface IServiceStore {
  [key: string]: any;
}

export interface IServiceCollection {
  registerService(cls: any, name?: string): void;
  get(serviceName: string): IOptional;
}

interface IServiceResolver {
  setService(cls: any, name?: string): void;
  getService(name: string): Optional<unknown>;
}

class Optional<T> implements IOptional {
  static of(value) {
    return new Optional(value)
  }
  constructor(
    private _value: T
  ) {}

  getValue(): T {
    return this._value;
  }

  isSome(): boolean {
    return (this._value !== null && this._value !== undefined);
  }
}

class ServiceResolver implements IServiceResolver {
  private _serviceStore = {}
  constructor() {}

  setService(cls: any, name?: string): void {
    if (name) {
      // Todo: Check if name is chars only, and no spaces.
      if (true) {
        this._addService(cls, name);
      } else {
        throw new Error("Invalid service name");
      }
    } else {
      this._addService(cls, cls.constructor.name);
    }
  }

  getService(name: string): Optional<unknown> {
    const service = this._retriveService(name);
    const result = new Optional(service);
    if (result.isSome()) {
      return result;
    }
    Log.error(new Error('Service not found'), 'ServiceResolver');
  }

  private _retriveService(name: string): any {
    return this._serviceStore[name];
  }

  private _addService(Stuff: any, name: string): void {
    const service = new Stuff();
    this._serviceStore[name] = Object.freeze(service);
  }
}

class ServiceCollection implements IServiceCollection {
  constructor(
    private _serviceResolver: ServiceResolver
  ) {}

  registerService(cls: any, name?: string | ServiceNames) {
    this._serviceResolver.setService(cls, name);
    return this;
  }

  get(serviceName: string): IOptional {
    return this._serviceResolver.getService(serviceName);
  }
}

function buildMockServiceCollection(): IServiceCollection {
  const serviceResolver = new ServiceResolver();
  return new ServiceCollection(serviceResolver)
    .registerService(MockFeedbackService, ServiceNames.FEEDBACK)
    .registerService(MockPostsService, ServiceNames.POSTS)
    .registerService(MockExerciseService, ServiceNames.EXERCISES)
    .registerService(MockGamesService, ServiceNames.GAMES);
}

function buildServiceCollection(): IServiceCollection {
  const serviceResolver = new ServiceResolver();
  return new ServiceCollection(serviceResolver);
    // .registerService(FeedbackService);
}

function getServiceCollection(useMockServices: boolean) {
  const serviceCollectionInstance: IServiceCollection = useMockServices ?
  buildMockServiceCollection() : buildServiceCollection();
  return serviceCollectionInstance;
}

export function reduxReducerWithServiceCollection<S, A>(reducer: (state: S, action: A, services: IServiceCollection) => S): (state: S, action: A) => S {
  const useMockServices = appConfig.useMockServices;
  const services = getServiceCollection(useMockServices);
  return function(state: S, action: A) {
    return reducer(state, action, services);
  }
}
