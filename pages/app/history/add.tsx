import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import withAuth from '@/components/Route/WithAuth';
import { Seo } from '@/layouts/Seo';
import { User } from '@/lib/constants/user';
import PageHeader from '@/components/App/Header/PageHeader';
import { FormInputType, FormLayout } from '@/components/App/Form/FormLayout';
import { Box } from '@chakra-ui/react';
import { RootState } from '@/lib/store/rootReducer';
import { useDispatch, useSelector } from 'react-redux';
import {  getUsersList } from '@/lib/action/user';
import { Country } from '@/lib/constants/country';
import { getCountriesList } from '@/lib/action/country';
import { getCategoriesList } from '@/lib/action/category';
import { Category } from '@/lib/constants/category';
import { addSurvey } from '@/lib/action/survey';

export const AddSurvey: React.FC = () => {

    const dispatch = useDispatch()
    const {  users } = useSelector((state: RootState) => state.user);
    const {  countries } = useSelector((state: RootState) => state.country);
    const {  categories } = useSelector((state: RootState) => state.category);
    

    useEffect(() => {
        getCountries();
        getUsers();
        getCategories();
      }, [])
      
    
      const getCountries = async () => {
        await dispatch<any>(getCountriesList());
      }
      const getUsers = async () => {
        await dispatch<any>(getUsersList());
      }

      const getCategories= async () => {
        await dispatch<any>( getCategoriesList());
      }

    const formInputs: FormInputType<User>[] = [
        {
            key: "surveyName",
            label: "Survey Name",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["Survey Name  is required"]
                },

            ],
            size: "md"
        },
        {
            key: "loi",
            label: "LOI",
            type: "number",
            validationType: "number",
            rules: [
                {
                    type: "required",
                    params: ['LOI is required']
                },
            ],
            size: "md"
        },
        {
            key: "conversion",
            label: "Conversion",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["Conversion is required"]
                },
            ],
            size: "md"
        },
        {
            key: "cpi",
            label: "CPI",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["CPI is required"]
                },
            ],
            size: "md"
        },
        {
            key: "requiredCompletes",
            label: "Required Completes",
            type: "number",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["Complete is required"]
                },
            ],
            size: "md"
        },
        {
            key: "category",
            label: "Category",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: ["Category is required"]
                },
            ],
            options:categories && categories.map((option:Category) => ({ ...option,label:option.name, value: option._id })),
            size: "md"
        },
        {
            key: "user",
            label: "Manager",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: ["Manger is required"]
                },
            ],
            options:users && users.map((option:User) => ({ ...option,label:option.email, value: option._id })),
            size: "md"
        },
        {
            key: "country",
            label: "Countries",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: ["Country is required"]
                },
            ],
            options:countries && countries.map((option:Country) => ({ ...option,label:option.name, value: option._id })),
            size: "md"
        },
        {
            key: "language",
            label: "Languages",
            type: "select",
            validationType: "object",
            rules: [
                {
                    type: "required",
                    params: ["Country is required"]
                },
            ],
            options:countries && countries.map((option:Country) => ({ ...option,label:option.name, value: option._id })),
            size: "md"
        },
        {
            key: "surveyLiveUrl",
            label: "Survey Live URL",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["Survey Live URL is required"]
                },
            ],
            size: "md"
        },
        {
            key: "surveyTestUrl",
            label: "Survey Test URL",
            type: "text",
            validationType: "string",
            rules: [
                {
                    type: "required",
                    params: ["Survey Test URL is required"]
                },
            ],
            size: "md"
        },
        
    ];

    const submitAction = async (values) => {
        await dispatch<any>(addSurvey(values));
    }

    return (
        <Box>
            <Seo title="Surveys" />
            <PageHeader title="New Survey" />
            <FormLayout formInputs={formInputs} submitAction={submitAction} />
        </Box>
    );
}

export default dynamic(() => Promise.resolve(withAuth(AddSurvey)), { ssr: false });


