# how javascript work and execution context

is javascript asynchronous or synchronous ?
is javascript single threaded or multi threaded?
every thing inside a javascript happen inside the execution context, you can assume this execution context a big box or container in which whole javascript code is executed.

# so what is the execution context?

execution context is like a big box which is devided into two box , the first component is also known as memory component so this is place where all the variable and function are stored as key value pair, this memory component is also known as variable envoirment,
so this is sort of a envoirment where all these varible and function are stored as key value pair

the second component in this execution context is code component, so this is the place where code is executed one line at a time.
code componentis also known as thread of execution

# "javascript is synchronous and single threaded language"

when i say single threaded means javascript only execute one command at a time
and when i say synchronous means javascript run one command at a time in a specific order.
it only go at next line once the current line has been finished execution. so that means synchronous single threaded language.
