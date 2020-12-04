import React, { Component } from 'react';
import　Notification from './Notifaction'
import  List from './List'

class Dashboard extends Component{
     render () {
         return(
           <div className="dashboard container">
             <div className="row">
              <div className="col s12 m6">
               <List/>
           </div>
             <div className="col s12 m5 offset-m1">
              <Notification/>
           </div>
          </div>
         </div>
         )
     }
}

export default Dashboard ;