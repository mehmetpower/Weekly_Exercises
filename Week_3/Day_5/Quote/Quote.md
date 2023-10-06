# QUOTE PROBLEM DESCRIPTION

- INPUTS:
  - `InputAuthor`
  - `InputQuote`
  - `Message`

- PROCESS:
  - STEP 1
    - Ask user input quote: Please tell me what youR quote --> (`InputQuote`)
    - Ask user input Author as: Please tell me the author of this quote. If it is not known please type: "unknown, anonymus" or just leave blank --> (`InputAuthor`)
  - STEP 2
    - convert `InputAuthor` string to lowercase characters.
  - STEP 3
    - If `InputAuthor` is "anonymus" or unknown or ""
      - `Message` = `No one knows who said [InputQuote]`
    - Else
      - `Message` = `'[InputAuthor] says, "[InputQuote]"`

- OUTPUTS:
  - Display: `Message`

- CONSTRAINTS:
  - 

- CORNER CASES:
  - 