import { useState, useEffect } from "react";

import mutableData from "../mockData/finishMutableData.json";
import templateData from "../mockData/endTemplateData.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "Not Started",
        pending: "In process",
        success: "Ready",
        error: "Error occured"
    };

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summaryCount = mutableData.length + templateData.length;

    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };
    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summaryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.success);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const paint of mutableData) {
                await httpService.put(
                    "paints/" + paint.paintId + ".json",
                    paint
                );
                incrementCount();
            }
            for (const template of templateData) {
                await httpService.put(
                    "templates/" + template.templateId + ".json",
                    template
                );
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.error);
        }
    }

    return { error, initialize, progress, status };
};

export default useMockData;
