# homeAutomationCentralHub

This is the central hub (to be run on the network of the automated home) that serves as the communication point between the web and the home. It queues up all requests made from the web and dispatches them to each of the devices on the network. This also serves as a central location to report to the web what home automation devices are available.

The central hub will be a raspberry pi. The code will be written in c++ and run directly on the hardware (no operating system will be used). It will initially be controlled within the network (via ssh or something similar). In the end, a touch screen will be added which allows for easy setup.