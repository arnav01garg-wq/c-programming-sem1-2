const topics=[
{u:1,t:'C program structure & compilation',tags:['high','pyq'],intro:'Understand the skeleton of a C program and the path from source code to an executable.',body:`A typical program uses headers, declarations, main(), statements and return 0. The compilation flow is commonly described as preprocessing → compilation → assembly → linking → executable.` ,code:`#include <stdio.h>\n\nint main(void)\n{\n    printf("Hello, C!\\n");\n    return 0;\n}`,exam:'5-mark answer: draw the basic structure, name each part, then explain preprocessing, compilation, assembly and linking in order.'},
{u:1,t:'Data types & format specifiers',tags:['high','pyq'],intro:'Know int, char, float, double, bool/_Bool and fixed-width integer types, plus the format specifiers you will actually write.',body:'Your notes list int, float, double, char and void as primary types. The exact size can depend on the system/compiler; the notes commonly show int≈4 bytes, float≈4, double≈8 and char=1 byte. For portable fixed-width integers, use <stdint.h> types such as int32_t when available.',code:`int n = 25;\nchar ch = 'A';\nfloat x = 3.5f;\ndouble y = 3.14159;\n\nprintf("%d %c %f %lf\\n", n, ch, x, y);`,exam:'Remember: %d → int, %c → char, %f → floating output, and scanf uses %lf for double.'},
{u:1,t:'Declarations, initialization & constants',tags:['high'],intro:'Separate declaration from initialization and learn const versus #define.',body:'A declaration tells C about a variable. Initialization gives its first value. const creates a typed object whose value should not be modified after initialization; #define creates a preprocessor macro constant by textual substitution.',code:`const int MAX = 100;\n#define PI 3.14159\n\nint count;\nint marks = 90;`,exam:'A common theory comparison: const is compiler-managed, typed and follows scope rules; #define is handled by the preprocessor and has no data type.'},
{u:1,t:'Operators & expressions',tags:['high','pyq'],intro:'Arithmetic, assignment, relational, logical, bitwise, conditional, increment/decrement, sizeof and comma operators.',body:'Operators work on operands to produce a value or perform an operation. Pay special attention to integer division, precedence, &&/|| short-circuiting, bitwise &, |, ^, ~, shifts, and ?: for exam output questions.',code:`int a = 23, b = 5;\nprintf("%d\\n", a / b); // 4\nprintf("%d\\n", a % b); // 3\n\nint max = (a > b) ? a : b;`,exam:'PYQs repeatedly ask operator categories and output tracing. Always evaluate precedence before substituting values.'},
{u:1,t:'Type conversion & casting',tags:['high','pyq'],intro:'Understand implicit conversion and explicit casts, especially integer-versus-floating division.',body:'Implicit conversion happens automatically when C converts an expression to a compatible type. Explicit conversion uses a cast such as (float)x. A classic trap is integer division: 5/2 is 2 when both operands are int.',code:`int a = 5, b = 2;\nprintf("%d\\n", a / b);\nprintf("%.2f\\n", (float)a / b);`,exam:'For output questions, write the type of every operand before calculating the expression.'},
{u:1,t:'printf, scanf & format specifiers',tags:['program'],intro:'Input/output patterns you can reproduce quickly in an exam.',body:'printf writes formatted output. scanf reads formatted input and normally needs the address of the variable using & (except cases such as a character array used for a string).',code:`int age;\nfloat marks;\n\nscanf("%d", &age);\nscanf("%f", &marks);\nprintf("Age=%d Marks=%.2f\\n", age, marks);`,exam:'Check the format specifier and whether scanf needs & before moving on.'},
{u:1,t:'Compound statements (blocks)',tags:[],intro:'A block groups multiple statements inside { } and is treated as one statement.',body:'Blocks commonly form the body of if, loops and functions. Variables declared inside a block have block scope. A block itself does not end with a semicolon.',code:`if (x > 0)\n{\n    printf("positive\\n");\n    x--;\n}`},
{u:1,t:'if, if-else, else-if & nested decisions',tags:['high','pyq'],intro:'Decision making: write conditions cleanly and trace which branch executes.',body:'In C, a condition is false when it evaluates to 0 and true when it is non-zero. An else-if ladder tests conditions from top to bottom; once a true branch is selected, the remaining ladder is skipped.',code:`if (marks >= 90)\n    grade = 'A';\nelse if (marks >= 75)\n    grade = 'B';\nelse\n    grade = 'C';`,exam:'PYQs include leap-year logic and ternary/conditional decision questions.'},
{u:1,t:'switch statement',tags:['high','pyq'],intro:'Use switch when one expression is matched against several constant case labels.',body:'case labels select a branch. break prevents falling through into the next case. default handles unmatched values. Be careful: continue inside a surrounding loop behaves differently from break.',code:`switch (choice)\n{\n    case 1: printf("One"); break;\n    case 2: printf("Two"); break;\n    default: printf("Other");\n}`},
{u:1,t:'Loops: while, do-while & for',tags:['high','pyq'],intro:'Master entry-controlled versus exit-controlled loops and the three-part for loop.',body:'while and for test their condition before the body. do-while executes its body at least once because the condition is checked afterward. Trace initialization, condition, body and update in that order.',code:`for (int i = 1; i <= 5; i++)\n    printf("%d ", i);\n\nint j = 1;\ndo {\n    printf("%d ", j);\n    j++;\n} while (j <= 5);`,exam:'A 2024 PYQ directly asks the difference between while and do-while.'},
{u:1,t:'break, continue, goto & return',tags:['high','pyq'],intro:'Jump statements alter the normal flow of execution.',body:'break exits the nearest loop/switch. continue skips the remaining body of the current loop iteration. goto jumps to a labeled statement. return exits a function and may provide a value to its caller.',code:`for (int i = 1; i <= 10; i++)\n{\n    if (i == 5) continue;\n    if (i == 9) break;\n    printf("%d ", i);\n}`},
{u:1,t:'Algorithm, flowchart & pseudocode',tags:['high','pyq'],intro:'Turn a problem into logic before writing C code.',body:'Your notes describe an algorithm as finite step-by-step instructions, a flowchart as a diagrammatic representation, and pseudocode as language-independent English-like logic. All three are planning tools before coding.',code:`BEGIN\nINPUT A, B, C\nSum ← A + B + C\nAvg ← Sum / 3\nOUTPUT Avg\nEND`,exam:'PYQs have asked algorithm vs flowchart and have asked for factorial/triangle-style algorithms and flowcharts.'},
{u:1,t:'Tracing & dry run',tags:['high','pyq'],intro:'Learn the mechanical method for predicting program output.',body:'Make a table of important variables. For each statement, update values in order. For loops, trace initialization → condition → body → update → condition. For branches, evaluate the condition before choosing a path.',code:`for (int i = 1; i <= 3; i++)\n    printf("%d ", i);\n\n// Trace: i=1 → print 1\n// i=2 → print 2\n// i=3 → print 3\n// i=4 → condition false`,exam:'Dry-run questions appear throughout the PYQs; do not jump directly to the output.'},
{u:1,t:'Structured programming',tags:[],intro:'Organize programs using sequence, selection and iteration instead of unnecessary jumps.',body:'The notes emphasize programs that are easier to understand, test, debug, modify and maintain. Main control structures are sequence, selection and iteration.',exam:'Use this wording in theory answers: modular, systematic, easier to test/debug/maintain.'},
{u:1,t:'C89, C99, C11 & C23',tags:['high'],intro:'Know the major standard-era extensions listed in your syllabus.',body:'Your notes summarize C89/C90 as the foundation, C99 with // comments, long long, inline, declarations in for and VLAs, C11 with _Generic, _Static_assert, atomics and threading support, and C23 with features such as nullptr, typeof and binary literals.',exam:'If asked to compare standards, give 2–3 distinctive features plus the practical purpose of each.'},
{u:2,t:'Function declaration, definition & invocation',tags:['high','pyq','program'],intro:'The three pieces of a user-defined function and how arguments move into it.',body:'A prototype tells the compiler the function return type, name and parameter list. A function call transfers control to the function. The definition contains the actual statements. Functions improve modularity and reuse.',code:`int add(int a, int b);\n\nint main(void)\n{\n    printf("%d", add(2, 3));\n    return 0;\n}\n\nint add(int a, int b)\n{\n    return a + b;\n}`},
{u:2,t:'Argument passing & call by value',tags:['high','pyq'],intro:'Understand what C actually passes to functions and how to modify caller data.',body:'Ordinary C argument passing is by value: the function receives a copy. To modify an object in the caller, pass its address using a pointer. Many college notes call this “call by reference”; technically, C still passes the pointer value by value.',code:`void change(int *x)\n{\n    *x = 99;\n}\n\nint a = 10;\nchange(&a);\n// a is now 99`},
{u:2,t:'Recursion',tags:['high','pyq','program'],intro:'A function calls itself until a base case stops the recursion.',body:'Your notes emphasize a base case, compact solutions and uses such as factorial and Fibonacci. Each call consumes stack space, so a missing base case can cause unbounded recursion.',code:`int fact(int n)\n{\n    if (n <= 1) return 1;\n    return n * fact(n - 1);\n}`},
{u:2,t:'Inline functions & macro functions',tags:['high'],intro:'Know the idea of inline functions and function-like macros, and the safety differences.',body:'inline suggests that the compiler may substitute a function body at call sites; it is not a guarantee. Function-like macros are preprocessor substitutions, so parentheses are important and arguments are not type-checked like normal function parameters.',code:`#define SQUARE(x) ((x) * (x))\n\nstatic inline int cube(int x)\n{\n    return x * x * x;\n}`},
{u:2,t:'Storage classes',tags:['high','pyq'],intro:'auto, static, extern, register and thread_local — scope, lifetime and defaults.',body:'Storage class affects visibility/scope, lifetime and linkage/storage behavior. The notes describe automatic locals as block-lived, static variables as retaining values for the program lifetime, extern for referring to an external definition, register as a request for fast access, and thread_local for per-thread storage.',exam:'For theory, make a 4-column table: keyword, scope, lifetime, typical use.'},
{u:2,t:'Scope & lifetime',tags:['high','pyq'],intro:'Do not confuse where a name can be used with how long its object exists.',body:'Block/local scope limits a name to its block/function. File scope applies to declarations outside functions. Lifetime is the period during which the object exists. A local static has local scope but program-long lifetime.',exam:'That “local scope + entire-program lifetime” combination is a common static-variable question.'},
{u:2,t:'Header files & modular design',tags:['high','pyq'],intro:'Use headers for declarations and split larger programs into understandable modules.',body:'Standard headers expose library declarations. Modular design divides a program into functions/files with clear responsibilities. Common examples include stdio.h for I/O and string.h for string operations.',code:`#include <stdio.h>\n#include <string.h>\n\n// declarations/prototypes first\nint add(int, int);`},
{u:2,t:'1D & 2D arrays',tags:['high','pyq','program'],intro:'Declaration, initialization, indexing and row/column access.',body:'C arrays store elements of the same type in contiguous memory. Indexing starts at 0. A 2D array is commonly treated as rows and columns.',code:`int a[5] = {10, 20, 30, 40, 50};\nint m[2][3] = {{1,2,3},{4,5,6}};\nprintf("%d", m[1][2]); // 6`,exam:'PYQs ask declaration/initialization, transpose, max/min and array processing.'},
{u:2,t:'Bubble sort',tags:['high','pyq','program'],intro:'Repeatedly compare adjacent elements and swap them when they are in the wrong order.',body:'After each pass, the largest remaining value moves toward the end for ascending order. It is simple but O(n²) average/worst case.',code:`for (i = 0; i < n - 1; i++)\n    for (j = 0; j < n - 1 - i; j++)\n        if (a[j] > a[j+1]) {\n            int t = a[j]; a[j] = a[j+1]; a[j+1] = t;\n        }`,exam:'2024 PYQ: write a program to implement bubble sort.'},
{u:2,t:'Selection sort',tags:['high','pyq','program'],intro:'Find the smallest element in the unsorted part and place it at the next position.',body:'Each pass selects the minimum and swaps it into position. The uploaded notes compare it with bubble and insertion sort and emphasize its simplicity and fewer swaps.',code:`for (i = 0; i < n - 1; i++) {\n    int min = i;\n    for (j = i + 1; j < n; j++)\n        if (a[j] < a[min]) min = j;\n    int t = a[i]; a[i] = a[min]; a[min] = t;\n}`},
{u:2,t:'Insertion sort',tags:['high','pyq','program'],intro:'Take the next key and shift larger sorted elements right until the key fits.',body:'It is particularly natural for small or nearly sorted data. It runs in O(n²) average/worst case and O(n) best case.',code:`for (i = 1; i < n; i++) {\n    int key = a[i], j = i - 1;\n    while (j >= 0 && a[j] > key) {\n        a[j + 1] = a[j];\n        j--;\n    }\n    a[j + 1] = key;\n}`},
{u:2,t:'Linear & binary search',tags:['high','pyq','program'],intro:'Know when each search works and how to trace the comparisons.',body:'Linear search checks elements one by one and does not require sorted data. Binary search repeatedly halves a sorted search range, so the data must be sorted.',code:`// Binary search core\nint low = 0, high = n - 1;\nwhile (low <= high) {\n    int mid = low + (high - low) / 2;\n    if (a[mid] == key) break;\n    if (a[mid] < key) low = mid + 1;\n    else high = mid - 1;\n}`,exam:'A PYQ asks binary-searching 15 in 2,5,8,10,15,24,38,59,75,90.'},
{u:2,t:'Strings: input & output',tags:['high','pyq','program'],intro:'Character arrays, safe line input, and string output.',body:'Strings in C are character arrays terminated by \\0. Your Unit-II notes cover gets(), puts(), fgets() and fputs(); the notes explicitly describe fgets() as the safer line-input choice and fputs() as output without an automatic newline.',code:`char name[50];\nfgets(name, sizeof name, stdin);\nputs(name);\nfputs(name, stdout);`},
{u:2,t:'String functions',tags:['high','pyq','program'],intro:'strlen, strcpy, strcat, strcmp and the common patterns you need for exams.',body:'strlen measures characters before \\0. strcpy copies a string. strcat appends one string to another. strcmp compares strings lexicographically and returns 0 when they are equal. Always ensure destination arrays have enough space.',code:`char a[50] = "Hello";\nchar b[] = "World";\nstrcat(a, b);\nprintf("%zu\\n", strlen(a));\nprintf("%d\\n", strcmp(a, b));`,exam:'2024 PYQ asks five string functions; another asks string length/palindrome-style programs.'},
{u:2,t:'Arrays of strings',tags:['program'],intro:'Store multiple strings as a 2D character array or an array of string pointers.',body:'A simple exam-friendly representation is char names[5][30]. Each row holds one null-terminated string.',code:`char names[3][20] = {\n    "Arun", "Bhavna", "Chetan"\n};\nprintf("%s", names[1]);`},
{u:2,t:'Command-line arguments',tags:['high'],intro:'argc counts command-line arguments and argv stores them as strings.',body:'Your notes use int main(int argc, char *argv[]). argv[0] is the program name; additional values begin at argv[1].',code:`int main(int argc, char *argv[])\n{\n    printf("count = %d\\n", argc);\n    if (argc > 1) printf("first = %s\\n", argv[1]);\n    return 0;\n}`},
{u:2,t:'Root finding of a positive floating-point number',tags:['program','high'],intro:'A numerical-programming problem: find the positive root of a suitable equation/number using an iterative method.',body:'The syllabus names root finding but the uploaded extracts available here do not specify a single required numerical method. Do not memorize a method blindly: use the exact algorithm taught in your class if your teacher specified one.',exam:'Because the supplied Unit-II material does not establish the required root-finding method, this guide deliberately leaves the method open rather than inventing one.'}
];


