import React from 'react';
import ListCafe from '../components/ListCafe';
import { getAllCafes } from '../utils';
import CafeAppJumbotron from '../components/CafeAppJumbotron';
import SearchCafe from '../components/SearchCafe';
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTitle = searchParams.get('searchTitle') || '';
  function changeSearchParams(searchTitle) {
    setSearchParams({ searchTitle });
  }

  return <HomePage defaultTitle={searchTitle} titleChange={changeSearchParams} />;
}

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cafes: getAllCafes(),
      searchTitle: props.defaultTitle || '',
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(searchTitle) {
    this.setState(() => {
      return {
        searchTitle,
      };
    });
    this.props.titleChange(searchTitle);
  }

  render() {
    const cafes = this.state.cafes.filter((cafe) => {
      return cafe.title.toLowerCase().includes(this.state.searchTitle.toLowerCase());
    });

    return (
      <section>
        <CafeAppJumbotron />
        <h2 className="home_jumbotron" id="list_cafe">
          Choose Your Choice
        </h2>
        <SearchCafe searchTitle={this.state.searchTitle} onTitleChange={this.onSearchHandler} />
        <ListCafe cafes={cafes} />
      </section>
    );
  }
}

export default HomePageWrapper;
