function mergeArrayOfObjects(arrTemplate, arrPaints) {
  const mergedPaints = [];
  arrTemplate.forEach((item1) => {
    const newArr = [];
    arrPaints.forEach((item2) => {
      if (item1.sortName === item2.sortName) {
        newArr.push(item2);
      }
    });
    mergedPaints.push({
      ...item1,
      paints: newArr,
    });
  });

  return mergedPaints;
}
module.exports = { mergeArrayOfObjects };