// PYQs below are mapped from the user's uploaded ES-102 Programming in C papers.
// If a syllabus topic has no direct question in those papers, the site says so instead of inventing one.
const pyqMap={
'C program structure & compilation':[
 ['2024 End Term','Explain the basic structure and compilation process of C program.'],
 ['2024 Mid Term','Describe the compilation process in C programming language.'],
 ['2025 End Term','Briefly describe the basic structure and execution of a C Program.']
],
'Data types & format specifiers':[
 ['2024 Mid Term','What are datatypes? What are the basic datatypes in C? Explain format specifier and memory requirement of each datatype?'],
 ['2025 End Term','Briefly describe Data Types.']
],
'Declarations, initialization & constants':[
 ['2025 End Term','Briefly describe Variable and Constant.'],
 ['2025 Mid Term','Explain keywords & identifiers with example.']
],
'Operators & expressions':[
 ['2024 End Term','Define Operator? Explain with example different types of operator arithmetic, logical, bitwise and ternary operator.'],
 ['2025 Mid Term','What is an operator. Explain different types of operators used in C programming.'],
 ['2025 End Term','Write short notes with suitable examples: Bit wise operator, Increment–Decrement operator, Operator Precedence.']
],
'Type conversion & casting':[
 ['2023 End Term','What is type conversion? Explain two types of conversion with examples.'],
 ['2024 Mid Term','Predict the output of the program involving i/j*j and j/i*i.']
],
'printf, scanf & format specifiers':[
 ['2023 End Term','Differentiate between put(), putchar() and puts().'],
 ['2024 End Term','Find the output of the given C program.']
],
'Compound statements (blocks)':[
 ['2024 End Term','Explain the basic structure and compilation process of C program.']
],
'if, if-else, else-if & nested decisions':[
 ['2025 Mid Term','Any year is input through the keyboard. Write a leap year program to determine whether the year is a leap year or not.'],
 ['2024 Mid Term','What is ternary operator? Design a flowchart and write a C program using ternary operator to check whether a given number is odd or even.']
],
'switch statement':[
 ['2024 Mid Term','Find the output of the C code using a for loop, switch, continue and break.']
],
'Loops: while, do-while & for':[
 ['2024 End Term','Difference between while and do-while loop?'],
 ['2024 Mid Term','Write difference between entry-controlled loop and exit controlled loop.']
],
'break, continue, goto & return':[
 ['2025 Mid Term','Why do we need a break and goto statement. Justify.'],
 ['2024 Mid Term','Find the output of the C code using continue and break inside switch.']
],
'Algorithm, flowchart & pseudocode':[
 ['2024 End Term','Difference between flowchart and algorithm? Write an algorithm and flowchart to find the factorial of a number.'],
 ['2023 End Term','Define pseudocode. Write a pseudocode to find the area of triangle when we know the lengths of all three of its sides.'],
 ['2025 End Term','Write an algorithm and draw flowchart to find even numbers between 1 to 50.']
],
'Tracing & dry run':[
 ['2024 Mid Term','Find the output for the given C code involving for and switch.'],
 ['2025 Mid Term','Predict the output of the given program involving integer division.']
],
'Structured programming':[
 ['2025 End Term','Briefly describe the basic structure and execution of a C Program.']
],
'C89, C99, C11 & C23':[
 ['2023 End Term','What are some key features introduced in the C99 extensions? How do C99 extensions improve the functionality of the C programming language?']
],
'Function declaration, definition & invocation':[
 ['2025 End Term','What is Function in C? Explain the library and user defined functions in C.'],
 ['2023 End Term','What are actual parameters and formal parameters? Illustrate with example.'],
 ['2025 Mid Term','Write two different C functions to compute area and perimeter of a triangle.']
],
'Argument passing & call by value':[
 ['2024 Mid Term','Explain the concept of call by value and call by reference with the help of example.'],
 ['2023 End Term','What are actual parameters and formal parameters? Illustrate with example.'],
 ['2025 End Term','What is call by Value and Call by reference?']
],
'Recursion':[
 ['2024 Mid Term','What is recursion? Write a C program to find the factorial of number through recursion.'],
 ['2024 End Term','Define Recursion function? Write a C program to find the Fibonacci series using recursion.'],
 ['2025 End Term','What is call by Value and Call by reference? Write a C program to show working of Recursion.']
],
'Inline functions & macro functions':[],
'Storage classes':[
 ['2025 Mid Term','What is the difference between the local variable and global variable in C?']
],
'Scope & lifetime':[
 ['2024 Mid Term','What is variable? Discuss the visibility, scope, and initial value of a variable.'],
 ['2025 Mid Term','What is the difference between the local variable and global variable in C?']
],
'Header files & modular design':[
 ['2023 End Term','Describe header file and its usage in C programming.'],
 ['2024 End Term','What is header file? Explain library functions of the listed header files.'],
 ['2025 End Term','Write short description and function used in stdio.h, math.h and string.h.'],
 ['2025 Mid Term','What is the difference between #include <filename> and #include "filename"?']
],
'1D & 2D arrays':[
 ['2023 End Term','What is array? Explain the declaration and initialization of one dimensional and two dimensional arrays with an example.'],
 ['2024 Mid Term','What is array? Explain declaration and initialization of two-dimensional array? Write a C program to find matrix transpose.'],
 ['2025 End Term','What is an Array? Briefly describe types of the Array. Explain the memory diagram of the array.'],
 ['2025 Mid Term','Define array. Write a program to print the Maximum and Minimum element in an array.']
],
'Bubble sort':[
 ['2023 End Term','What do you mean by Sorting? Write a program to sort a list of n numbers in descending order using bubble sort.']
],
'Selection sort':[
 ['2024 End Term','Define Selection Sort? Sort the given elements using selection sort: 77,33,44,11,88,22,66,55.'],
 ['2025 Mid Term','Write a program to sort n number of elements in descending order using selection sort.']
],
'Insertion sort':[
 ['2024 End Term','What is insertion sort? Write a C program to implement insertion sort.']
],
'Linear & binary search':[
 ['2024 End Term','What is Binary search? Search item 15 from 2,5,8,10,15,24,38,59,75,90 using binary search.'],
 ['2023 End Term','Write an algorithm and develop a C program to search an integer from N numbers using binary searching technique.'],
 ['2025 End Term','Write an algorithm for binary search.'],
 ['2025 Mid Term','Explain any one searching algorithm with example.']
],
'Strings: input & output':[
 ['2023 End Term','Differentiate between put(), putchar() and puts().'],
 ['2024 Mid Term','What is string? Write a program to find the length of a string?']
],
'String functions':[
 ['2024 End Term','Find the output of the program using strcpy(), strcat(), strrev() and strlen().'],
 ['2024 End Term','Define string? How it can be declared and initialized? Explain any five-string function with example.'],
 ['2025 Mid Term','Write a program to check whether a string is a palindrome or not.']
],
'Arrays of strings':[
 ['2024 End Term','Define string? How it can be declared and initialized? Explain any five-string function with example.']
],
'Command-line arguments':[
 ['2025 Mid Term','Explain the command line arguments in C with the help of example.']
],
'Root finding of a positive floating-point number':[
 ['2025 End Term','Write an algorithm to find the square root of an inputted number.']
]
};


