# COUNTING STRING PROBLEM DESCRIPTION

- INPUTS:
  - `InputString = ""`
  - `InputStringList = []`
  - `Count = 0`

- PROCESS:
  - Ask user input string
  - `InputString = input("")`
  - Convert the string to a list of items 
  - `InputStringList = [InputString]`
  - Count the items in the InputStringList
  - `Count` = `len(InputStringList)`
  - `Output_Message` = "Your name is {`InputString`} and it is composed of {`Count`} characters"

- OUTPUTS:
  - Display: `Output_Message`

- CONSTRAINTS:
  - `InputString` can not be left blank

- CORNER CASES:
  - `InputString` = ""