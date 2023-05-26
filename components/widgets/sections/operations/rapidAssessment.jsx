import { CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Select from 'react-select';

const options = [
    { value: 'Oedema', label: 'Oedema' },
    { value: 'Central cyanosis', label: 'Central cyanosis' },
    { value: 'Convulsing', label: 'Convulsing' },
    { value: 'Fever', label: 'Fever' },
    { value: 'Labour', label: 'Labour' },
    { value: 'Looks very ill', label: 'Looks very ill' },
    { value: 'Severe headache', label: 'Severe headache' },
    { value: 'Severe pain', label: 'Severe pain' },
    { value: 'Severe vomiting', label: 'Severe vomiting' },
    { value: 'Severe abdominal pain', label: 'Severe abdominal pain' },
    { value: 'Unconscious', label: 'Unconscious' },
    { value: 'Visual disturbance', label: 'Visual disturbance' },
    { value: 'Palmar pallor', label: 'Palmar pallor' },

];
function RapidAssessment(props) {
    const [dangerSign, setDangerSign] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null);
    const show =(e)=>{
        console.log(selectedOption);
    }
    return (
        <div className='shadow p-4 bg-gray-50'>
            {/* <button onClick={show} className='p-2 bg-blue-700 text-white'>show</button> */}
            <div className="">
                <h1 className='text-2xl uppercase'>Rapid assessment</h1>
            </div>

            <div className="">
                1.  <span >Danger signs</span>
            </div>
            <div className="flex justify-start">
                <div className="mt-4">

                    <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">

                        <div className="flex items-center">
                            <input
                                onChange={() => setDangerSign(true)}
                                id={1}
                                name="no-danger-signs"
                                type="radio"
                                defaultChecked={dangerSign}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                Yes
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                onChange={() => setDangerSign(false)}
                                id={2}
                                name="no-danger-signs"
                                type="radio"
                                defaultChecked={!dangerSign}

                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <label htmlFor="" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                                No
                            </label>
                        </div>
                    </div>


                </div>
            </div>
            <div className="mt-4">
                {
                    !dangerSign ?
                        <div className="pointer-events-auto w-full max-w-sm overflow-hidden">
                            <div className="p-1 bg-green-100">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                                    </div>
                                    <div className="inline-block ml-3 w-full flex pt-0.5 justify-between">
                                        <p className="text-sm font-medium text-green-900">Proceed with ANC contact
                                        </p>

                                        <a
                                            href="#"
                                            className="mr-4 transititext-primary text-primary transition duration-50 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                                            data-te-toggle="tooltip"
                                            data-te-placement="top"
                                            data-te-ripple-init
                                            data-te-ripple-color="light"
                                            title="'If no danger signs are present, the health worker can continue with the normal ANC contact"
                                        >
                                            <ExclamationCircleIcon className="h-6 w-6 text-green-700" aria-hidden="true" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                        : <div className="w-full max-w-sm">
                            <Select
                                onChange={setSelectedOption}
                                options={options}
                                isMulti
                                name="dager-signs"
                                className="basic-multi-select"
                                classNamePrefix="select"

                            />
                          
                        </div>
                }
            </div>
        </div>
    );
}

export default RapidAssessment;