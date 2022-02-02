import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getTemplateById, updateTemplate } from "../../../store/templates";

import TemplateForm from "../../ui/templateForm";

const EditTemplatePage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    const template = useSelector(getTemplateById(id));

    const handleSubmit = (form) => {
        dispatch(updateTemplate(form));
    };

    return (
        <div className="container">
            <div className="card shadow px-5 my-2">
                <div className="row my-2">
                    <div className="col-12">
                        <h1 className="text-center">Edit Template</h1>
                    </div>
                </div>
                <>
                    <TemplateForm data={template} onSubmit={handleSubmit} />
                    <pre>{JSON.stringify(template, 0, 2)}</pre>
                </>
            </div>
        </div>
    );
};

export default EditTemplatePage;
