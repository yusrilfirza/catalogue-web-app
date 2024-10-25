export const getSortOptionValue = (optionValue, sortValuesFromOption) => {
    return sortValuesFromOption
        .find((optionData) => optionData.value === optionValue).extra;
}