println "one: 1".hashCode() // -1012478555
println "one: 1".hashCode() // -1012478555
println "one: ${1}".hashCode() // -1012478518
println "one: ${1}".hashCode() // -1012478518
println "one: ${->1}".hashCode() // -1012478518
println "one: ${1+0}".hashCode() // -1012478518
def number =  5+6-10
println "one: ${number}".hashCode() // -1012478518

def key = "a"
def m = ["${key}": "letter ${key}"]
println m["a"] // null