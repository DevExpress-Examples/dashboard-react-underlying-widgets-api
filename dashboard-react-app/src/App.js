import React from 'react';
import './App.css';
import DashboardControl, {Extensions, ViewerApi } from 'devexpress-dashboard-react';
import { GridItem, ChartItem, PieItem, GaugeItem} from 'devexpress-dashboard/model';

function customizeWidgetOptions(e) {
    if (e.dashboardItem instanceof GridItem) {
        e.options.hoverStateEnabled = true
    }
    if (e.dashboardItem instanceof ChartItem) {
        e.options.tooltip.enabled = false
        e.options.animation = {
            ...e.options.animation,
            enabled: true,
            duration: 1000
        };
        e.options.onArgumentAxisClick = function (info) {
            info.component.getAllSeries()[0].getPointsByArg(info.argument)[0].showTooltip()
        }
    }
    if (e.dashboardItem instanceof PieItem) {
        e.options.legend = {
            ...e.options.legend,
            visible: true,
            border: {
                ...e.options.legend.border,
                visible: true
            }
        }
        e.options.animation = {
            ...e.options.animation,
            enabled: true,
            duration: 1000
        }
    };
    if (e.dashboardItem instanceof GaugeItem) {
        var gaugesCollection = e.dashboardItem.gauges();
        gaugesCollection.forEach(element => {
            if (element.actualValue().dataMember() === 'UnitPrice') {
                e.options.scale.tick.tickInterval = 50
            }
        });
    };
}
function customizeWidget(e) {
    if (e.dashboardItem instanceof GaugeItem) {
        var gaugesCollection = e.getWidget();
        gaugesCollection.forEach(element => {
            element.option('scale.label.font.weight', '600');

        });
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
              onItemWidgetOptionsPrepared={customizeWidgetOptions}
              onItemWidgetUpdated={customizeWidget}
              onItemWidgetCreated={customizeWidget}>
            </ViewerApi>
          </Extensions>
      </DashboardControl>
  </div>
  );
}

export default App;