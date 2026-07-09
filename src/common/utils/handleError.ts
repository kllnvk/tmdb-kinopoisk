import {isErrorWithMessage} from "@/common/utils/isErrorWithMessage";
import type {FetchBaseQueryError, FetchBaseQueryMeta, QueryReturnValue} from "@reduxjs/toolkit/query";
import {toast} from "react-toastify";

export const handleError = (result: QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>) => {

    let error = "Some Error occurred"

    if (result.error) {
        switch (result.error.status) {
            case "FETCH_ERROR":
            case "PARSING_ERROR":
            case "TIMEOUT_ERROR":
            case "CUSTOM_ERROR":
                error = result.error.error
                break
            case 400:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.status_message
                } else {
                    error = "❌ Bad request. Please check your input data"
                }
                break;
            case 401:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.status_message
                } else {
                    error = "🔒 Session expired. Please log in again"
                }
                break;
            case 403:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.status_message
                } else {
                    error = "🚫 Access denied. Please check your permissions"
                }
                break;
            case 404:
                if (isErrorWithMessage(result.error.data)) {
                    error = result.error.data.status_message
                } else {
                    error = "🔍 Resource not found"
                }
                break;
            default:
                if (result.error.status >= 500 && result.error.status < 600) {
                    error = "Server error occurred. Please try again later."
                } else {
                    error = JSON.stringify(result.error)
                }
                break
        }
    }
    toast.error(error)
}