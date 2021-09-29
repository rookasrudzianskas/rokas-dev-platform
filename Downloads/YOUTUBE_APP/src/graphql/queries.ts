/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getVideo = /* GraphQL */ `
  query GetVideo($id: ID!) {
    getVideo(id: $id) {
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
export const listVideos = /* GraphQL */ `
  query ListVideos(
    $filter: ModelVideoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVideos(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
