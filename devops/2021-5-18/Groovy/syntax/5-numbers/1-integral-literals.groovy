byte b = 1
println "b: ${b}"
char c = 2
println "c: ${c}"
short s = 3
println "s: ${s}"
int i = 4
println "i: ${i}"
long l = 5
println "l: ${l}"
BigInteger bi = 6
println "bi: ${bi}"

def num1 = 1
println "num1 is instanceof Integer: ${num1 instanceof Integer}"

// Integer.MAX_VALUE
def num2 = 2147483647
println "num2 instanceof Integer: ${num2 instanceof Integer}"

// Integer.MAX_VALUE + 1
def num3 = 2147483648
println "num3 instanceof Integer: ${num3 instanceof Integer}"
println "num3 instanceof Long: ${num3 instanceof Long}"

// Long.MAX_VALUE
def num4 = 9223372036854775807
println "num4 instanceof Long: ${num4 instanceof Long}"

// Long.MAX_VALUE + 1
def num5 = 9223372036854775808
println "num5 instanceof BigInteger: ${num5 instanceof BigInteger}"