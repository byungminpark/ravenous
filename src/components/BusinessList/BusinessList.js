import React from "react";
import Business from "../Business/Business";
import "./BusinessList.css";

/* 컴포넌트 클래스 생성 */
class BusinessList extends React.Component {
  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map((business) => {
          return <Business key={business.id} business={business} />;
        })}
      </div>
    );
  }
}

export default BusinessList;
