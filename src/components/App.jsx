import { Component } from "react";
import { getImages } from "services/img.service";
import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from "./App.module.css"






export class App extends Component {

state = {
  images: [],
  page: 1,
  query: '',
  totalHits: null,
  isLoading: false,
  error: null,
}

async componentDidUpdate(_, prevState) {
  const { query, page } = this.state;
  if (
    prevState.query !== query ||
    prevState.page !== page
  ) {
    this.setState({
      isLoading: true,
    });

    try {
      const { hits, totalHits } = await getImages(
        this.state.query,
        this.state.page
      );

      if (totalHits === 0) {
        toast.error(
          `There is no result for your request ${this.state.query}`
        );
      }

      this.setState({
        images:
          this.state.page === 1 ? hits : [...this.state.images, ...hits],
        totalHits: totalHits,
      });
    } catch (error) {
      this.setState({
        error: error,
      });
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }
}

handleSubmit = query => {
  this.setState({ query, page: 1 });
};

handleLoadMore = () => {
  this.setState(prevState => ({ page: prevState.page + 1 }));
};

render() {
  const { handleSubmit, handleLoadMore } = this;
  const { images, isLoading, totalHits } = this.state;
  
  return (
       <div className={s.App}>
      <Searchbar onSubmit={handleSubmit} />
      <ImageGallery images={images} />
      {isLoading && <Loader />}
      {totalHits > images?.length && (
        <Button onLoadMore={handleLoadMore} />
      )}
      <ToastContainer />
    </div>
  );
}
}
