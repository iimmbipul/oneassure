import React, { Component } from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchValue} from './../Redux/action/action'
const mapProps = (store)=>{
    return{
        searchTerm : store.searchValue
    }

}
const mapDispatch = (dispatch)=>{
    return bindActionCreators({searchValue},dispatch)
}


export default connect(mapProps,mapDispatch)( class Header extends Component {
    handleChange = (value)=>{
        this.props.searchValue(value);
    }
    render() {
        return (
            <div className="header">
                <span>ONE</span>
                <div className="search">
                <input  value={this.props.searchTerm} onChange={(e)=>this.handleChange(e.target.value)}type="text" placeholder="Search by Name" />
                </div>
            </div>
        )
    }
})
