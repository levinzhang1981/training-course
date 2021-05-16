def name = "Jack"
def greeting = "Hello ${name}"
println greeting

def sum = "The sum of 2 and 3 equals ${2+3}"
println sum

println "The result of exp1 is ${def x = 1;def y = 2; x+y}"

def person = [name: 'Tom', age: 29]
println "$person.name is $person.age years old"

println "\$name"