// react
import React, { Component, Fragment } from "react";

// third part
import { connect } from "react-redux";
import { Card, Col, Row, Icon, BackTop } from "antd";
import { getSportsNews } from "../store/actions/actions";
import { getMoreSportsNews } from "../store/actions/actions";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

// custom
import "../design/General.css";

const { Meta } = Card;

class Sports extends Component {
  componentDidMount() {
    this.props.getSportsNews("data");
  }

  fetchMoreData = () => {
    this.props.getMoreSportsNews("data");
  };

  render() {
    const { sports } = this.props;

    return (
      <Fragment>
        <Row gutter={5}>
          <InfiniteScroll
            dataLength={getMoreSportsNews.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            {sports.length === 0
              ? console.log("error from sports")
              : sports.sports.articles.map(a => (
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

const mapStateToProps = ({ sports }) => ({
  sports
});

const mapDispachToProps = dispatch => {
  return {
    getSportsNews: data => dispatch(getSportsNews(data)),
    getMoreSportsNews: data => dispatch(getMoreSportsNews(data))
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Sports);
