/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated';
    import    { me as Query_me } from './user/resolvers/Query/me';
import    { todos as Query_todos } from './todo/resolvers/Query/todos';
import    { createTodo as Mutation_createTodo } from './todo/resolvers/Mutation/createTodo';
import    { deleteTodo as Mutation_deleteTodo } from './todo/resolvers/Mutation/deleteTodo';
import    { signIn as Mutation_signIn } from './user/resolvers/Mutation/signIn';
import    { signUp as Mutation_signUp } from './user/resolvers/Mutation/signUp';
import    { updateTodo as Mutation_updateTodo } from './todo/resolvers/Mutation/updateTodo';
import    { Todo } from './todo/resolvers/Todo';
import    { User } from './user/resolvers/User';
    export const resolvers: Resolvers = {
      Query: { me: Query_me,todos: Query_todos },
      Mutation: { createTodo: Mutation_createTodo,deleteTodo: Mutation_deleteTodo,signIn: Mutation_signIn,signUp: Mutation_signUp,updateTodo: Mutation_updateTodo },
      
      Todo: Todo,
User: User
    }