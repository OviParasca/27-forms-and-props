import React from 'react';

export default class RedditResults extends React.Component{

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment> 
        {
          this.props.displayResults.map((list, i) => 
            <li key={i}>
              <a href={list.data.url}> 
                <label htmlFor={list.name}>{list.data.title}</label>
              </a> 
              <label htmlFor={list.name}>Up Votes: {list.data.ups}</label>
            </li>
          )
        }
        </React.Fragment>
    );
  }
}

