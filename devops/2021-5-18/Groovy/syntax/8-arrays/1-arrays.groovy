String[] arrStr = ['Ananas', 'Banana', 'Kiwi']
println "arrStr instanceof String[]: ${arrStr instanceof String[]}"
println "arrStr instanceof List: ${arrStr instanceof List}"

def numArr = [1, 2, 3] as int[]      
println "numArr instanceof int[]: ${numArr instanceof int[]}"
println "numArr.size(): ${numArr.size()}"

def matrix3 = new Integer[5][3]         
println "matrix3.size() ${matrix3.size()}"

Integer[][] matrix2                     
matrix2 = [[1, 2], [3, 4]]
println "matrix2 instanceof Integer[][]: ${matrix2 instanceof Integer[][]}"

String[] names = ['Jack', 'Tom', 'Gavin', 'Levin']
println names[0]   

names[1] = 'Focus'
println names

def prices1 = new int[] {2, 3, 5, 7, 11}
println prices1

// Not allowed!
// Integer[] prices2 = {4, 5, 6, 7, 8}
// println prices2