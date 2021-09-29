/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateVideo = /* GraphQL */ `
  subscription OnCreateVideo {
    onCreateVideo {
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
export const onUpdateVideo = /* GraphQL */ `
  subscription OnUpdateVideo {
    onUpdateVideo {
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
export const onDeleteVideo = /* GraphQL */ `
  subscription OnDeleteVideo {
    onDeleteVideo {
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
