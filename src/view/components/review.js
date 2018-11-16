import React, { Component } from "react";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpanded = () => {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  };

  reviewStars = star => {
    const elements = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= star) {
        elements.push(
          <span>
            <i className="fas fa-star" />
          </span>
        );
      } else {
        elements.push(
          <span>
            <i className="far fa-star" />
          </span>
        );
      }
    }
    return elements;
  };

  truncate(str, n, useWordBoundary) {
    if (str.length <= n) {
      return str;
    }
    const subString = str.substr(0, n - 1);
    return (
      (useWordBoundary
        ? subString.substr(0, subString.lastIndexOf(" "))
        : subString) + "..."
    );
  }

  render() {
    const { review = {} } = this.props;
    const { expanded } = this.state;
    const shortComment = this.truncate(review.comment, 150, true);

    return (
      <div className="col-xs-12 col-sm-6 col-md-6 col-xl-6">
        <div className="home-review-left">
          <div className="home-review-client">
            {/* avt */}
            <div className="home-review-avt">
              <div className="home-review-img">
                <img className="img-circle" src={review.image} alt="" />
              </div>
            </div>
            {/* avt end */}
            <div className="home-review-content">
              <div className="home-review-rate">
                <span className="review-author-name">{review.name}</span>
                {this.reviewStars(review.star)}
              </div>
              <div className="home-review-main">
                <p>
                  {expanded ? review.comment : shortComment}
                  <a href="#comment" onClick={this.toggleExpanded}>
                    {expanded ? "Thu gon" : "Xem them"}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    );
  }
}
