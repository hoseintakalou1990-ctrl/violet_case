const persianDigits = (value) => {
  return String(value).replace(/[0-9]/g, (digit) =>
    "۰۱۲۳۴۵۶۷۸۹"[Number(digit)]
  );
};

export default persianDigits;