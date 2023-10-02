months =	{
  "1": 31, "2": 28, "3": 31, "4": 30, "5": 31, "6": 30,
  "7":31, "8": 31, "9": 30, "10": 31, "11": 30, "12": 31
}

def day_calculator():
  user_input = input("Enter a key: ")
  for i, key in enumerate(months.keys()):
      if key == user_input:
          index = i
          print(f"The index of '{user_input}' is {index}") 
 

def calculator():
   month = input("Enter a month: ")
   day = input(f"Enter the day of the month {month}: ")
   days_in_months = list(months.values())
   month_sum=0
   for i in range(int(month)):
      month_sum += days_in_months[i]
      total = month_sum+int(day)
   print(f"The date you entered is the day #{total} of the year.")

calculator()