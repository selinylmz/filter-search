import React, { Component } from "react";
import { Filter } from "./components/Filter";
import { Seacrh } from "./components/Search";
import { List } from "./components/List";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as companyActions from "./redux/actions/companyActions";

class App extends Component {
  componentDidMount() {
    this.props.actions.getCompanies();
  }
  render() {
    return (
      <div className="App">
        <Filter result={this.props.searchResult} />
        <div className="content">
          <Seacrh company={this.props.companies} />
          {this.props.searchResult.map((company, i) => (
            <List company={company} key={i} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    companies: state.companyListReducer,
    searchResult: state.resultReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCompanies: bindActionCreators(
        companyActions.getCompanies,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
