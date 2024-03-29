"use strict";
exports.id = 1236;
exports.ids = [1236];
exports.modules = {

/***/ 1236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "l": () => (/* binding */ FormLayout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(1929);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);
;// CONCATENATED MODULE: ./components/App/Form/FormInput.tsx



function FormInput({ formInput , formikProps  }) {
    switch(formInput.type){
        case "multiselect":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isInvalid: formikProps.errors[formInput.key] && formikProps.touched[formInput.key],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                        isMulti: true,
                        ...formikProps.getFieldProps(formInput.key),
                        onChange: (value)=>{
                            formikProps.setFieldValue(formInput.key, value);
                        },
                        options: formInput.options,
                        placeholder: formInput.label,
                        closeMenuOnSelect: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        children: formikProps.errors[formInput.key]
                    })
                ]
            });
        case "textarea":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isInvalid: formikProps.errors[formInput.key] && formikProps.touched[formInput.key],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        ...formikProps.getFieldProps(formInput.key),
                        type: formInput.type,
                        placeholder: formInput.label,
                        size: formInput.size
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        children: formikProps.errors[formInput.key]
                    })
                ]
            });
        case "select":
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isInvalid: formikProps.errors[formInput.key] && formikProps.touched[formInput.key],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((external_react_select_default()), {
                        ...formikProps.getFieldProps(formInput.key),
                        onChange: (value)=>{
                            formikProps.setFieldValue(formInput.key, value);
                        },
                        options: formInput.options,
                        placeholder: formInput.label,
                        isClearable: formInput.isClearable,
                        closeMenuOnSelect: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        children: formikProps.errors[formInput.key]
                    })
                ]
            });
        default:
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                isInvalid: formikProps.errors[formInput.key] && formikProps.touched[formInput.key],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                        ...formikProps.getFieldProps(formInput.key),
                        type: formInput.type,
                        placeholder: formInput.label,
                        size: formInput.size
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                        children: formikProps.errors[formInput.key]
                    })
                ]
            });
    }
}

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
;// CONCATENATED MODULE: ./components/App/Form/FormValidation.tsx

function createYupSchema(schema, config) {
    const { key , validationType , rules =[]  } = config;
    if (!external_yup_[validationType]) {
        return schema;
    }
    let validator = external_yup_[validationType]();
    rules.forEach((validation)=>{
        const { params , type  } = validation;
        if (!validator[type]) {
            return;
        }
        validator = validator[type](...params);
    });
    schema[key] = validator;
    return schema;
}

;// CONCATENATED MODULE: ./components/App/Form/FormInputRender.tsx






function FormInputRender({ isLoading , formInputs , actionButtonLabel , submitAction  }) {
    const initialValues = {};
    formInputs.forEach((item)=>{
        initialValues[item.key] = item.defaultValue || "";
    });
    const yepSchema = formInputs.reduce(createYupSchema, {});
    const validateSchema = external_yup_.object().shape(yepSchema);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
        onSubmit: (values)=>{
            submitAction(values);
        },
        validationSchema: validateSchema,
        validateOnBlur: false,
        validateOnChange: true,
        initialValues: initialValues,
        children: (formikProps)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_formik_.Form, {
                autoComplete: "off",
                noValidate: true,
                onSubmit: formikProps.handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Grid, {
                        templateColumns: "repeat(3, 1fr)",
                        gap: 5,
                        children: formInputs.map((formInput, index)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                w: "100%",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(FormInput, {
                                    formikProps: formikProps,
                                    formInput: formInput
                                })
                            }, index))
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                        textTransform: "none",
                        isLoading: isLoading,
                        type: "submit",
                        colorScheme: "blue",
                        mt: 4,
                        size: "md",
                        variant: "solid",
                        children: actionButtonLabel || "Submit"
                    })
                ]
            })
    });
}

;// CONCATENATED MODULE: ./components/App/Form/FormLayout.tsx


function FormLayout({ isLoading , formInputs , actionButtonLabel , submitAction  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(FormInputRender, {
        isLoading: isLoading,
        actionButtonLabel: actionButtonLabel,
        formInputs: formInputs,
        submitAction: submitAction
    });
}


/***/ })

};
;