Inputs :
Outputs :
Password
Constraints :
- 8 characters minimum
- 1 digit minimum
- At least one _ or -
- No spaces
- 16 characters maximum
Process :
Choose random length n
Sample random special character from specialcharcter_list
Sample random digit from digit_list
Sample n-2 random characters from char_list (including digits and special characters)
Concatenate samples and shuffle password
Display password