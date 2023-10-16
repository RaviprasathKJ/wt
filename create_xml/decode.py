import xml.etree.ElementTree as ET

tree = ET.parse('movies.xml')
root = tree.getroot()

for items in root.findall('movie'):
    name = items.find('title').text
    price = items.find('duration').text
    des = items.find('genre').text
    print(f'Name:{name}')
    print(f'Price:${price}')
    print(f'Description:{des}\n')
