import React from 'react';
import './App.css';
import DashboardControl, {Extensions, ViewerApi } from 'devexpress-dashboard-react';
import { GridItem, ChartItem, PieItem} from 'devexpress-dashboard/model';

function customizeWidgetOptions(e) {
  if (e.dashboardItem instanceof GridItem) {
    e.options.hoverStateEnabled = true
  };
  if (e.dashboardItem instanceof ChartItem || e.dashboardItem instanceof PieItem) {  
    e.options.tooltip = {
      enabled: false
    };
    e.options.animation = {
      enabled: true,
      duration: 1000
    };
    e.options.onArgumentAxisClick = function (info) {
      info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip()
    }
  };  
  if (e.dashboardItem instanceof PieItem) {    
    e.options.legend = {
      visible: true,
      border: {
          visible: true
      }
    };
  }
}

function App() {  
  return (
    <div style={{ position : 'absolute', top : '0px', left: '0px', right : '0px', bottom: '0px' }}>
      <DashboardControl style={{ height: '100%' }} 
        endpoint="http://localhost:5000/api/dashboard"
        workingMode="Viewer">    
          <Extensions>
            <ViewerApi 
              onItemWidgetOptionsPrepared={customizeWidgetOptions}>              
            </ViewerApi>
          </Extensions>
      </DashboardControl>
  </div>
  );
}

export default App;