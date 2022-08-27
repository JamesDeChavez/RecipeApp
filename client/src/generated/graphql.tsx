import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  _id?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
};

export type IngredientForInstruction = {
  __typename?: 'IngredientForInstruction';
  amount?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type IngredientForStep = {
  amount?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Instruction = {
  __typename?: 'Instruction';
  description?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<IngredientForInstruction>>>;
  summary?: Maybe<Summary>;
  time?: Maybe<Scalars['String']>;
};

export type InstructionInput = {
  description?: InputMaybe<Scalars['String']>;
  ingredients?: InputMaybe<Array<InputMaybe<IngredientForStep>>>;
  summary?: InputMaybe<SummaryForStep>;
  time?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createIngredient?: Maybe<Ingredient>;
  createRecipe?: Maybe<Recipe>;
  createUser?: Maybe<User>;
  deleteIngredient?: Maybe<Ingredient>;
  deleteRecipe?: Maybe<Recipe>;
  deleteUser?: Maybe<User>;
  loginUser?: Maybe<User>;
  updateIngredient?: Maybe<Ingredient>;
  updateRecipe?: Maybe<Recipe>;
  updateUser?: Maybe<User>;
};


export type MutationCreateIngredientArgs = {
  brand?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
};


export type MutationCreateRecipeArgs = {
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  instructions?: InputMaybe<Array<InputMaybe<InstructionInput>>>;
  title?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
  video?: InputMaybe<VideoInput>;
};


export type MutationCreateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationDeleteIngredientArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteRecipeArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationDeleteUserArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type MutationLoginUserArgs = {
  password?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateIngredientArgs = {
  brand?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateRecipeArgs = {
  id?: InputMaybe<Scalars['ID']>;
  ingredients?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  instructions?: InputMaybe<Array<InputMaybe<InstructionInput>>>;
  title?: InputMaybe<Scalars['String']>;
  video?: InputMaybe<VideoInput>;
};


export type MutationUpdateUserArgs = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  username?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getIngredientById?: Maybe<Ingredient>;
  getRecipeById?: Maybe<Recipe>;
  getUserById?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryGetIngredientByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetRecipeByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


export type QueryGetUserByIdArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  _id?: Maybe<Scalars['ID']>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  instructions?: Maybe<Array<Maybe<Instruction>>>;
  title?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['ID']>;
  video?: Maybe<Video>;
};

export type Summary = {
  __typename?: 'Summary';
  action?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SummaryForStep = {
  action?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  ingredients?: Maybe<Array<Maybe<Ingredient>>>;
  password?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Maybe<Recipe>>>;
  token?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Video = {
  __typename?: 'Video';
  channel?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  youtubeId?: Maybe<Scalars['String']>;
};

export type VideoInput = {
  channel?: InputMaybe<Scalars['String']>;
  thumbnail?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  youtubeId?: InputMaybe<Scalars['String']>;
};

export type Create_IngredientMutationVariables = Exact<{
  name?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['ID']>;
}>;


export type Create_IngredientMutation = { __typename?: 'Mutation', createIngredient?: { __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null } | null };

export type UpdateIngredientMutationVariables = Exact<{
  updateIngredientId?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  brand?: InputMaybe<Scalars['String']>;
}>;


export type UpdateIngredientMutation = { __typename?: 'Mutation', updateIngredient?: { __typename?: 'Ingredient', name?: string | null, brand?: string | null } | null };

export type DeleteIngredientMutationVariables = Exact<{
  deleteIngredientId?: InputMaybe<Scalars['ID']>;
}>;


export type DeleteIngredientMutation = { __typename?: 'Mutation', deleteIngredient?: { __typename?: 'Ingredient', _id?: string | null, name?: string | null } | null };

export type LoginUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'User', _id?: string | null, username?: string | null, email?: string | null, token?: string | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null, userId?: string | null } | null> | null, recipes?: Array<{ __typename?: 'Recipe', _id?: string | null, title?: string | null, userId?: string | null, video?: { __typename?: 'Video', title?: string | null, thumbnail?: string | null, channel?: string | null, youtubeId?: string | null } | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null, userId?: string | null } | null> | null, instructions?: Array<{ __typename?: 'Instruction', description?: string | null, time?: string | null, summary?: { __typename?: 'Summary', action?: string | null, items?: Array<string | null> | null } | null, ingredients?: Array<{ __typename?: 'IngredientForInstruction', name?: string | null, amount?: string | null } | null> | null } | null> | null } | null> | null } | null };

export type CreateUserMutationVariables = Exact<{
  username?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', _id?: string | null, username?: string | null, email?: string | null, token?: string | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null, userId?: string | null } | null> | null, recipes?: Array<{ __typename?: 'Recipe', _id?: string | null, title?: string | null, video?: { __typename?: 'Video', title?: string | null, thumbnail?: string | null, channel?: string | null, youtubeId?: string | null } | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null, userId?: string | null } | null> | null, instructions?: Array<{ __typename?: 'Instruction', description?: string | null, time?: string | null, summary?: { __typename?: 'Summary', action?: string | null, items?: Array<string | null> | null } | null, ingredients?: Array<{ __typename?: 'IngredientForInstruction', name?: string | null, amount?: string | null } | null> | null } | null> | null } | null> | null } | null };

export type ViewerQueryVariables = Exact<{ [key: string]: never; }>;


export type ViewerQuery = { __typename?: 'Query', viewer?: { __typename?: 'User', _id?: string | null, username?: string | null, email?: string | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null } | null> | null, recipes?: Array<{ __typename?: 'Recipe', _id?: string | null, title?: string | null, video?: { __typename?: 'Video', title?: string | null, thumbnail?: string | null, channel?: string | null, youtubeId?: string | null } | null, ingredients?: Array<{ __typename?: 'Ingredient', _id?: string | null, name?: string | null, brand?: string | null } | null> | null, instructions?: Array<{ __typename?: 'Instruction', description?: string | null, time?: string | null, summary?: { __typename?: 'Summary', action?: string | null, items?: Array<string | null> | null } | null, ingredients?: Array<{ __typename?: 'IngredientForInstruction', name?: string | null, amount?: string | null } | null> | null } | null> | null } | null> | null } | null };


export const Create_IngredientDocument = gql`
    mutation CREATE_INGREDIENT($name: String, $brand: String, $userId: ID) {
  createIngredient(name: $name, brand: $brand, userId: $userId) {
    _id
    name
    brand
  }
}
    `;
export type Create_IngredientMutationFn = Apollo.MutationFunction<Create_IngredientMutation, Create_IngredientMutationVariables>;

/**
 * __useCreate_IngredientMutation__
 *
 * To run a mutation, you first call `useCreate_IngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreate_IngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createIngredientMutation, { data, loading, error }] = useCreate_IngredientMutation({
 *   variables: {
 *      name: // value for 'name'
 *      brand: // value for 'brand'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useCreate_IngredientMutation(baseOptions?: Apollo.MutationHookOptions<Create_IngredientMutation, Create_IngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<Create_IngredientMutation, Create_IngredientMutationVariables>(Create_IngredientDocument, options);
      }
export type Create_IngredientMutationHookResult = ReturnType<typeof useCreate_IngredientMutation>;
export type Create_IngredientMutationResult = Apollo.MutationResult<Create_IngredientMutation>;
export type Create_IngredientMutationOptions = Apollo.BaseMutationOptions<Create_IngredientMutation, Create_IngredientMutationVariables>;
export const UpdateIngredientDocument = gql`
    mutation UpdateIngredient($updateIngredientId: ID, $name: String, $brand: String) {
  updateIngredient(id: $updateIngredientId, name: $name, brand: $brand) {
    name
    brand
  }
}
    `;
export type UpdateIngredientMutationFn = Apollo.MutationFunction<UpdateIngredientMutation, UpdateIngredientMutationVariables>;

/**
 * __useUpdateIngredientMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIngredientMutation, { data, loading, error }] = useUpdateIngredientMutation({
 *   variables: {
 *      updateIngredientId: // value for 'updateIngredientId'
 *      name: // value for 'name'
 *      brand: // value for 'brand'
 *   },
 * });
 */
export function useUpdateIngredientMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIngredientMutation, UpdateIngredientMutationVariables>(UpdateIngredientDocument, options);
      }
