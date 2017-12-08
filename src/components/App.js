import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import ExampleComponent from '../example'

class App extends Component {
    constructor() {
        super();

        this.state ={
            url: '',
            image: '',
            section: '',
            title: '',
            description: '',
            publishedDate: '',
            author: ''
        }
    }

      render() {
        return (
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/comments" component={ CommentBox } />
                    <Route path="/example" component={ ExampleComponent }/>
                </Switch>
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
                    <li><a href="#">World</a></li>
                    <li><a href="#">Politics</a></li>
                    <li><a href="#">Science</a></li>
                    <li><a href="#">Technology</a></li>
                    <li><a href="#">Art</a></li>
                    <li><a href="#">Books</a></li>
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
                    <li className="news"><a href="#">new-1</a></li>
                    <li className="news"><a href="#">new-2</a></li>
                    <li className="news"><a href="#">new-3</a></li>
                    <li className="news"><a href="#">new-4</a></li>
                    <li className="news"><a href="#">new-5</a></li>
                    <li className="news"><a href="#">new-6</a></li>
                    <li className="news"><a href="#">new-7</a></li>
                    <li className="news"><a href="#">new-8</a></li>
                    <li className="news"><a href="#">new-9</a></li>
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
            <article className="current-article">
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
           <form className="comment-form">
                <label>Add new comment</label>
               <textarea placeholder="I left an awesome comment! I'm cool" />
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
