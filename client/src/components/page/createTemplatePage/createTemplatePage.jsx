import React from "react";
import { useDispatch } from "react-redux";
import { createTemplate } from "../../../store/templates";

import TemplateForm from "../../ui/templateForm";

const CreateTemplatePage = () => {
    const dispatch = useDispatch();

    const handleSubmit = (form) => {
        dispatch(createTemplate(form));

        // .then((form) => {
        //   if (form) history.push(`/admin/templates`);
        // });
    };
    //
    return (
        <div className="container">
            <div className="card shadow px-5 my-2">
                <div className="row my-2">
                    <div className="col-12">
                        <h1 className="text-center">Create Template</h1>
                        <p className="card-text">
                            <small className="text-muted">
                                Поля отмеченные * обязятельны для заполнения.
                                Для создания шаблона должно быть заполнено
                                минимум 6 полей.
                            </small>
                        </p>
                    </div>
                </div>
                <TemplateForm onSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default CreateTemplatePage;
