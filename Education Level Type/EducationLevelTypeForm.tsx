﻿import * as React from 'react';
import { Input } from '../../common/form';
import { Button, UpdateBtn, SubmitBtn } from '../../common/form/buttons';
import { IEducationLevelTypeEntity } from './educationLevelTypePage';
import { error } from 'util';

interface IEducationLevelTypeFormProps {
    educationLevelTypeForm: IEducationLevelTypeEntity,
    onChange: (fieldName: string, fieldValue: string) => void,
    onClick: () => void,
    onUpdate: () => void
    isELTUpdated: boolean,
    error?: any,
    disabled?: boolean
}

const EducationLevelTypeForm = (props: IEducationLevelTypeFormProps) => {
    return (
        <React.Fragment>
            <h3 className="font-weight-bold py-3 mb-4">Education Level Type</h3>
            <div className="card mb-4">
                <div className="card-body demo-vertical-spacing-sm">
                    <Input
                        type="text"
                        name="typeName"
                        className="form-control"
                        label="Name"
                        value={props.educationLevelTypeForm.typeName}
                        onChange={props.onChange}
                        error={props.error.typeName}
                    />
                    <Input
                        type="text"
                        name="typeDescription"
                        className="form-control"
                        label="Description"
                        value={props.educationLevelTypeForm.typeDescription}
                        onChange={props.onChange}
                        error={props.error.typeDescription}
                    />
                    {props.isELTUpdated
                        ?
                        <UpdateBtn
                            onClick={props.onUpdate}
                            disabled={props.disabled}
                        />
                        :
                        <SubmitBtn
                            onClick={props.onClick}
                            disabled={props.disabled}
                        />}
                </div>
            </div>
        </React.Fragment>
    )
}

export default EducationLevelTypeForm;
