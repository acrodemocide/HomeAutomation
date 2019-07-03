# HomeAutomation

This serves as the central web api for home automation. This will facilitate dispatching commands from the web app and phone app to the home automation central hub. This also will communicate with the central hub to get the status of all home automation devices as well as the status of the home automation network. This will be used to register new users and new home automation networks. The web api interacts with the database to keep track of registered users and each users home automation network.

A home automation network is the network of all devices on a single network (associated with a single central hub). The home automation network will include all the devices connected and will be able to report on the status of each device. The database will store all information for each home automation network. This will include keeping a list of registered devices and each device's current status.

Users will be able to register themselves with the web app. A registered user is provided a dashboard when he/she logs in to manage his/her home automation network.

New devices added to the network will be registered with the central hub which will then report that information to the web api. 

Reference https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-2.2&tabs=visual-studio-code for more information on building the web api.