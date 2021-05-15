// a standalone single line comment
println "Hello Groovy" // a comment till the end of the line

/* a standalone multiline comment
   spanning two lines */
println "Hello Groovy!" /* a multiline comment starting
                   at the end of a statement */
println 1 /* one */ + 2 /* two */

/**
 * a standalone groovy doc comment
 */
class Person {
    /** the name of the person */
    String name

    /**
     * Creates a greeting method for a certain person.
     *
     * @param otherPerson the person to greet
     * @return a greeting message
     */
    String greet(String otherPerson) {
        "Hello ${otherPerson}"
    }
}
