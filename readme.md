<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/371738520/21.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T1002177)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
<!-- default badges end -->

# Dashboard for React - How to access API of underlying widgets

The following example shows how to customize options of underlying widgets in the Dashboard Component for React. For this, you need to handle the [onItemWidgetOptionsPrepared](https://docs.devexpress.com/Dashboard/js-DevExpress.Dashboard.ViewerApiExtensionOptions?p=netframework#js_devexpress_dashboard_viewerapiextensionoptions_onitemwidgetoptionsprepared) event.

<!-- default file list -->
## Files to Look At

* [App.js](./dashboard-react-app/src/App.js)
<!-- default file list end -->

The customized options are listed below:

- The hovered grid row is highlighted in the underlying [dxDataGrid](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxDataGrid/).
- A standard tooltip that appears when a user hovers over a chart's series point is disabled. 
- A custom tooltip appears when a user clicks a label on the chart's argument axis. The [onArgumentAxisClick](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/#onArgumentAxisClick) property executes a function that invokes the custom tooltip.
- The [animation](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/Configuration/animation/) is enabled for the [dxChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxChart/) and [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widgets.
- The [dxPieChart](https://js.devexpress.com/DevExtreme/ApiReference/UI_Components/dxPieChart/) widget displays a legend.

The example uses a modular client-server approach. The server (backend) project communicates with the client (frontend) application that includes all the necessary styles, scripts and HTML templates. Note that the script version on the client must match the version of libraries on the server.

- The [asp-net-core-server](asp-net-core-server) folder contains an ASP.NET Core 3.1 Dashboard application.
- The [dashboard-react-app](dashboard-react-app) folder contains a client application.

## Quick Start

In the **asp-net-core-server** folder run the following command:

```
dotnet run
```

See the following section for information on how to install NuGet packages from the DevExpress NuGet feed: [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages).

> This server allows CORS requests from _all_ origins with _any_ scheme (http or https). It is insecure, because any website can make cross-origin requests to the app. We recommend you specify the client application's URL directly to prohibit clients from getting access to your personal information on your server. Learn more: [Cross-Origin Resource Sharing (CORS)](https://docs.devexpress.com/Dashboard/400709)

In the **dashboard-react-app** folder, run the following commands:

```
npm install
npm start
```

Open ```http://localhost:3000/``` in your browser to see the result.

## Documentation

- [Access to Underlying Widgets](https://docs.devexpress.com/Dashboard/400996/web-dashboard/ui-elements-and-customization/access-to-underlying-widgets?p=netframework)
- [Install DevExpress Controls Using NuGet Packages](https://docs.devexpress.com/GeneralInformation/115912/installation/install-devexpress-controls-using-nuget-packages)

## More Examples
- [Dashboard Component for React - Configuration](https://github.com/DevExpress-Examples/dashboard-react-example)
- [ASP.NET Core Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/asp-net-core-dashboard-underlying-widgets-api)
- [ASP.NET MVC Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/asp-net-mvc-dashboard-underlying-widgets-api)
- [ASP.NET Web Forms Dashboard - How to access API of underlying widgets](https://github.com/DevExpress-Examples/how-to-access-api-of-underlying-widgets-in-the-aspnet-dashboard-control-t492396)
