import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetail';
import YTSearch from 'youtube-api-search';
const API = "AIzaSyBl-oGIg9qw_8WawuOcTi75IXXLIbs2-yA";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      videos: [],
      selectedVideo: null
    };
    this.videoSearch('')
  }

  videoSearch(term) {
    YTSearch({key: API, term: term}, (videos) => {
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      });
    })
  }

  render () {
    return ( 
      <div>
        < SearchBar onSearchTerm={term => {this.videoSearch(term)}}/>
        < VideoDetail video={this.state.selectedVideo}/>
        < VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    )
  }
}

export default App;
