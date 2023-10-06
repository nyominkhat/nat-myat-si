export const myanmarToEnglishNums = (myanmarNumber: string) => {
  const myanmarDigits = ["၀", "၁", "၂", "၃", "၄", "၅", "၆", "၇", "၈", "၉"];

  return myanmarNumber.replace(/[၀-၉]/g, (match) => {
    return myanmarDigits.indexOf(match).toString();
  });
};
