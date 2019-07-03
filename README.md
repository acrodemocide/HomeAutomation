# HomeAutomation
This is a basic home automation set up that allows a user to control various components on their home network. The framework should be set up so that adding new automation items requires little or no additional code. New items should ultimately be able to be registered and deregistered from the network by the administrator.

# web.home-automation
This is the front end code that allows the user to interact with their home automation network from a web browser. The plan is to eventually adapt this to use React Native for
mobile so that the user can conveniently control any home automation devices from anywhere.

# homeAutomationCentralHub
This is the code that will run on the central hub for an automated location. The central hub will be a raspberry pi running a C program that directs new commands to each of the devices on the network. This is the central location for all automation devices to send any data updates to which will then be updated on the server.

# homeAutomationApi
This is the central server to interact with for all communication between the home automation and the user interface (either web or mobile). This is set up using dotnet core web api and is run on Linux.