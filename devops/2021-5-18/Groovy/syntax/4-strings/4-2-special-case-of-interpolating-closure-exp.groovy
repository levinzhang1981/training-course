def parameter_less_closure = "1 + 2 == ${-> 3}" 
println parameter_less_closure

// 惰性计算
def number = 1 
def eagerGString = "value == ${number}"
def lazyGString = "value == ${ -> number }"

println eagerGString // "value == 1" 
println lazyGString // "value == 1" 

number = 2 
println eagerGString // "value == 1" 
println lazyGString // "value == 2" 