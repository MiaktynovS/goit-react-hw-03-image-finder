import { Component } from "react";
import { PropTypes } from "prop-types"
import s from "./Searchbar.module.css"

export class Searchbar extends Component{

  state = {
    q: '',
  }

  handleChangeInput = (e) => {
    this.setState({ q: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.q)
    this.reset();
  }

  reset = () =>{
    this.setState({q:''})
  }


  render(){
    const { handleChangeInput, handleSubmit } = this;
    const { q } = this.state;
    return(
      <header className={s.Searchbar}>
    <form className={s.SearchForm}  onSubmit={handleSubmit}>
    <button type="submit" className={s.SearchFormButton}>
      <span className={s.ButtonLabel}>Search</span>
    </button>

    <input
      className={s.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      value={q}
      onChange={handleChangeInput}
    />
    </form>
    </header>
    )
  }

}

Searchbar.propTypes = {
  onSubmit:PropTypes.func.isRequired,
}


