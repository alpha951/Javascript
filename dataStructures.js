//! Set

const unique = new Set()
unique.add(3)
unique.add(4)
unique.add(5)
unique.add(3)

console.log(unique)// Set(3) { 3, 4, 5 }

const numbers = [4, 55, 5, 5, 7, 9, 9]

const uniqueNumbers = new Set(numbers)
console.log(uniqueNumbers)

//! to convert the set into Array use the Array constructor

console.log(Array.from(uniqueNumbers))


//TODO:  Map (Hashtables)

const urls = new Map()
urls.set('dev', 'dev.example.com')
urls.set('prod', 'orgName.example.com')

//! get element
console.log(urls.get('dev'))


//? JS objects also work similar to hashmap but order is not fixed in objects unlike Map. Also we can't check size of objects directly while in Map we can use map.size()

// iterate over Map

for (const url of urls) {
    console.log(url)
}

for (const [key, value] of urls) {
    console.log(key, value)
}

