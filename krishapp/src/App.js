import React from 'react';
import Cards  from "./Components/Cards/Cards"
import Chart  from "./Components/Chart/Chart"
import Country from "./Components/Country/Country"
import styles from "./App.module.css";
import {fetchData} from "./api"

class App extends React.Component{

   state={
    data:{},
  }


   async componentDidMount(){
       const data = await fetchData();

       this.setState({data:data})
       
  }
  render(){
    return(
      <div className={styles.container}>
         <Cards  data={this.state.data} />
        
      </div>
     
    )
  }
}

export default App;
