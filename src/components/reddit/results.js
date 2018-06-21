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
                <label className="links" htmlFor={list.name}>{list.data.title}</label>
              </a> 
              <br/>
              <img src="https://i.redditmedia.com/MPDTAkFdRtS45V4L7JMx6il1WbJ3SAgxXLuQcO0tD0w.png?s=b83ade32bf76bb4877922f0330e0a90d" alt="Reddit Up Vote"/>
              <label className="upVotes" htmlFor={list.name}>{list.data.ups}</label>
            </li>
          )
        }
        </React.Fragment>
    );
  }
}

