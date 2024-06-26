/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { me as Query_me } from './user/resolvers/Query/me';
import    { todos as Query_todos } from './todo/resolvers/Query/todos';
import    { createTodo as Mutation_createTodo } from './todo/resolvers/Mutation/createTodo';
import    { deleteTodo as Mutation_deleteTodo } from './todo/resolvers/Mutation/deleteTodo';
import    { signIn as Mutation_signIn } from './user/resolvers/Mutation/signIn';
import    { signUp as Mutation_signUp } from './user/resolvers/Mutation/signUp';
import    { updateTodo as Mutation_updateTodo } from './todo/resolvers/Mutation/updateTodo';
import    { todoSubscription as Subscription_todoSubscription } from './todo/resolvers/Subscription/todoSubscription';
import    { Todo } from './todo/resolvers/Todo';
import    { TodoSubscription } from './todo/resolvers/TodoSubscription';
import    { User } from './user/resolvers/User';
import    { UserToken } from './user/resolvers/UserToken';
import    { DateTimeResolver,EmailAddressResolver,JWTResolver,NonEmptyStringResolver,UUIDResolver } from 'graphql-scalars';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,todos: Query_todos },
      Mutation: { createTodo: Mutation_createTodo,deleteTodo: Mutation_deleteTodo,signIn: Mutation_signIn,signUp: Mutation_signUp,updateTodo: Mutation_updateTodo },
      Subscription: { todoSubscription: Subscription_todoSubscription },
      Todo: Todo,
TodoSubscription: TodoSubscription,
User: User,
UserToken: UserToken,
DateTime: DateTimeResolver,
EmailAddress: EmailAddressResolver,
JWT: JWTResolver,
NonEmptyString: NonEmptyStringResolver,
UUID: UUIDResolver
    }