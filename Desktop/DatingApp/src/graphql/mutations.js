/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMatch = /* GraphQL */ `
  mutation CreateMatch(
    $input: CreateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    createMatch(input: $input, condition: $condition) {
      id
      User1ID
      User2ID
      isMatch
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateMatch = /* GraphQL */ `
  mutation UpdateMatch(
    $input: UpdateMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    updateMatch(input: $input, condition: $condition) {
      id
      User1ID
      User2ID
      isMatch
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteMatch = /* GraphQL */ `
  mutation DeleteMatch(
    $input: DeleteMatchInput!
    $condition: ModelMatchConditionInput
  ) {
    deleteMatch(input: $input, condition: $condition) {
      id
      User1ID
      User2ID
      isMatch
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      User1 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      User2 {
        id
        name
        image
        bio
        gender
        lookingFor
        sub
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      image
      bio
      gender
      lookingFor
      sub
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
