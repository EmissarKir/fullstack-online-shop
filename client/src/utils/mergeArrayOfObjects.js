export function mergeArrayOfObjects(arrTemplate, arrPaints) {
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
            paints: newArr
        });
    });

    return mergedPaints;
}
export function addNewProperties(array) {
    // ===================REGEXP Ищет часть строки после ", или (  или база|bas "======================================//
    const createSortNameRegExp =
        /(\s*?(\d{4})?(?=,).+)|((?=\s*?\().+)|(\s*?(?=(база|bas|Bas)).+)/g;
    const createSizeRegExp = /(?=\().\s?(\d+(?:,\d+)?)(\s?(?:кг|мл|л|гр))/i;
    const findBasePaint =
        /bas C|база С|bas 3|баз BС|баз BC|база BC|база BС|база C|BС|CLR|BC|N00|M15|баз C|база 3|база 2|Bas С|bas A|база A|bas 1|баз BW|баз ВW|база BW|база ВW|база А|BW|BW|W05|M15|баз А|база 1|Bas A|бесцветный|бесцветная| белая|база под колеровку| белый/i;
    const paintColor =
        /черная матовая|черная | черный|синяя сирень|сиреневая|шоколадная|темный шоколад|синяя| синий|бирюзовая|зеленая| зеленый|желтая| желтый|изумрудная|медовая| медная|оранжевая|голубая|кофе с молоком| красная| красный| красно-коричневый|персиковая|вишневая| вишня| красное вино|лимонная|салатная| салатовая|слоновая кость|зеленое яблоко|светло-серая| светло-серый| серая| серый|сосна|рябина| тик | тиковое дерево|палисандр|белый дуб|орегон|калужница|ореховое дерево| орех |светлый дуб|красное дерево|коричневая| коричневый| темно-коричневый| шоколадно-коричневый| серебристая| серебристый|серебряный| золотистая| золотистый|магнолия|зеленый мох|еловая зелень| махагон|беленый дуб|золотой дуб| бежевый/i;

    const paints = array.map((item) => ({
        ...item,
        price: +item.price.split(" руб")[0],
        sortName: item.name.split(createSortNameRegExp)[0],
        size:
            item.name.match(createSizeRegExp) &&
            parseFloat(item.name.match(createSizeRegExp)[1].replace(/,/, ".")),
        volume:
            item.name.match(createSizeRegExp) &&
            item.name.match(createSizeRegExp)[2],
        base: item.name.match(findBasePaint)
            ? item.name.match(findBasePaint)[0]
            : "main",
        color: item.name.match(paintColor) && item.name.match(paintColor)[0]
    }));
    return paints;
}
