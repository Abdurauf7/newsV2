// react
import React, { Component, Fragment } from "react";

// third part
import { connect } from "react-redux";
import { Card, Col, Row, Icon, BackTop } from "antd";
import { getData } from "../store/actions/actions";
import { getMoreData } from "../store/actions/actions";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// custom
import "../design/General.css";

const { Meta } = Card;

class General extends Component {
  componentDidMount() {
    this.props.getData("data");
  }

  fetchMoreData = () => {
    this.props.getMoreData("data");
  };

  render() {
    const { articles } = this.props;

    return (
      <Fragment>
        <Row gutter={5}>
          <InfiniteScroll
            dataLength={getMoreData.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            {articles.length === 0
              ? console.log("error from general")
              : articles.articles.articles.map(a => (
                  <Col span={6}>
                    <BackTop>
                      <div className="back-top">
                        <Icon type="up-circle" theme="filled" />
                      </div>
                    </BackTop>
                    <Card
                      title={a.author}
                      bordered={true}
                      cover={<img alt="" src={a.urlToImage} />}
                      extra={
                        <Link
                          to={{
                            pathname: "/more/",
                            state: {
                              img: a.urlToImage,
                              title: a.title,
                              content: a.content,
                              author: a.author
                            }
                          }}
                        >
                          More
                        </Link>
                      }
                    >
                      <Meta title={a.title} description={a.description} />
                    </Card>
                  </Col>
                ))}
          </InfiniteScroll>
        </Row>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ articles }) => ({
  articles
});

const mapDispachToProps = dispatch => {
  return {
    getData: data => dispatch(getData(data)),
    getMoreData: data => dispatch(getMoreData(data))
  };
};
export default connect(mapStateToProps, mapDispachToProps)(General);
