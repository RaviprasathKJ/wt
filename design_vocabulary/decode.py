import xml.etree.ElementTree as ET

tree = ET.parse('aircraft.xml')
root =tree.getroot()

for aircraft in root.findall('Aircraft'):
    print('Aircraft:')
    print(f"Manufacturer: {aircraft.find('Manufacturer').text}")
    print(f"Model: {aircraft.find('Model').text}")
    print(f"Serial Number: {aircraft.find('SerialNumber').text}")
    print(f"Registration Number: {aircraft.find('RegistrationNumber').text}")
    engine = aircraft.find('Engine')
    print('Engine:')
    print(f"Manufacturer: {engine.find('Manufacturer').text}")
    print(f"Model: {engine.find('Model').text}")
    for seats in aircraft.findall('Seats'):
        print('Seats:')
        print(f"Class: {seats.find('Class').text}")
        print(f"Number: {seats.find('Number').text}")
    print(f"Max Takeoff Weight: {aircraft.find('MaxTakeoffWeight').text}")
    print(f"Max Cruising Speed: {aircraft.find('MaxCruisingSpeed').text}")
    print('')

for flight in root.findall('Flight'):
    print('Flight:')
    print(f"Flight Number: {flight.find('FlightNumber').text}")
    print(f"Departure Airport: {flight.find('DepartureAirport').text}")
    print(f"Departure Time: {flight.find('DepartureTime').text}")
    print(f"Arrival Airport: {flight.find('ArrivalAirport').text}")
    print(f"Arrival Time: {flight.find('ArrivalTime').text}")
    print(f"Aircraft ID: {flight.find('Aircraft/AircraftID').text}")
    print('')

for airport in root.findall('Airport'):
    print('Airport:')
    print(f"Code: {airport.find('Code').text}")
    print(f"Name: {airport.find('Name').text}")
    location = airport.find('Location')
    print('Location:')
    print(f"Latitude: {location.find('Latitude').text}")
    print(f"Longitude: {location.find('Longitude').text}")
    print('')
