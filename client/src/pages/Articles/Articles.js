import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { Results, ResultsItem, SavedBtn } from "../../components/Results";
import { Saved, SavedItem, DeleteBtn } from "../../components/Saved";
import { Input, TextArea, SearchBtn } from "../../components/Form";

class Articles extends Component {
  state = {
    Articles: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <SearchBtn>Submit Book</SearchBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.articles.length ? (
              <Results>
                {this.state.articles.map(book => (
                  <ResultsItem key={article._id}>
                    <a href={"/books/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                      </strong>
                    </a>
                    {/* <SavedBtn /> */}
                  </ResultsItem>
                ))}
              </Results>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Articles;
