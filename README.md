# Siple Photo Search - Web application to illustrate React.js & ASP.NET MVC Core

Initial setup
-----------

* [Install ASP.NET Core MVC on macOS, Linux, or Windows](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app-xplat/start-mvc?view=aspnetcore-2.1#prerequisites)
* Create new project:
```shell
dotnet new webapi -o PhotosSearchDemo
```

Develop images retrieve logic
-----------
* Add photos controller and photos data services.
* Add dependency to WebApi.Client.
* Add .gitignore file.
* Test on local server that API works - ```/api/photos/dog```

Add reactjs as frontend. Enable static and default files for MVC.
-----------
Static files, such as HTML, CSS, images, and JavaScript, are assets an ASP.NET Core app serves directly to clients. Some configuration is required to enable to serving of these files. Static files are stored within your project's web root directory. The default directory is `<content_root>/wwwroot`, but it can be changed. To serve files inside of web root
invoke the `UseStaticFiles` method within `Startup.Configure`:
```c#
public void Configure(IApplicationBuilder app)
{
    app.UseStaticFiles();
}
```
Setting a default home page provides visitors a logical starting point when visiting your site. To serve a default page without the user fully qualifying the URI, call the `UseDefaultFiles` method from `Startup.Configure`:
```c#
public void Configure(IApplicationBuilder app)
{
    app.UseDefaultFiles();
}
```
Create ReactDemo class. ReactDOM calls it initially.
-----------
Render a React element into the DOM in the supplied container and return a reference to the component (or returns null for stateless components).

Develop TitleBox component. Add it as ReactDemo's child component.
-----------

Pass properties to child component. Use componentWillMount method to initiate variables.
-----------
The first true life cycle method called is `componentWillMount()`. This method is only called one time, which is before the initial render. Since this method is called before `render()` our Component will not have access to the Native UI (DOM, etc.). We also will not have access to the children refs, because they are not created yet.
The `componentWillMount()` is a chance to handle configuration, update our state, and in general prepare for the first render. At this point, props and initial state are defined. We can safely query this.props and this.state, knowing with certainty they are the current values. This means we can start performing calculations or processes based on the prop values.

Add button to component and add click event to it.
-----------
Functions can be passed as properties.

Add input to SearchBox component. Add handler to update its value. Use getInitialState method to initialize state variable.
-----------
`getInitialState` method enables to set the initial state value, that is accessible inside the component via this.state.

Add SearchResult component. Show output based on input and trigger by the button.
-----------

Implement backend logic and show search result
-----------
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network.

Add styles
-----------
![logo](https://i.ytimg.com/vi/iJR-TbIjb2w/hqdefault.jpg)

