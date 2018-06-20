import React from 'react';

import SubredditSearch from './reddit/search.js';
import RedditResults from './reddit/results.js';
import {fetchData} from '../lib/utils.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      subreddit: {},
      subredditList:[],
      loading:null,
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleResults = this.handleResults.bind(this);
  }
  
  async handleSearch(input) {
    if (input.numResults > 100) {input.numResults = 100}
    const url = `http://www.reddit.com/r/${input.subreddit}.json?limit=${input.numResults}`;

    const redditData = await fetchData(url);
    let loading = null;
    let children = redditData.data.children;
    let subredditList = children.filter(child => !child.data.stickied);
    this.setState(Object.assign( ... this.state, {subredditList}));
  }

  async handleResults(e) {
    console.log('hello from the other side');
  }

  render() {
    return (
      <main>
        <SubredditSearch handleSearch={this.state.subreddit} handleSearch={this.handleSearch}/>
        <RedditResults displayResults={this.state.subredditList} handleResults={this.handleResults}/>
      </main>
    );
  }
  
}

export default App;