// react
import React, { Component, Fragment } from "react";

//third part
import { Card, Col, Row, Icon, BackTop } from "antd";
import { getBussinessData } from "../store/actions/actions";
import { getMoreBussinessData } from "../store/actions/actions";
import InfiniteScroll from "react-infinite-scroll-component";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

// custom

const { Meta } = Card;

class Bussiness extends Component {
  componentDidMount() {
    this.props.getBussinessData("data");
  }

  fetchMoreData = () => {
    this.props.getMoreBussinessData("data");
  };

  render() {
    const { bussiness } = this.props;
    return (
      <Fragment>
        <Row>
          <InfiniteScroll
            dataLength={getMoreBussinessData.length}
            next={this.fetchMoreData}
            hasMore={true}
          >
            {bussiness.length === 0
              ? console.log("error from bussiness")
              : bussiness.bussiness.articles.map(a => (
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
const mapStateToProps = ({ bussiness }) => ({
  bussiness
});

const mapDispachToProps = dispatch => {
  return {
    getBussinessData: data => dispatch(getBussinessData(data)),
    getMoreBussinessData: data => dispatch(getMoreBussinessData(data))
  };
};

export default connect(mapStateToProps, mapDispachToProps)(Bussiness);
