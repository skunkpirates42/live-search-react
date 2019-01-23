import React, { Component } from 'react';
import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

class LiveSearch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchValue: ''
    };
  }

  render() {
    const characters = this.props.characters.filter(character => 
      character.name.toLowerCase().includes(
        this.state.searchValue.toLowerCase()
      )
    );

    return (
      <div className="live-search">
        <SearchForm onChange={searchValue => this.setState({searchValue})}/>
        <CharacterCount count={characters.length}/>
        <CharacterList characters={characters}/>
      </div>
    );
  }
}

export default LiveSearch;
