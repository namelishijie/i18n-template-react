import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import mapDispatchToProps from './homeAction'
import intl from 'react-intl-universal'

class Home extends Component {
  i18n() {
    intl.options.currentLocale = 'en'
    this.forceUpdate() // 刷新
  }
  render() {
    return (
      <div>
        <p>{this.props.getAction.c}</p>
        <p>{ intl.get('home.title') }</p>
        <button onClick={this.i18n.bind(this)}>更改语言</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    getAction: state.HomeReducers
  }
}

const mapDispatch = dispatch => {
  return {
    setAction: bindActionCreators(mapDispatchToProps, dispatch)
  }
}

export default Home = connect(mapStateToProps, mapDispatch)(Home)
