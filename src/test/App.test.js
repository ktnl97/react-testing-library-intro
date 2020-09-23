import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event'
import Books from "../components/Books.json";
import App from "../components/App";

describe("QueryBy example", () => {
  it("When element is not present", () => {
    render(<App />);

    expect(screen.queryByText("Searches for JavaScript")).toBeNull();
  });

  it("When element is actually present", () => {
    render(<App />);

    expect(screen.queryByText("Tech Book Hub")).toBeVisible();

    const title = screen.queryByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && content.startsWith('Tech ')});
    expect(title).toBeVisible();
  });


// describe("getBy cannot be ditched", () => {
    // it("queryBy doesnt show the error clearly", () => {
    //   render(<App />);

    //   expect(screen.queryByText(/Searches for JavaScript/)).toBeVisible();
    // });
    // it("getBy shows the error clearly", () => {
    //   render(<App />);

    //   expect(screen.getByText(/Searches for JavaScript/)).toBeVisible();
    // });
  // });
});

// describe("FindBy example", () => {
  // it("Using getBy for async call", async() => {
  //   render(<App />);
  //   expect(screen.getByText("Signed in as Nithyalakshmi Kamalakkannan")).toBeInTheDocument();
  // });

  // it("With using findBy for async call", async () => {
  //   render(<App />);
  //   expect(await screen.findByText("Signed in as Nithyalakshmi Kamalakkannan")).toBeInTheDocument();
  // });

  // it("Throws error when the element is not found", async () => {
  //   render(<App />);
  //   expect(await screen.findByText("Element which is not present")).toBeInTheDocument();
  // });
// });

// describe('ByAll Example', () => {
  // it('Check for multiple items', () => {
  //   render(<App />);
  //   const desciptions = screen.getAllByRole((_, element) => {
  //     return element.tagName.toLowerCase() === 'h4'});
  //   expect(desciptions[0]).toHaveTextContent('Switching to digital should be easy, seamless and integrated.');
  //   expect(desciptions[1]).toHaveTextContent('We bring life to books for a tech adventure');
  //  })

  // it('Check for multiple items after the async call', async () => {
  //  render(<App />);
  //  const bookList = await screen.findAllByRole("link");
  //  Books.forEach((book, index) => {
  //    expect(bookList[index]).toHaveTextContent(book.title);
  //    expect(bookList[index].href).toEqual(book.website);
  //  })
  // })
// });


// describe('Fire event example', () => {
  // it('Simulates user action', () => {
  //   const { getByText, queryByText }  = render(<App />);

  //   const button = getByText("Express Interest");
  //   expect(button).not.toHaveAttribute('disabled');

  //   userEvent.click(button);

  //   expect(getByText("Interest Expressed")).toBeVisible();
  //   expect(queryByText("Express Interest")).toBeNull();
  //   expect(button).toHaveAttribute('disabled');
  //  })
// });
