import React, { Component } from 'react';
import Header from './component/header/header';
import UpperSection from './component/UpperSection/UpperSection';
import LowerSection from './component/lowerSection/lowerSection';
import weatherApi from './action/weatherApi';
import {bindActionCreators} from 'redux';
import {setSearchData} from './action/index';
import { connect } from "react-redux";


class App extends Component {
  
  getData = (list) =>
  {
    this.props.setSearchData(list);   
    this.refs.lowerSect.setData(this.props.totalTemp);
  }

  getweather = (e) =>
  {  
    const cityName = e.cityDetail;
    const searchType = e.findTypes;
    weatherApi(cityName,searchType,this.getData);
  }




  render() { 
    return ( 
      <div>
       <Header />
       <UpperSection getweather ={this.getweather}/>
       <LowerSection ref="lowerSect"/>
      </div>
     );
  }
}


const mapStateToProps =(state)=>
{

  /* return {
    cityName: state.reducer.cityName,
    searchType: state.reducer.searchType,
    totalTemp: state.reducer.totalTemp,
    fiveDayTemp : state.reducer.fiveDayTemp
  } */
  //console.log("here in mapStateToProps =",state);
  return state.reducer;
}

 const mapDispatchToProps=(dispatch)=> {
  return bindActionCreators({setSearchData : setSearchData}, dispatch)
  
}
export default connect(mapStateToProps,mapDispatchToProps) (App,weatherApi,LowerSection);
 
