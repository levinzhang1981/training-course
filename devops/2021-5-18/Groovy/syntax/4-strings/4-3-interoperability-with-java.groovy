String takeString(String message) {    
    println "message instanceof String: ${message instanceof String}"     
    return message
}

def message = "The message is ${'hello'}"   
println "message instanceof GString: ${message instanceof GString}"

def result = takeString(message)
println "result instanceof String: ${result instanceof String}"
println "result == 'The message is hello': ${result == 'The message is hello'}"