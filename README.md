# General Assembly Project 4: Chimera - the mythical creatures blog
## Goal: Solo project to create a full-stack app with React.js & Python.

### Timeframe
7 days

## Technologies used
* Python
* Flask
* SQLAlchemy
* PostgreSQL
* React.js
* JavaScript (ES6) / HTML5 / SCSS
* JWT
* BCrypt
* Bluebird
* request-promise/axios
* Enzyme
* Git / GitHub
* Bulma CSS Framework

## My Application: Chimera - the mythical creatures blog
<img width="1440" alt="Screenshot 2019-03-22 at 13 17 01" src="https://user-images.githubusercontent.com/9445433/54825170-d3024680-4ca4-11e9-97f2-3af637ef1a8d.png">

A hosted version of this app can be found at https://wdi-pepino.herokuapp.com

### Website overview
This website allows users to write articles about mythical creatures and comment/like these articles.

Before they can either comment or write/read articles the user has be logged in. If the user does not have an account they can register; this will automatically log them in.

<img width="1440" alt="Screenshot 2019-03-22 at 13 11 53" src="https://user-images.githubusercontent.com/9445433/54824876-1ad49e00-4ca4-11e9-80d3-7538840794d5.png">

In the user's profile page where they will find the option to leave a new article. It also has the articles they have written so far, the articles they have liked and their details.

<img width="1440" alt="Screenshot 2019-03-22 at 13 29 20" src="https://user-images.githubusercontent.com/9445433/54825914-891a6000-4ca6-11e9-8ec1-2d5034f18289.png">

In order to like or comment an article they have to open the article show page. They can find the the latest article, the one with the most likes on the homepage and the list with all the articles on the Discover the creatures tab.

<img width="1440" alt="Screenshot 2019-03-22 at 13 42 30" src="https://user-images.githubusercontent.com/9445433/54826751-60936580-4ca8-11e9-9912-3c8eced4bbb5.png">

### Process
I started the project by planning our models and database structure followed by some simple wireframes on how I wanted the site to look. 

When the database was functional, I moved onto creating the models, routes and the Seeds file. This file provides the initial list of articles, comments, likes and users for the site.

After the backend was functional and had been tested by making API requests with Insomnia I moved onto creating the frontend. This was done in React.js with the Bulma framework. The first views coded where the ones that would show the list of articles and the article itself.

I wanted to experiment with modals in React, as I had seen them being used effectively on other sites. The React modal is used with the register/login form. The modal sits on top of the site stopping all other interaction until the user is logged in.

Once I had the main pages sorted and users could log in I moved on to create the fucntionality to leave comments and like articles.

### Wins
I am particulary pleased with the like functionality. The outcome depends on the user being the creator of the article or if they have liked it already or not.

```
import React from 'react'
import Auth from '../../lib/Auth'

const ArticleLike = ({ likedBy, handleLike, error }) => {
  return (
    <div className={likedBy.some(like =>
      Auth.isCurrentUser(like.id)) ? 'likes liked_by_user' : 'likes'}>
      <button className='button' onClick={handleLike}>
        <span className="icon is-big is-left" >
          <i className="fas fa-2x fa-thumbs-up"></i>
        </span>
      </button>
      {error === 403 && <p>You cannot like your own article.</p>}
      {likedBy.length > 0 && likedBy.some(like => Auth.isCurrentUser(like.id)) &&<p>You have liked this.</p> }
      {likedBy.length === 1 && <p>This article has been liked once.</p>}
      {likedBy.length > 1 && <p>This article has been liked {likedBy.length} times.</p>}
      {likedBy.length === 0 && <p>This article has not been liked yet.</p>}
    </div>
  )
}

export default ArticleLike
```

 ### Future Features
Due to the limited time we had available testing was not as thorough as I would have liked. I would definitely would have loved to have written more tests. 
I also would have liked to implement the functionality to use markdown while writting the article.





