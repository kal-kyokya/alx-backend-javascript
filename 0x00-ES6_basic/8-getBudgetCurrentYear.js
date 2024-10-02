function getcurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const budget = {
    [`income-${getcurrentYear()}`]: income,
    [`gdp-${getcurrentYear()}`]: gdp,
    [`capita-${getcurrentYear()}`]: capita,
  };

  return budget;
}
