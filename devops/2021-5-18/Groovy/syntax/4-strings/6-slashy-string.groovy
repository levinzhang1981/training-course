def slashyStr1 = /This is a sample test with \, 1/
println slashyStr1
def sampleStr2 = "This is a sample test with \\, 1"
println sampleStr2

def slashyForwardSlash = /This character \/ is a forward slash/
println slashyForwardSlash
def sampleForwardSlash = "This character / is a forward slash"
println sampleForwardSlash

def multilineSlashy = /one
    two
    three/
println multilineSlashy

def color = 'blue'
def interpolatedSlashy = /a ${color} car/
println interpolatedSlashy