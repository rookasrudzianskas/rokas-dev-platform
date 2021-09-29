/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCommentInput = {
  id?: string | null,
  comment: string,
  likes: number,
  dislikes: number,
  replies: number,
  videoID?: string | null,
  userID?: string | null,
  commentUserId?: string | null,
  commentVideoId?: string | null,
};

export type ModelCommentConditionInput = {
  comment?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  replies?: ModelIntInput | null,
  videoID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  comment: string,
  likes: number,
  dislikes: number,
  replies: number,
  videoID?: string | null,
  User?: User | null,
  Video?: Video | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  image?: string | null,
  subscribers?: number | null,
  Videos?: ModelVideoConnection | null,
  Comments?: ModelCommentConnection | null,
  sub?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelVideoConnection = {
  __typename: "ModelVideoConnection",
  items?:  Array<Video | null > | null,
  nextToken?: string | null,
};

export type Video = {
  __typename: "Video",
  id: string,
  title: string,
  thumbnail: string,
  videoUrl: string,
  duration: number,
  views: number,
  tags?: string | null,
  likes: number,
  dislikes: string,
  User?: User | null,
  Comments?: ModelCommentConnection | null,
  userID?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type UpdateCommentInput = {
  id: string,
  comment?: string | null,
  likes?: number | null,
  dislikes?: number | null,
  replies?: number | null,
  videoID?: string | null,
  userID?: string | null,
  commentUserId?: string | null,
  commentVideoId?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  subscribers?: number | null,
  sub?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  subscribers?: ModelIntInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  subscribers?: number | null,
  sub?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateVideoInput = {
  id?: string | null,
  title: string,
  thumbnail: string,
  videoUrl: string,
  duration: number,
  views: number,
  tags?: string | null,
  likes: number,
  dislikes: string,
  userID?: string | null,
  videoUserId?: string | null,
};

export type ModelVideoConditionInput = {
  title?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  views?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelVideoConditionInput | null > | null,
  or?: Array< ModelVideoConditionInput | null > | null,
  not?: ModelVideoConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateVideoInput = {
  id: string,
  title?: string | null,
  thumbnail?: string | null,
  videoUrl?: string | null,
  duration?: number | null,
  views?: number | null,
  tags?: string | null,
  likes?: number | null,
  dislikes?: string | null,
  userID?: string | null,
  videoUserId?: string | null,
};

export type DeleteVideoInput = {
  id: string,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  comment?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelIntInput | null,
  replies?: ModelIntInput | null,
  videoID?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  subscribers?: ModelIntInput | null,
  sub?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelVideoFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  thumbnail?: ModelStringInput | null,
  videoUrl?: ModelStringInput | null,
  duration?: ModelFloatInput | null,
  views?: ModelIntInput | null,
  tags?: ModelStringInput | null,
  likes?: ModelIntInput | null,
  dislikes?: ModelStringInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelVideoFilterInput | null > | null,
  or?: Array< ModelVideoFilterInput | null > | null,
  not?: ModelVideoFilterInput | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateVideoMutationVariables = {
  input: CreateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type CreateVideoMutation = {
  createVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateVideoMutationVariables = {
  input: UpdateVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type UpdateVideoMutation = {
  updateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteVideoMutationVariables = {
  input: DeleteVideoInput,
  condition?: ModelVideoConditionInput | null,
};

export type DeleteVideoMutation = {
  deleteVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      comment: string,
      likes: number,
      dislikes: number,
      replies: number,
      videoID?: string | null,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Video?:  {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetVideoQueryVariables = {
  id: string,
};

export type GetVideoQuery = {
  getVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListVideosQueryVariables = {
  filter?: ModelVideoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVideosQuery = {
  listVideos?:  {
    __typename: "ModelVideoConnection",
    items?:  Array< {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    comment: string,
    likes: number,
    dislikes: number,
    replies: number,
    videoID?: string | null,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Video?:  {
      __typename: "Video",
      id: string,
      title: string,
      thumbnail: string,
      videoUrl: string,
      duration: number,
      views: number,
      tags?: string | null,
      likes: number,
      dislikes: string,
      User?:  {
        __typename: "User",
        id: string,
        name: string,
        image?: string | null,
        subscribers?: number | null,
        sub?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      userID?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    image?: string | null,
    subscribers?: number | null,
    Videos?:  {
      __typename: "ModelVideoConnection",
      items?:  Array< {
        __typename: "Video",
        id: string,
        title: string,
        thumbnail: string,
        videoUrl: string,
        duration: number,
        views: number,
        tags?: string | null,
        likes: number,
        dislikes: string,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    sub?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateVideoSubscription = {
  onCreateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateVideoSubscription = {
  onUpdateVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteVideoSubscription = {
  onDeleteVideo?:  {
    __typename: "Video",
    id: string,
    title: string,
    thumbnail: string,
    videoUrl: string,
    duration: number,
    views: number,
    tags?: string | null,
    likes: number,
    dislikes: string,
    User?:  {
      __typename: "User",
      id: string,
      name: string,
      image?: string | null,
      subscribers?: number | null,
      Videos?:  {
        __typename: "ModelVideoConnection",
        nextToken?: string | null,
      } | null,
      Comments?:  {
        __typename: "ModelCommentConnection",
        nextToken?: string | null,
      } | null,
      sub?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    Comments?:  {
      __typename: "ModelCommentConnection",
      items?:  Array< {
        __typename: "Comment",
        id: string,
        comment: string,
        likes: number,
        dislikes: number,
        replies: number,
        videoID?: string | null,
        userID?: string | null,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    userID?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
