import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
    constructor() {
        super();
    }

  render() {
    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
  }
}

class Header extends Component {
    render() {
        return (
            <div className="header-wrapper">
                <h1>news feed</h1>
                <p>Read top news for free</p>
                <ul className="main-navigation">
                    <li>World</li>
                    <li>Politics</li>
                    <li>Science</li>
                    <li>Technology</li>
                    <li>Art</li>
                    <li>Books</li>
                </ul>
            </div>
        )
    }
}

class Main extends Component {
    render() {
        return (
            <div className="news-wrapper">
                <h2>top news</h2>
                <ul className="news-grid">
                    <li className="news">new-1</li>
                    <li className="news">new-2</li>
                    <li className="news">new-3</li>
                    <li className="news">new-4</li>
                    <li className="news">new-5</li>
                    <li className="news">new-6</li>
                    <li className="news">new-7</li>
                    <li className="news">new-8</li>
                    <li className="news">new-9</li>
                </ul>
            </div>
        )
    }
}

class CommentBox extends Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div className="commentBox">
                <NewsItem />
                <CommentForm />
            </div>
        )
    }
}

class NewsItem extends Component {
    render() {
        return (
            <article>
                <h3>title</h3>
                <time>дата публикации: 06-12-2017</time>
                <p>something about news-item</p>
                <a href="#" />
                <cite>xyz</cite>
            </article>
        )
    }
}

class CommentForm extends Component {
    render() {
        return (
           <form>
                <label>Add new comment</label>
               <textarea>a left an awesome comment! I'm cool</textarea>
               <button>post comment</button>
           </form>
        )
    }
}

// class Comment extends Component {
//     render() {
//
//     }
// }

// const mapStateToProps = (state) => {
//     {store: state}
// };

export default connect()(App);
