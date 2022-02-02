import React from "react";
import PropTypes from "prop-types";

import RadioBtnField from "../../common/form/RadioField";

const RadioForm = ({ array, onChange, data }) => {
    if (array) {
        const arrObj = {};
        for (let i = 0; i < array.length; i++) {
            arrObj[array[i].base]
                ? arrObj[array[i].base].push(array[i])
                : (arrObj[array[i].base] = [array[i]]);
        }

        return Object.keys(arrObj).map((item, i) => {
            const canSizes = arrObj[item]
                .map((item) => ({
                    name:
                        `${item.size} ${item.volume} ` +
                        (item.color ? `${item.color}` : ""),
                    value: item.paintId,
                    sortKey: item.size
                }))
                .sort((a, b) => a.sortKey - b.sortKey);

            return (
                <RadioBtnField
                    key={canSizes[0].value}
                    options={canSizes}
                    value={data.id}
                    name="id"
                    onChange={onChange}
                    label={item === null ? "база" : item}
                />
            );
        });
    }
    return null;
};
RadioForm.propTypes = {
    array: PropTypes.array,
    onChange: PropTypes.func,
    data: PropTypes.object
};
export default RadioForm;
