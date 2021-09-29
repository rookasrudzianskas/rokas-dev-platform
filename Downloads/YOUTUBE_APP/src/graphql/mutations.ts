/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      comment
      likes
      dislikes
      replies
      videoID
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        User {
          id
          name
          image
          subscribers
          sub
          createdAt
          updatedAt
          owner
        }
        Comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
        owner
      }
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      comment
      likes
      dislikes
      replies
      videoID
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        User {
          id
          name
          image
          subscribers
          sub
          createdAt
          updatedAt
          owner
        }
        Comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
        owner
      }
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      comment
      likes
      dislikes
      replies
      videoID
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Video {
        id
        title
        thumbnail
        videoUrl
        duration
        views
        tags
        likes
        dislikes
        User {
          id
          name
          image
          subscribers
          sub
          createdAt
          updatedAt
          owner
        }
        Comments {
          nextToken
        }
        userID
        createdAt
        updatedAt
        owner
      }
      userID
      createdAt
      updatedAt
      owner
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
      subscribers
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
      owner
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
      subscribers
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
      owner
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
      subscribers
      Videos {
        items {
          id
          title
          thumbnail
          videoUrl
          duration
          views
          tags
          likes
          dislikes
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      sub
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createVideo = /* GraphQL */ `
  mutation CreateVideo(
    $input: CreateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    createVideo(input: $input, condition: $condition) {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateVideo = /* GraphQL */ `
  mutation UpdateVideo(
    $input: UpdateVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    updateVideo(input: $input, condition: $condition) {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteVideo = /* GraphQL */ `
  mutation DeleteVideo(
    $input: DeleteVideoInput!
    $condition: ModelVideoConditionInput
  ) {
    deleteVideo(input: $input, condition: $condition) {
      id
      title
      thumbnail
      videoUrl
      duration
      views
      tags
      likes
      dislikes
      User {
        id
        name
        image
        subscribers
        Videos {
          nextToken
        }
        Comments {
          nextToken
        }
        sub
        createdAt
        updatedAt
        owner
      }
      Comments {
        items {
          id
          comment
          likes
          dislikes
          replies
          videoID
          userID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      userID
      createdAt
      updatedAt
      owner
    }
  }
`;