const pyqAnswers={
"Explain the basic structure and compilation process of C program.":"A C program has headers, declarations, main() and executable statements. The normal build flow is preprocessing \u2192 compilation \u2192 assembly \u2192 linking.",
"Describe the compilation process in C programming language.":"Source code is preprocessed, compiled into assembly, assembled into object code, then linked with libraries to produce the executable.",
"Briefly describe the basic structure and execution of a C Program.":"Typical structure: headers \u2192 global declarations \u2192 main() \u2192 declarations/statements \u2192 return. Execution starts in main() and follows statements in order.",
"What are datatypes? What are the basic datatypes in C? Explain format specifier and memory requirement of each datatype?":"Basic types include char, int, float, double and void. Common specifiers: %c, %d, %f and %lf. Exact sizes are implementation-dependent; use sizeof for the actual implementation.",
"Briefly describe Data Types.":"C provides fundamental types such as char, int, float, double and void, plus derived/user-defined types such as arrays, pointers, structures, unions and enums.",
"Briefly describe Variable and Constant.":"A variable is a named object whose stored value may change. A constant represents a value intended not to change, commonly declared with const or defined with #define.",
"Explain keywords & identifiers with example.":"Keywords are reserved words such as int, if and return. Identifiers are programmer-defined names such as total or marks and cannot be keywords.",
"Define Operator? Explain with example different types of operator arithmetic, logical, bitwise and ternary operator.":"Arithmetic: + - * / %. Logical: && || !. Bitwise: & | ^ ~ << >>. Ternary: condition ? expr1 : expr2.",
"What is an operator. Explain different types of operators used in C programming.":"Operators include arithmetic, relational, logical, bitwise, assignment, conditional, increment/decrement and other operators such as sizeof and comma.",
"Write short notes with suitable examples: Bit wise operator, Increment\u2013Decrement operator, Operator Precedence.":"Bitwise operators work on bits: &, |, ^, ~, <<, >>. ++/-- change a value by one. Precedence determines which operators bind first; parentheses can make order explicit.",
"What is type conversion? Explain two types of conversion with examples.":"Implicit conversion is automatic, e.g. int + double produces a double result. Explicit conversion uses a cast, e.g. (float)a / b.",
"Predict the output of the program involving i/j*j and j/i*i.":"With int i=2 and j=3, integer division gives i/j=0 and j/i=1. Thus k=0, l=2, a=0.000000 and b=2.000000.",
"Differentiate between put(), putchar() and puts().":"putchar() outputs one character. puts() outputs a string followed by a newline. put() is not a standard C library function; standard C uses fputs()/puts() for string output.",
"Find the output of the given C program.":"The exact output must be obtained by tracing each statement, operator precedence, loop iteration and branch in order. For the supplied 2024 code, trace i=2,3,4 and account for continue/break.",
"Any year is input through the keyboard. Write a leap year program to determine whether the year is a leap year or not.":"A year is leap if (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0). Print leap year otherwise not leap.",
"What is ternary operator? Design a flowchart and write a C program using ternary operator to check whether a given number is odd or even.":"Use n % 2 == 0 ? \"Even\" : \"Odd\". Example: printf(\"%s\", n%2==0 ? \"Even\" : \"Odd\"); The flowchart is Start \u2192 input n \u2192 test n%2==0 \u2192 Even/Odd \u2192 End.",
"Find the output of the C code using a for loop, switch, continue and break.":"For i=2 the program prints A and continue moves to the next loop iteration. i=3 prints C and return ends main. Therefore the output is A followed by C.",
"Difference between while and do-while loop?":"while is entry-controlled and may execute zero times. do-while is exit-controlled and executes its body at least once.",
"Write difference between entry-controlled loop and exit controlled loop.":"Entry-controlled loops test the condition before the body, so zero executions are possible. Exit-controlled loops test after the body, so at least one execution occurs.",
"Why do we need a break and goto statement. Justify.":"break exits the nearest loop/switch. goto transfers control to a labeled statement. break is common for early loop exit; goto should be used sparingly because it can reduce readability.",
"Find the output of the C code using continue and break inside switch.":"continue skips to the next iteration of the enclosing loop; break exits the switch (or nearest loop when used there). Trace each iteration and case to determine the exact output.",
"Difference between flowchart and algorithm? Write an algorithm and flowchart to find the factorial of a number.":"An algorithm is a written finite sequence of steps; a flowchart represents those steps graphically. Factorial: Start \u2192 input n \u2192 fact=1 \u2192 repeat i=1..n: fact=fact*i \u2192 output fact \u2192 End.",
"Define pseudocode. Write a pseudocode to find the area of triangle when we know the lengths of all three of its sides.":"Pseudocode is language-independent, structured English-like logic. Let s=(a+b+c)/2; area=sqrt(s*(s-a)*(s-b)*(s-c)). Input a,b,c, calculate s and area, then output area.",
"Write an algorithm and draw flowchart to find even numbers between 1 to 50.":"Start; set i=1; while i<=50, test i%2==0 and print i if true; increment i; repeat; End.",
"What is array? Explain the declaration and initialization of one dimensional and two dimensional arrays with an example.":"An array stores same-type elements contiguously with zero-based indexing. Example: int a[3]={1,2,3}; int m[2][2]={{1,2},{3,4}};",
"What is array? Explain declaration and initialization of two-dimensional array? Write a C program to find matrix transpose.":"A 2D array uses rows and columns, e.g. int a[2][3]. Transpose swaps indices: t[j][i]=a[i][j] for every valid i,j.",
"What is an Array? Briefly describe types of the Array. Explain the memory diagram of the array.":"An array is a contiguous collection of same-type elements. 1D uses one index; 2D uses row/column indices. In a 1D int array, adjacent elements occupy adjacent memory locations separated by sizeof(int).",
"Define array. Write a program to print the Maximum and Minimum element in an array.":"Initialize max=min=a[0], then scan i=1..n-1: update max when a[i]>max and min when a[i]<min. Finally print both.",
"What is recursion? Write a C program to find the factorial of number through recursion.":"Recursion is when a function calls itself. Factorial: if n<=1 return 1; otherwise return n*fact(n-1).",
"Define Recursion function? Write a C program to find the Fibonacci series using recursion.":"Use base cases fib(0)=0 and fib(1)=1; for n>=2, fib(n)=fib(n-1)+fib(n-2). Print fib(0) through fib(n-1).",
"What is call by Value and Call by reference? Write a C program to show working of Recursion.":"C passes arguments by value. To let a function modify caller data, pass its address using a pointer. Recursion is demonstrated by a function calling itself with a base case.",
"What is Function in C? Explain the library and user defined functions in C.":"A function is a named block that performs a task. Library functions are supplied by standard libraries, e.g. printf; user-defined functions are written by the programmer, e.g. int add(int a,int b).",
"What are actual parameters and formal parameters? Illustrate with example.":"Actual parameters are arguments supplied in a call, e.g. add(2,3). Formal parameters are the parameters in the definition, e.g. int add(int a,int b).",
"Write two different C functions to compute area and perimeter of a triangle.":"Perimeter = a+b+c. Let s=(a+b+c)/2; area=sqrt(s*(s-a)*(s-b)*(s-c)). Implement separate functions returning these values.",
"Explain the concept of call by value and call by reference with the help of example.":"Call by value passes a copy, so changing the parameter does not change the caller variable. To modify caller data in C, pass a pointer, e.g. swap(&a,&b).",
"What is the difference between the local variable and global variable in C?":"A local variable is declared inside a block/function and has limited scope. A global variable is declared outside functions and normally has file scope; its lifetime lasts for the program execution.",
"What is variable? Discuss the visibility, scope, and initial value of a variable.":"A variable names storage for a value. Scope is where its name is visible; lifetime is how long the object exists. Automatic locals are not initialized automatically; static/global objects are zero-initialized by default.",
"Describe header file and its usage in C programming.":"A header contains declarations/macros used by source files. #include inserts the header contents so functions/types can be used with correct declarations.",
"What is header file? Explain library functions of the listed header files.":"A header exposes declarations for a library. Examples: stdio.h \u2192 printf/scanf; string.h \u2192 strlen/strcpy/strcmp; stdlib.h \u2192 malloc/free/abs.",
"Write short description and function used in stdio.h, math.h and string.h.":"stdio.h: printf, scanf, fgets. math.h: sqrt, pow, fabs. string.h: strlen, strcpy, strcat, strcmp.",
"What is the difference between #include <filename> and #include \"filename\"?":"Angle brackets normally search implementation/system include paths. Quotes normally search the current/project directory first, then include paths.",
"What do you mean by Sorting? Write a program to sort a list of n numbers in descending order using bubble sort.":"Sorting arranges data in an order. For descending bubble sort, compare adjacent values and swap when a[j] < a[j+1]; repeat passes until sorted.",
"Define Selection Sort? Sort the given elements using selection sort: 77,33,44,11,88,22,66,55.":"Ascending result: 11,22,33,44,55,66,77,88. Selection sort repeatedly chooses the minimum remaining element and places it at the next position.",
"Write a program to sort n number of elements in descending order using selection sort.":"For each i, find the maximum element from i..n-1 and swap it with a[i]. Repeat until the array is in descending order.",
"What is insertion sort? Write a C program to implement insertion sort.":"Insertion sort grows a sorted prefix. Take key=a[i], shift larger elements right while a[j]>key, then place key at a[j+1].",
"What is Binary search? Search item 15 from 2,5,8,10,15,24,38,59,75,90 using binary search.":"low=0, high=9. mid=4 gives 15, so the item is found immediately at index 4 (5th position).",
"Write an algorithm and develop a C program to search an integer from N numbers using binary searching technique.":"Sort the array first. Set low=0, high=n-1; repeatedly compute mid; if a[mid]==key stop; if a[mid]<key set low=mid+1 else high=mid-1.",
"Write an algorithm for binary search.":"On a sorted array: initialize low/high, calculate mid, compare key with a[mid], then halve the search interval until found or low>high.",
"Explain any one searching algorithm with example.":"Linear search checks each element from left to right until the key is found or the array ends. It works without sorting and takes O(n) worst case.",
"What is string? Write a program to find the length of a string?":"A C string is a char array terminated by \\0. Length can be found with strlen(s), or by counting characters until s[i]==\\0.",
"Find the output of the program using strcpy(), strcat(), strrev() and strlen().":"strcat makes the first string \"HelloWorld\". strcpy copies that result into the second string. The non-standard strrev reverses the first string; strlen counts characters before \\0. Exact output also depends on the corrected syntax and strrev availability.",
"Define string? How it can be declared and initialized? Explain any five-string function with example.":"Declare char s[20]=\"Hello\"; or char s[]=\"Hello\". Common functions: strlen, strcpy, strcat, strcmp and strchr. Ensure destination capacity is sufficient.",
"Write a program to check whether a string is a palindrome or not.":"Compare characters from both ends: for i=0, j=len-1 while i<j, if s[i]!=s[j] it is not a palindrome; otherwise move inward.",
"Explain the command line arguments in C with the help of example.":"main can receive int argc, char *argv[]. argc is the number of arguments; argv holds their strings. Example: int main(int argc,char *argv[]){ printf(\"%s\",argv[1]); } after checking argc>1.",
"Write an algorithm to find the square root of an inputted number.":"Use the exact root-finding method taught in class. The PYQ asks for an algorithm but does not specify a particular numerical method; therefore the method should be stated before the steps.",
"Explain the concept of Dynamic memory allocation with an example.":"Dynamic memory is obtained at runtime using malloc/calloc/realloc and released with free. Example: int *p=malloc(n*sizeof *p); use p; free(p);",
"What is the need of file handling? Write a program to count the no of words and characters in a file.":"File handling stores/reads data persistently. Open the file, read characters, count non-space characters and detect word boundaries, then close the file.",
"Define a structure. WAP in C to create an array of structures and print the details.":"A structure groups different data types under one name. Define struct Student {int id; char name[30];}; then create struct Student s[5] and print each member.",
"What is a header file. Explain two library functions of the following header files:":"A header provides declarations. Examples: stdlib.h\u2014malloc, free; string.h\u2014strlen, strcpy; ctype.h\u2014isdigit, toupper.",
};
const state={unit:'all',query:'',important:false,answers:true,current:0,done:new Set(JSON.parse(localStorage.getItem('cGuideDone')||'[]'))};
const $=s=>document.querySelector(s); const list=$('#topicList'), view=$('#topicView');
function save(){localStorage.setItem('cGuideDone',JSON.stringify([...state.done]));}
function filtered(){return topics.map((t,i)=>({...t,i})).filter(x=>(state.unit==='all'||String(x.u)===state.unit)&&(!state.important||x.tags.includes('high'))&&(x.t.toLowerCase().includes(state.query.toLowerCase())||x.intro.toLowerCase().includes(state.query.toLowerCase())||(pyqMap[x.t]||[]).some(q=>q[1].toLowerCase().includes(state.query.toLowerCase()))))}
function renderNav(){const arr=filtered();list.innerHTML=arr.length?arr.map(x=>`<button class="topic-link ${state.done.has(x.i)?'done':''} ${x.i===state.current?'active':''}" data-id="${x.i}"><span class="check"></span><span class="num">${String(x.i+1).padStart(2,'0')}</span><span>${x.t}</span></button>`).join(''):`<div class="empty">No matching topics.</div>`;}
function esc(s){return s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));}
function renderTopic(){const t=topics[state.current]; if(!t)return; const qs=pyqMap[t.t]||[]; const pyqHtml=qs.length?`<div class="card pyq-card"><div class="pyq-title"><h3>🔥 PYQs for this topic</h3><span>${qs.length} question${qs.length>1?'s':''}</span></div><div class="pyq-list">${qs.map((q,i)=>{const ans=pyqAnswers[q[1]]||'Answer: Use the concepts and method covered in this topic; this question is included directly from the uploaded PYQ paper.'; return `<div class="pyq-item"><div class="pyq-year">${q[0]}</div><div class="pyq-q">${esc(q[1])}</div><div class="pyq-answer answer ${state.answers?'':'hidden'}"><strong>Answer / exam approach:</strong> ${esc(ans)}</div></div>`}).join('')}</div></div>`:`<div class="card pyq-card muted-pyq"><div class="pyq-title"><h3>🔥 PYQs for this topic</h3></div><p>No direct PYQ for this exact topic was found in the uploaded ES-102 papers. I haven't invented one.</p></div>`; view.innerHTML=`<article class="topic" id="topic-${state.current}"><div class="topic-head"><div class="topic-num">${String(state.current+1).padStart(2,'0')}</div><div><h2>${t.t}</h2><div class="topic-meta">${t.u===1?'<span class="tag">Unit I</span>':'<span class="tag">Unit II</span>'}${t.tags.includes('high')?'<span class="tag high">Very important</span>':''}${t.tags.includes('pyq')?'<span class="tag pyq">PYQ</span>':''}${t.tags.includes('program')?'<span class="tag program">Program</span>':''}</div></div></div><div class="card"><h3>What you need to know</h3><p>${t.intro}</p><div class="answer ${state.answers?'':'hidden'}"><p>${t.body}</p></div></div>${t.code?`<div class="card"><h3>Exam-ready code / pattern</h3><div class="code"><button class="copy">Copy</button><pre>${esc(t.code)}</pre></div></div>`:''}${t.exam?`<div class="card"><h3>Exam focus</h3><p>${t.exam}</p></div>`:''}${pyqHtml}<div class="complete-row"><button class="complete-btn ${state.done.has(state.current)?'done':''}" id="completeBtn">${state.done.has(state.current)?'✓ Completed':'Mark complete'}</button><span class="next">${state.current<topics.length-1?'Next topic →':''}</span></div></article>`; view.scrollIntoView({behavior:'smooth',block:'start'}); updateProgress();}
function updateProgress(){const n=state.done.size,p=topics.length?Math.round(n/topics.length*100):0;$('#progressText').textContent=`${n} / ${topics.length} topics done`,$('#progressPct').textContent=p+'%',$('#progressBar').style.width=p+'%';}
function render(){renderNav();renderTopic();}
list.addEventListener('click',e=>{const b=e.target.closest('[data-id]');if(!b)return;state.current=+b.dataset.id;render();if(innerWidth<=820)$('#sidebar').classList.remove('open');});
$('#search').addEventListener('input',e=>{state.query=e.target.value;renderNav()});
document.querySelectorAll('.unit-btn').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.unit-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');state.unit=b.dataset.unit;renderNav()}));
$('#importantToggle').addEventListener('click',()=>{state.important=!state.important;$('#importantToggle').classList.toggle('active',state.important);renderNav()});
$('#answersToggle').addEventListener('click',()=>{state.answers=!state.answers;$('#answersToggle').textContent='Answers: '+(state.answers?'ON':'OFF');renderTopic()});
$('#completeBtn')?.addEventListener('click',()=>{});
document.addEventListener('click',e=>{if(e.target.id==='completeBtn'){const i=state.current;state.done.has(i)?state.done.delete(i):state.done.add(i);save();render();showToast(state.done.has(i)?'Topic completed ✓':'Marked incomplete');} if(e.target.id==='startBtn'){state.current=0;render();} if(e.target.classList.contains('copy')){navigator.clipboard?.writeText(e.target.nextElementSibling.textContent);showToast('Code copied');}});
$('#topicsBtn').addEventListener('click',()=>$('#sidebar').classList.add('open'));$('#closeTopics').addEventListener('click',()=>$('#sidebar').classList.remove('open'));
function showToast(msg){const t=$('#toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1300)}
render();
