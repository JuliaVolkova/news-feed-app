import {initializeRequest} from "../actionCreators/actionCreators";

export function* fetchArticles(bla) {
    console.log('sagaaaaa', bla);
    yield function (dispatch) {
        dispatch(initializeRequest);
        //     fetch('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?api-key=3fedd9b92cac4aa398911c2dc1350724')
        // }
        //     .then(response => response.json())
        //     .then(json => {
        //         let articlesList = json.results.map(({title, url, byline, abstract}) => ({title, url, byline, abstract}));
        //     })
        //     .then(
        //         dispatch()
        //     );
    }
}
