import React from 'react';

export default class SubredditSearch extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      subreddit: '',
      numResults: 0,
      loading:null,
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSearch(this.state);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.props.handleSearch}>
          <input 
            name="subreddit" 
            placeholder="Subreddit Name..."
            value={this.state.subreddit} 
            onChange={e => this.handleChange(e)}
          />
          <input 
            name="numResults" 
            type="number" 
            min="1" 
            max="99" 
            value={this.state.numResults} 
            onChange={e => this.handleChange(e)}
          />
          <button onClick={e => this.handleSubmit(e)}>Search</button>
        </form>
  
      </React.Fragment>
    );
  }
}

