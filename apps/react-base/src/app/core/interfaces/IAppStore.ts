import { GamesStore } from './../../redux/games.store';
import { ApplicationStore } from './../../redux/application.store';
import { AccountStore } from './../../redux/account.store';
import { FeedbackStore } from './../../redux/feedback.store';
import { PostsStore } from '../../redux/posts.store';
import { ExercisesStore } from '../../redux/exercises.store';
export interface IAppStore {
  account: AccountStore,
  app: ApplicationStore,
  feedback: FeedbackStore
  posts: PostsStore,
  exercises: ExercisesStore,
  games: GamesStore
}
