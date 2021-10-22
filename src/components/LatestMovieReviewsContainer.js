import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "UbjUiM32lMYmu6wHzgjgUIpirgbIuod3";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((reviewsData) => {
        this.setState({ reviews: reviewsData.results });
      });
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <h1>Latest Reviews:</h1>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
