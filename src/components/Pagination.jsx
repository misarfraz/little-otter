import React, { Component } from "react";

export class Pagination extends Component {
  pageNumberButton = n => (
    <button
      className=""
      onClick={() => this.props.setPageNumber(n)}
      disabled={this.props.pageNumber === n}
      variant={this.props.pageNumber === n ? "primary" : "link"}
    >
      {n}
    </button>
  );

  render() {
    const { pageNumber, pageCount, setPageNumber } = this.props;

    return (
      <div className="pagination-container">
        {/* Pagination Nav */}

        {pageNumber !== 1 && (
          <>
            <button
              onClick={() => setPageNumber(pageNumber - 1)}
              variant="link"
            >
              <span className="chevron left"></span>
            </button>
            {/* to First Page */}
            {this.pageNumberButton(1)}
          </>
        )}
        {/* shows break in order between first page & previous page*/}
        {pageNumber > 3 && (
          <span style={{ userSelect: "none" }} className="ellipsis">
            ...
          </span>
        )}
        {/* previous page */}
        {pageNumber > 2 && this.pageNumberButton(pageNumber - 1)}
        {/* current page */}
        {pageCount > 1 && this.pageNumberButton(pageNumber)}
        {/* next page */}
        {pageNumber < pageCount && this.pageNumberButton(pageNumber + 1)}
        {/* shows break in order between next page & last page */}
        {pageNumber + 1 < pageCount - 1 && (
          <span style={{ userSelect: "none" }} className="ellipsis">
            ...
          </span>
        )}
        {/* last page */}
        {pageCount > 2 &&
          pageNumber < pageCount - 1 &&
          this.pageNumberButton(pageCount)}
        {pageNumber !== pageCount && (
          <button onClick={() => setPageNumber(pageNumber + 1)} variant="link">
            <span className="chevron right"></span>
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
