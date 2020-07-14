import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      myFollowers: [],
      me: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/codyt11")
      .then((response) => response.json())
      .then((Cody) => {
        this.setState({
          me: Cody,
        });
      })
      .catch((err) => console.log(err));

    fetch("https://api.github.com/users/codyt11/followers")
      .then((res) => res.json())
      .then((followers) => {
        this.setState({
          myFollowers: followers,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <div className="container">
            <h1 className="text-center m-5">This is me!</h1>
          <div className="card-containter">
            <div className="card">
              <img
                className="card-img-top"
                src={this.state.me.avatar_url}
                alt=""
              />
              <div className="card-body">
                <h3 className="card-name">{this.state.me.login}</h3>
                <a
                  className="card-link"
                  href={this.state.me.organizations_url}
                >
                  Organizations <br/><br/>
                </a>
                <a
                  className="btn btn-primary m-2"
                  href={this.state.me.followers_url}
                >
                  Followers Url
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="followers">    
             <h1 className="followers-title">My Followers!</h1>
          <div className="row">
            <div className="col">
              {this.state.myFollowers.map((follower) => (
                <div
                  className="follower-card"
                  key={follower.login}
                >
                  <img
                    className="card-img"
                    src={follower.avatar_url}
                    alt={follower.login}
                  />
                  <div className="card-body">
                    <h3 className="card-title">{follower.login}</h3>
                    <a
                      className="link"
                      href={follower.organizations_url}
                    >
                      Organizations<br/>
                    </a>
                    <a
                      className="btn btn-primary m-2"
                      href={follower.followers_url}
                    >
                      Followers Url<br/>
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <br />
          </div>
        </div>
      </>
    );
  }
}

export default App;