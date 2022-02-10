import React from "react";
import PropTypes from "prop-types";

import { useHistory } from "react-router-dom";

import TextField from "../common/form/textField";
import SelectField from "../common/form/selectField";
import TextAreaField from "../common/form/textAreaField";
import Button from "../common/button";

import {
    optionsBrand,
    optionsProduct,
    optionsProductCategory,
    optionsScrubRating,
    optionsWos
} from "../../constants/formOptions";

import useForm from "../../hooks/useForm";

const TemplateForm = ({ data, onSubmit }) => {
    const validatorConfig = {};
    const { form, handleChange, handleSubmit, errors, isValid } = useForm(
        data,
        onSubmit,
        validatorConfig
    );
    const history = useHistory();

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-12">
                    <TextField
                        type="text"
                        label="SortName*"
                        name="sortName"
                        onChange={handleChange}
                        value={form.sortName || ""}
                        error={errors.sortName}
                    />
                </div>

                <div className="col-md-4">
                    <SelectField
                        onChange={handleChange}
                        options={optionsBrand}
                        name="brand"
                        defaultOption="Choose..."
                        value={form.brand || ""}
                        error={errors.brand}
                        label="Брэнд*"
                    />
                </div>
                <div className="col-md-4">
                    <SelectField
                        onChange={handleChange}
                        options={optionsProduct}
                        name="product"
                        defaultOption="Choose..."
                        value={form.product || ""}
                        error={errors.product}
                        label="Вид*"
                    />
                </div>

                <div className="col-md-4">
                    <SelectField
                        onChange={handleChange}
                        options={optionsProductCategory}
                        name="productCategory"
                        defaultOption="Choose..."
                        value={form.productCategory || ""}
                        error={errors.productCategory}
                        label="Категория*"
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        type="text"
                        label="Surface"
                        name="surface"
                        onChange={handleChange}
                        value={form.surface || ""}
                        error={errors.surface}
                    />
                </div>
                <div className="col-md-3">
                    <SelectField
                        onChange={handleChange}
                        options={[
                            { _id: "внутри", name: "внутри" },
                            { _id: "внутри, снаружи", name: "внутри, снаружи" },
                            { _id: "снаружи", name: "снаружи" }
                        ]}
                        name="FIoEU"
                        defaultOption="Choose..."
                        value={form.FIoEU || ""}
                        error={errors.FIoEU}
                        label="Применение*"
                    />
                </div>
                <div className="col-md-3">
                    <TextField
                        type="number"
                        label="Степень блеска"
                        name="sheenLevel"
                        min={0}
                        max={6}
                        onChange={handleChange}
                        value={form.sheenLevel || ""}
                        error={errors.sheenLevel}
                    />
                </div>
                <div className="col-md-3">
                    <SelectField
                        onChange={handleChange}
                        options={optionsScrubRating}
                        name="scrubRating"
                        defaultOption="Choose..."
                        value={form.scrubRating || ""}
                        error={errors.scrubRating}
                        label="Класс истирания"
                    />
                </div>
                <div className="col-md-3">
                    <TextField
                        type="number"
                        label="Расход*"
                        name="coverage"
                        min={0}
                        max={100}
                        onChange={handleChange}
                        value={form.coverage || ""}
                        error={errors.coverage}
                    />
                </div>
                <div className="col-md-3">
                    <TextField
                        type="number"
                        label="Срок службы"
                        name="life"
                        min={0}
                        max={100}
                        onChange={handleChange}
                        value={form.life || ""}
                        error={errors.life}
                    />
                </div>
                <div className="col-md-3">
                    <TextField
                        type="number"
                        label="Срок хранения"
                        name="shelfLife"
                        min={0}
                        max={100}
                        onChange={handleChange}
                        value={form.shelfLife || ""}
                        error={errors.shelfLife}
                    />
                </div>

                <div className="col-md-3">
                    <SelectField
                        onChange={handleChange}
                        options={optionsWos}
                        name="wos"
                        defaultOption="Choose..."
                        value={form.wos || ""}
                        error={errors.wos}
                        label="Разбавитель"
                    />
                </div>
                <div className="col-md-3">
                    <TextField
                        type="number"
                        label="Содержание VOC (г/литр)"
                        name="vocLevels"
                        min={0}
                        max={250}
                        onChange={handleChange}
                        value={form.vocLevels || ""}
                        error={errors.vocLevels}
                    />
                </div>
                <div className="col-md-3">
                    <SelectField
                        onChange={handleChange}
                        options={[
                            { _id: "1", name: "1" },
                            { _id: "2", name: "2" },
                            { _id: "3", name: "3" }
                        ]}
                        name="amountCoat"
                        defaultOption="Choose..."
                        value={form.amountCoat || ""}
                        error={errors.amountCoat}
                        label="Количество слоев"
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        type="text"
                        label="Страна производства"
                        name="countryOfOrigin"
                        onChange={handleChange}
                        value={form.countryOfOrigin || ""}
                        error={errors.countryOfOrigin}
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        type="text"
                        label="Ссылка на тех спецификацию"
                        name="linkTTX"
                        onChange={handleChange}
                        value={form.linkTTX || ""}
                        error={errors.linkTTX}
                    />
                </div>
                <div className="col-md-12">
                    <TextField
                        type="text"
                        label="Ссылка на IMG"
                        name="img"
                        onChange={handleChange}
                        value={form.img || ""}
                        error={errors.img}
                    />
                </div>
                <div className="col-md-12">
                    <TextAreaField
                        label="Краткое описание товара"
                        rows="3"
                        onChange={handleChange}
                        name="description"
                        value={form.description || ""}
                        error={errors.description}
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        type="text"
                        label="Ссылка на видео"
                        name="video"
                        onChange={handleChange}
                        value={form.video || ""}
                        error={errors.video}
                    />
                </div>
                <div className="col-md-6">
                    <TextField
                        type="text"
                        label="Ссылка на фото"
                        name="foto"
                        onChange={handleChange}
                        value={form.foto || ""}
                        error={errors.foto}
                    />
                </div>
                <div className="col-md-12">
                    <TextAreaField
                        label="Важно"
                        rows="3"
                        onChange={handleChange}
                        name="important"
                        value={form.important || ""}
                        error={errors.important}
                    />
                </div>
                <div className="col-md-12">
                    <TextAreaField
                        label="Преимущества"
                        rows="3"
                        onChange={handleChange}
                        name="advantages"
                        value={form.advantages || ""}
                        error={errors.advantages}
                    />
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div
                    className="col-md-6 text-center"
                    onClick={() => history.goBack()}
                >
                    <Button color="secondary" icon="back" start>
                        Назад
                    </Button>
                    <Button
                        type="submit"
                        color="success"
                        disabled={!isValid}
                        otherStyles="ms-3"
                    >
                        Обновить
                    </Button>
                </div>
            </div>
        </form>
    );
};
TemplateForm.propTypes = {
    data: PropTypes.object,
    onSubmit: PropTypes.func
};
export default TemplateForm;
