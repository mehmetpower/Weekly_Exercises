def summit():
  a=int(input("please enter a number:"))
  b=int(input("please enter a number:"))
  c=input("please select one of these math operators (+,-,*,/):")
  if c == "+":
    result=a+b
  elif c == "-":
    result=a-b
  elif c == "*":
    result=a*b
  else:
    result=a/b
  print("result is:", result)

summit()