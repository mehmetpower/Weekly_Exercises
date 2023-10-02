check_list = [31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
empty_list = []

months =	{
  "1": 31, "2": 28, "3": 31, "4": 30, "5": 31, "6": 30,
  "7":31, "8": 31, "9": 30, "10": 31, "11": 30, "12": 31
}

def calculator():
   month = int(input("Enter a month: ")) - 1
   day = input(f"Enter the day of the month {month + 1}: ")
   days_in_months = list(months.values())
   month_sum=0
   for i in range(int(month)):
      month_sum += days_in_months[i]
      empty_list.append(month_sum)
   print('empty list:', empty_list)
   print(f"The date you asked is the day #{month_sum+int(day)} of the year.")

calculator()