# Calories calculator

[About](#about) |
[Details](#some-details) |
[Instructions](#instructions)

# Links

<a href="https://github.com/skyzavr/calculator">[Repo]</a> |
<a href="https://calories-rate-calculator-53w1ya2ax-skyzavr.vercel.app">[Live]</a> |
<a href="https://www.figma.com/file/N8LPQLDD8dF8tCp1I2B3Dg/Calories-rate-calculator?type=design&node-id=0%3A1&mode=design&t=gMPKh9WDCCIUpML3-1">[Figma]</a>

# About

A training project in which you can

- calcaulate the BMI
- calculate the calorie rate

### Stack

- React
- Typescript
- Vite

# Some details

Here are some formulas that were used for calculation

## BMI

```math
BMI=\dfrac{weight (kg)}{H^2 (cm)}

```

## Calorie rate

First we need to calculate the basic metabolism (BM):

### Male

```math
BM=9.99*(weight (kg))+6.25*(height (metres))-4.92*(age (full))+5

```

### Female

```math
BM=9.99*(weight (kg))+6.25*(height (metres))-4.92*(age (full))-161;\\

```

Then We calculate the norm based on activity (AC).\\

```math
AC=[ 1.2, 1.375, 1.550, 1.725, 1.900]
```

Calories rate is equal (CR):

```math
CR=BM*AC
```

# Instructions

| Desctiption                               |    Command     |
| ----------------------------------------- | :------------: |
| Installing all the necessary dependencies | `npm install`  |
| Running the app in the development mode   | `npm run dev ` |
