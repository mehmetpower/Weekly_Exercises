# TIP CALCULATOR PROBLEM DESCRIPTION

- INPUTS:
  - BillAmount
  - TipRate

- PROCESS:
  - Ask user input BillAmount & TipRate
  - Calculate TipAmount: Multiply BillAmount with TipRate
  
  - Calculate TotalAmount: Add TipAmount to BillAmount

- OUTPUTS:
  - TipAmount: Display TipAmount
  - TotalAmount: Display TotalAmount

- CONSTRAINTS:
  - BillAmount and TipRate should be positive
  - BillAmount should be integer or float
  - TipRate should be integer
  - TipAmount should be rounded
  - Display should be together with "CHF"

- CORNER CASES:
  - BillAmount is not entered as a number
  - TipRate is not entered as a integer
  - BillAmount is below or equal to zero
  - TipRate is below or equal to zero

- EDGE CASES:
  - BillAmount = CHF 0.05
  - BillAmount = 0

# TIP CALCULATOR

Input: BillAmount
Check if BillAmount is a number and positive
True: Continue
False: Input: BillAmount

Input: TipRate
Check if TipRate is an integer and positive
True: Continue
False: Input: TipRate

Calculate TipAmount: BillAmount * TipRate/100
RoundTipAmount: Round TipAmount to the higher Rappen

Calculate TotalAmount: BillAmount + RoundTipAmount

Display: RoundTipAmount
Display: TotalAmount