export type UpdateIngredientMutationHookResult = ReturnType<typeof useUpdateIngredientMutation>;
export type UpdateIngredientMutationResult = Apollo.MutationResult<UpdateIngredientMutation>;
export type UpdateIngredientMutationOptions = Apollo.BaseMutationOptions<UpdateIngredientMutation, UpdateIngredientMutationVariables>;
export const DeleteIngredientDocument = gql`
    mutation DeleteIngredient($deleteIngredientId: ID) {
  deleteIngredient(id: $deleteIngredientId) {
    _id
    name
  }
}
    `;
export type DeleteIngredientMutationFn = Apollo.MutationFunction<DeleteIngredientMutation, DeleteIngredientMutationVariables>;

/**
 * __useDeleteIngredientMutation__
 *
 * To run a mutation, you first call `useDeleteIngredientMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteIngredientMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteIngredientMutation, { data, loading, error }] = useDeleteIngredientMutation({
 *   variables: {
 *      deleteIngredientId: // value for 'deleteIngredientId'
 *   },
 * });
 */
export function useDeleteIngredientMutation(baseOptions?: Apollo.MutationHookOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteIngredientMutation, DeleteIngredientMutationVariables>(DeleteIngredientDocument, options);
      }
export type DeleteIngredientMutationHookResult = ReturnType<typeof useDeleteIngredientMutation>;
export type DeleteIngredientMutationResult = Apollo.MutationResult<DeleteIngredientMutation>;
export type DeleteIngredientMutationOptions = Apollo.BaseMutationOptions<DeleteIngredientMutation, DeleteIngredientMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($username: String, $password: String) {
  loginUser(username: $username, password: $password) {
    _id
    username
    email
    ingredients {
      _id
      name
      brand
      userId
    }
    recipes {
      _id
      title
      video {
        title
        thumbnail
        channel
        youtubeId
      }
      ingredients {
        _id
        name
        brand
        userId
      }
      instructions {
        summary {
          action
          items
        }
        description
        ingredients {
          name
          amount
        }
        time
      }
      userId
    }
    token
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String, $email: String, $password: String) {
  createUser(username: $username, email: $email, password: $password) {
    _id
    username
    email
    ingredients {
      _id
      name
      brand
      userId
    }
    token
    recipes {
      _id
      title
      video {
        title
        thumbnail
        channel
        youtubeId
      }
      ingredients {
        _id
        name
        brand
        userId
      }
      instructions {
        summary {
          action
          items
        }
        description
        ingredients {
          name
          amount
        }
        time
      }
    }
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const ViewerDocument = gql`
    query Viewer {
  viewer {
    _id
    username
    email
    ingredients {
      _id
      name
      brand
    }
    recipes {
      _id
      title
      video {
        title
        thumbnail
        channel
        youtubeId
      }
      ingredients {
        _id
        name
        brand
      }
      instructions {
        summary {
          action
          items
        }
        description
        ingredients {
          name
          amount
        }
        time
      }
    }
  }
}
    `;

/**
 * __useViewerQuery__
 *
 * To run a query within a React component, call `useViewerQuery` and pass it any options that fit your needs.
 * When your component renders, `useViewerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useViewerQuery({
 *   variables: {
 *   },
 * });
 */
export function useViewerQuery(baseOptions?: Apollo.QueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
      }
export function useViewerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ViewerQuery, ViewerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ViewerQuery, ViewerQueryVariables>(ViewerDocument, options);
        }
export type ViewerQueryHookResult = ReturnType<typeof useViewerQuery>;
export type ViewerLazyQueryHookResult = ReturnType<typeof useViewerLazyQuery>;
export type ViewerQueryResult = Apollo.QueryResult<ViewerQuery, ViewerQueryVariables>;