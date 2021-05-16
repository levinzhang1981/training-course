def double_quoted_flag = "double quoted"
println double_quoted_flag

def double_quoted_str = "This is ${double_quoted_flag} str"
println double_quoted_str

def double_quoted_str_with_double_quoted = "$double_quoted_str with \""
println double_quoted_str_with_double_quoted