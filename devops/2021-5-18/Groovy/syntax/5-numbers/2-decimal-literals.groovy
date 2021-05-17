float  f = 1.234
println "f is : ${f}, f instance of float: ${f instanceof java.lang.Float}, f instance of double: ${f instanceof java.lang.Double}"
double d = 2.345
println "d is : ${d}, d instance of float: ${d instanceof java.lang.Float}, d instance of double: ${d instanceof java.lang.Double}"
BigDecimal bd =  3.456
println "bd is : ${bd}, bd instance of float: ${bd instanceof java.lang.Float}, bd instance of double: ${bd instanceof java.lang.Double}, bd instance of big decimal: ${bd instanceof BigDecimal}"


println 2E4 == 20000
println 3e+1 == 30
println 5e-1 == 0.5