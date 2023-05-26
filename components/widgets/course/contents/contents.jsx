import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import CourseOutlines from './courseOutline'

const sections = [
    {
        type: "Course overview",
        component: <CourseOutlines />,
    },
    {
        type: "Learning material",
        component: <CourseOutlines />,
    },
    {
        type: "Reference material",
        component: <CourseOutlines />,
    },
]

export default function CourseContents() {
    return (
        <div className="bg-white">
            <div className="mx-auto  px-2 py-2 sm:py-2 lg:px-2 lg:py-2 mt-4">
                <div className="mx-auto divide-y divide-gray-900/10">
                    <h2 className="text-md leading-8 text-gray-500">
                        Basic computer skills courses cover the most common usages of a computer, including a majority or all of the following: understanding the basic notions of computer manipulation; managing computer files, word processing, using spreadsheets and databases; creating presentations; finding information and communicating using computers; and being aware of social and ethical implications of Internet use.
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {sections.map((section) => (
                            <Disclosure as="div" key={section.type} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-600">
                                                <span className="text-base font-semibold leading-7">{section.type}</span>
                                                <span className="ml-6 flex h-7 items-center">
                                                    {open ? (
                                                        <ChevronUpIcon className="h-4 w-4" color='black' aria-hidden="true" />
                                                    ) : (
                                                        <ChevronDownIcon className="h-4 w-4" color='black' aria-hidden="true" />
                                                    )}
                                                </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-600">{section.component}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}
