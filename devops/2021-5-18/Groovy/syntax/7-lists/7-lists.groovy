def numbers = [1, 2, 3] // 定义一个由逗号和方括号分隔的列表号，并将该列表分配给一个变量
println "numbers instanceof List: ${numbers instanceof List}" // 列表是 java.util.List 的实例接口
println "numbers.size(): ${numbers.size()}" // 使用size()方法获取列表的数据个数

def heterogeneous = [1, "a", true]
println heterogeneous // 异类列表

def multi = [[0, 1], [2, 3]]     
println multi[1][0] // 2

def arrayList = [1, 2, 3]
println "arrayList instanceof java.util.ArrayList: ${arrayList instanceof java.util.ArrayList}"

def linkedList = [2, 3, 4] as LinkedList
println "linkedList instanceof java.util.LinkedList: ${linkedList instanceof java.util.LinkedList}"

LinkedList otherLinked = [3, 4, 5]          
println "otherLinked instanceof java.util.LinkedList: ${otherLinked instanceof java.util.LinkedList}"


def letters = ['a', 'b', 'c', 'd', 'e']
println letters[0] // a
println letters[-2] // d
letters << 'f'
println letters // [a, b, c, d, e, f]
println letters[1,3] // [b, d]
println letters[1..3] // [b, c, d]
letters[3] = 'ddd'
println letters // [a, b, c, ddd, e, f]