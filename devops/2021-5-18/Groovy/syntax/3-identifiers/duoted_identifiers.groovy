def map = [:]

map."an identifier with a space and double quotes" = "THIS IS ALLOWED"
map.'with-dash-signs-and-single-quotes' = "THIS IS ALLOWED TOO"

println map."an identifier with a space and double quotes" // THIS IS ALLOWED
println map.'with-dash-signs-and-single-quotes' // THIS IS ALLOWED TOO
println map.'unexisted identifiers' // null

map.'single quote'='single quote'
map."double quote"="double quote"
map.'''triple single quote'''='''triple single quote'''
map."""triple double quote"""="""triple double quote"""
map./slashy string/=/slashy string/
map.$/dollar slashy string/$=$/dollar slashy string/$

println map."single quote" // single quote
println map."double quote" // double quote
println map."triple single quote" // triple single quote
println map."triple double quote" // triple double quote
println map."slashy string" // slashy string
println map."dollar slashy string" // dollar slashy string