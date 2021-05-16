def name = "Jack"
def date = "May, 18"

def dollarSlashy = $/
    Hello $name,
    today it's ${date}.

    $ dollar sign
    $$ escaped dollar sign
    \ backslash
    / forward slash
    $/ escaped forward slash
    $$$/ escaped opening dollar slashy
    $/$$ escaped closing dollar slashy
/$

println dollarSlashy