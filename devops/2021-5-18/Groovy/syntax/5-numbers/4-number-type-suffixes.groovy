println "12i instanceof Integer : ${12i instanceof Integer}" // true
println "12i instanceof Long : ${12i instanceof Long}" // false
println "12i == new Integer('12') : ${12i == new Integer('12')}" // true
println "12l == new Long('12') : ${12l == new Long('12')}" // true
println "12.5f instanceof Float : ${12.5f instanceof Float}" // true
println "12.5f instanceof Double : ${12.5f instanceof Double}" // false
println "12.5f == new Float('12.5') : ${12.5f == new Float('12.5')}" // true
println "12.5d == new Double('12.5') : ${12.5d == new Double('12.5')}" // true