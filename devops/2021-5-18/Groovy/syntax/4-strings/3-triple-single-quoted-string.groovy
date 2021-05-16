def str_multi_line1 = '1-first line \nsecond line'
println str_multi_line1
println '---------------------------------'

def str_multi_line2 = '''2-first line
second line
'''
println str_multi_line2
println '---------------------------------'

def str_multi_line3 = ''' THIS
    IS
    TEST3'''
println str_multi_line3.stripIndent()
println str_multi_line3
println '---------------------------------'

def str_multi_line4 = '''\
    THIS
    IS
    TEST4'''
println str_multi_line4.stripIndent()
println str_multi_line4
println '---------------------------------'

def str_multi_line5 = '''*THIS
    *IS
    *TEST5'''
println str_multi_line5.stripMargin('*')
println str_multi_line5
println '---------------------------------'

def str_multi_line6 = '''
THIS
IS
NEWLINE
'''
println str_multi_line6.startsWith('\n')
println str_multi_line6
println '---------------------------------'

def str_multi_line7 = '''\
THIS
IS
NEWLINE
'''
println str_multi_line7.startsWith('\n')
println str_multi_line7
println '---------------------------------'