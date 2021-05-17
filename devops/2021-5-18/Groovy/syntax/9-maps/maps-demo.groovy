def colors = [red: '#FF0000', green: '#00FF00', blue: '#0000FF']
println "colors['red'] == '#FF0000': ${colors['red'] == '#FF0000'}"
println "colors.green  == '#00FF00': ${colors.green  == '#00FF00'}"

colors['pink'] = '#FF00FF'
colors.yellow  = '#FFFF00'
println "colors.pink == '#FF00FF': ${colors.pink == '#FF00FF'}"
println "colors['yellow'] == '#FFFF00': ${colors['yellow'] == '#FFFF00'}"

println "colors instanceof java.util.LinkedHashMap: ${colors instanceof java.util.LinkedHashMap}"

println colors.white

def numbers = [1: 'one', 2: 'two']
println "numbers[1]: ${numbers[1]}"

def key1 = 'name1'
def person1 = [key1: 'Guillaume']
println person1.containsKey('key1')
println person1.containsKey('name1')

def key2 = 'name2'
def person2 = [(key2): 'Guillaume']
println person2.containsKey('key2')
println person2.containsKey('name2')
println person2

// How about changing the value of key2?
// key2 = 'name3'
// println person2