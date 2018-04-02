'''This is a python OOP program
Trace Larson
DPW Section 01
April 1, 2018
'''

#from Utils import calc_mpg

#this utility class WOULD NOT import, I could not figure out why this is
class Utils:
    @staticmethod
    def calc_mpg(fuel_range, fuel_capacity):
        mpg = float(fuel_range/fuel_capacity)
        return mpg


#Abstract class that is not instantiated
class Vehicle:
    def __init__(self, name, fuel_range, fuel_capacity):
        print('Vehicle created')
        self.name = name
        self.fuel_range = fuel_range
        self.fuel_capacity = fuel_capacity

    def get_name(self):
        return self.name

    def get_range(self):
        return self.fuel_range

    def get_capacity(self):
        return self.fuel_capacity

    def get_mpg(self):
        mpg = Utils.calc_mpg(self.fuel_range, self.fuel_capacity)
        return mpg


#static variable
Vehicle.team = 'Autobots'

#Car class inherits from Vehicle and creates a driver class on instantiation
class Car(Vehicle):
    def __init__(self, name, fuel_range, fuel_capacity, driver):
        print("Car created")
        super().__init__(name, fuel_range, fuel_capacity)
        self.driver = Driver(driver)

    def get_driver_name(self):
        return self.driver.get_driver_name()

#Transformer class inherits from Vehicle and creates a driver class on instantiation, but overides all of the methods
#From the Vehicle class
class Transformer(Vehicle):
    def __init__(self, name, fuel_range, fuel_capacity, driver):
        print("Transformer created")
        super().__init__(name, fuel_range, fuel_capacity)
        self.driver = Driver(driver)

    def get_range(self):
        return 100000

    def get_capacity(self):
        return 1000000

    def get_driver_name(self):
        return self.driver.get_driver_name()

    def get_mpg(self):
        return 1000000

#Class Driver is a class that is an aggregate of Transformer or Car
class Driver:
    def __init__(self, driver_name):
        print("Driver Created")
        self.name = driver_name

    def get_driver_name(self):
        return self.name

#CarList is what will hold our list of cars
carList = []

#this function gets the users input using a loop, as well as sets the static variable
def get_user_data():
    print("WELCOME TO RACE CAR LIST, optimus or bumblebee will be our special racer cars today!!")
    Vehicle.team = input("(STATIC) Enter Team Name: ")
    i = 0
    while i < 3:
        name = input("Enter Vehicle Name: ").lower() #makes the input lowercase
        driver = input("Enter the driver's name: ")
        fuel_range = float(input("Enter fuel range in miles: ")) #converts the string to float
        fuel_capacity = float(input("Enter fuel capacity in gallons: ")) #converts the string to a float

        #conditional statement to check if the special class should be instantiated
        if name == 'optimus' or name == 'bumblebee':
            carList.append(Transformer(name, fuel_range, fuel_capacity, driver))
        else:
            carList.append(Car(name, fuel_range, fuel_capacity, driver))

        i += 1
    #Calling display info once out loop has completed
    display_info()

#display info displays a chart of all the vehicles that have been created.
def display_info():
    print("Race Team  |  Vehicle Name  |  Driver  |  MPG  ")
    for car in carList:
        print("%s   |   %s   |   %s   |   %d" % (Vehicle.team, car.get_name(), car.get_driver_name(), car.get_mpg()))



#calls the get_user_data function to start the programm
get_user_data()