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

  willMount() {
    console.log(`testing`);
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
        <fieldset>
          <legend>Reddit Board Search</legend>
          <input 
            name="subreddit" 
            placeholder="Subreddit Name..."
            value={this.state.subreddit} 
            onChange={e => this.handleChange(e)}
          />
          <input 
            type="number" 
            name="numResults" 
            min="1" 
            max="99" 
            placeholder="Enter a value from 1 to 99"
            value={this.state.numResults > 0 ? this.state.numResults : ''} 
            onChange={e => this.handleChange(e)}
          />
          <button onClick={e => this.handleSubmit(e)}>Search</button>
        </fieldset>

      </React.Fragment>
    );
  }
}

