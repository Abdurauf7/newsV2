// react
import React, { Component, Fragment } from "react";

// third part
import { connect } from "react-redux";
import { Card, Col, Row, Icon, BackTop } from "antd";
import { getTechnologyData } from "../store/actions/actions";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMoreTechnologyData } from "../store/actions/actions";

// custom
import "../design/General.css";

const { Meta } = Card;

class General extends Component {
  componentDidMount() {
    this.props.getTechnologyData("data");
  }

  fetchmoreData = () => {
    this.props.getMoreTechnologyData("data");
  };

  render() {
    const { technology } = this.props;

    return (
      <Fragment>
        <Row gutter={5}>
          <InfiniteScroll
            dataLength={getMoreTechnologyData.length}
            next={this.fetchmoreData}
            hasMore={true}
          >
            {technology.length === 0
              ? console.log("error from technology")
              : technology.technology.articles.map(a => (
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

const mapStateToProps = ({ technology }) => ({ technology });

const mapDispachToProps = dispatch => {
  return {
    getTechnologyData: data => dispatch(getTechnologyData(data)),
    getMoreTechnologyData: data => dispatch(getMoreTechnologyData(data))
  };
};
export default connect(mapStateToProps, mapDispachToProps)(General);
