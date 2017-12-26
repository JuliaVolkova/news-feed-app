import {all, put, takeEvery} from 'redux-saga/effects';
import {articlesToStore, articleToStore, getComments} from '../actionCreators/actionCreators';
import {fromNullable} from '../utils/option';


function resultToArticle({id, title, url, byline, abstract, published_date, media}) {
    let alt = 'No media presented';
    const picture = fromNullable(media)
        .map(m => m[0])
        .map(m => {
            alt = `${m.subtype} by ${m.copyright}`;
            return m['media-metadata'];
        })
        .map(m => m.pop())
        .map(({url, width, height}) => ({src: url, width, height, alt}))
        .orElse({src: '/random-picture.jpg', width: 200, height: 200, alt});
    return {id, title, url, byline, abstract, published_date, media: picture}
}

export function* fetchArticles(action) {
    const topic = action.topic;
    const key = '3fedd9b92cac4aa398911c2dc1350724';
    const url = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${topic}/30.json?api-key=${key}`;

    const response = yield fetch(url);
    const post = yield response.json();
    const articles = post.results.map(resultToArticle);
    yield put(articlesToStore(articles))
}

export function* fetchArticle(action) {
    const topic = action.topic;
    const key = '3fedd9b92cac4aa398911c2dc1350724';
    const url = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${topic}/30.json?api-key=${key}`;

    const response = yield fetch(url);
    const post = yield response.json();
    const article = resultToArticle(post.results[action.id]);
    yield put(articleToStore(article));
}

export function* fetchComments(action){
    localStorage.getItem(action.articleId);
}

export function* addComment(action) {
    const comments = JSON.parse(localStorage.getItem(action.articleId) || '[]');
    console.log('In localStorage', comments);
    comments.push(action.comment);
    localStorage.setItem(action.articleId, JSON.stringify(comments));
    yield put(getComments(comments));
}

export function* waitGetArticles() {
    yield takeEvery('GET_ARTICLES', fetchArticles);
}

export function* waitWatchArticle() {
    yield takeEvery('WATCH_NEWS', fetchArticle);
    yield takeEvery('GET_COMMENTS', fetchComments);
}

export function* waitAddComment() {
    yield takeEvery('ADD_COMMENT', addComment);
}

export default function* rootSaga() {
    yield all([
        waitGetArticles(),
        waitWatchArticle(),
        waitAddComment()
    ]);
}

