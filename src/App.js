import { Component } from 'react';
import fetchImages from './services/api-service';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Spinner from './components/Spinner';
import Modal from './components/Modal';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    modalIsOpen: false,
    largeImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }
  }

  onInputChange = query => {
    this.setState({ images: [], query, page: 1 });
  };

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ isLoading: true });
    return fetchImages(query, page)
      .then(data => {
        console.log(data);
        this.setState(({ images, page }) => ({
          images: [...images, ...data],
          page: page + 1,
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };
  onImageClick = largeImg => {
    this.setState({ largeImg });
    this.toggleModal();
  };

  onButtonClick = () => {
    this.fetchImages(this.state.query).then(() =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      }),
    );
  };

  toggleModal = () => {
    this.setState(({ modalIsOpen }) => ({ modalIsOpen: !modalIsOpen }));
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.onInputChange} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
        {this.state.isLoading && <Spinner />}
        {this.state.images.length > 0 && (
          <Button onClick={this.onButtonClick} />
        )}

        {this.state.modalIsOpen && (
          <Modal
            toggleModal={this.toggleModal}
            largeImg={this.state.largeImg}
          />
        )}
      </div>
    );
  }
}

export default App;
