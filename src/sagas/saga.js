import {all, put, takeEvery} from "redux-saga/effects";
import {articlesToStore} from "../actionCreators/actionCreators";

export function* fetchArticles(action) {
    console.log('sagaaaaa', action);
    const topic = action.topic;
    const key = '3fedd9b92cac4aa398911c2dc1350724';
    const url = `https://api.nytimes.com/svc/mostpopular/v2/mostviewed/${topic}/30.json?api-key=${key}`;

    const response = yield fetch(url);
    const post = yield response.json();
    const articles = post.results.map(
        ({title, url, byline, abstract, published_date, media}) => ({
            title,
            url,
            byline,
            abstract,
            published_date,
            media
        })
    );
    yield put(articlesToStore(articles))
}

export function* waitGetArticles() {
    yield takeEvery('GET_ARTICLES', fetchArticles);
}

export default function* rootSaga() {
    yield all([waitGetArticles()]);
}
