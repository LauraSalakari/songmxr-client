import './App.css';
import logo from "./assets/songmxr-logo.png";
import {withRouter, Switch, Route} from "react-router-dom";
import Landing from './components/Landing';
import TrackSearch from './components/TrackSearch';
import GenreSearch from './components/GenreSearch';
import ArtistSearch from './components/ArtistSearch';

function App() {
  return (
    <div className="App">
      <picture>
        <img src={logo} />
      </picture>
      <Switch>
        <Route exact path="/" component={Landing}/>
        <Route exact path="/search/artists" component={ArtistSearch}/>
        <Route exact path="/search/tracks" component={TrackSearch}/>
        <Route exact path="/search/genres" component={GenreSearch}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
