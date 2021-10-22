import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "UbjUiM32lMYmu6wHzgjgUIpirgbIuod3";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      reviews: [],
    };
  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(URL + `&query=${this.state.searchTerm}`)
      .then((response) => {
        return response.json();
      })
      .then((reviewData) => {
        // console.log(reviewData.results);
        this.setState({ reviews: reviewData.results });
        // console.log(this.state.reviews);
      });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1>Search For Reviews:</h1>
        <form
          onSubmit={(event) => {
            this.handleSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleChange(event);
            }}
            value={this.state.searchTerm}
          />
          <input type="submit" value="Search"></input>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
