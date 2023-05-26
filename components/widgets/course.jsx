import React, { Fragment } from "react";
import { withRouter } from "next/router";
import { Tab } from '@headlessui/react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import CourseContents from "./course/contents/contents";
import LiveLessonComponent from "./course/live/live";
//INITIALISE
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

//PAGE
export default class CoursePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,

            tabs:
                [
                    { name: "Content", },
                    { name: "Live" },
                    { name: "Assignments" },

                ]
            ,
            livestock: [],
            herds: [],
            heardManagers: [],
        };
    }
    componentDidMount() {
    }

    render() {
        return (
            <>
                {/* <LoadingWidget loading={this.state.loading} /> */}
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:max-w-7xl lg:px-2">
                    <div>
                        {/* <BreadcrumbWidget breadcrumbs={this.state.breadcrumbPages} /> */}
                    </div>
                    <div className=" py-2  md:flex md:items-center md:justify-between">
                        <div className="px-4 sm:px-6 md:px-0">
                            {/* <h1 className="text-3xl font-extrabold text-gray-900 capitalize">{this.props.t('index_page.title', { ns: 'livestock' })}</h1> */}
                        </div>
                        <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">

                        </div>
                    </div>
                    <div className="align-middle inline-block min-w-full min-h-full mt-5">
                        <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg bg-white sm:p-5">
                            <Tab.Group >
                                <div className="border-b border-gray-200 bg-white">
                                    <Tab.List >
                                        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                                            {this.state.tabs.map((tab) => (
                                                <Tab
                                                    key={tab.name}
                                                    className={({ selected }) => classNames(
                                                        selected ? 'border-primary-500 text-primary-600'
                                                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                        'group inline-flex items-center py-4 px-1 border-b-2 focus:outline-none'
                                                    )}
                                                >
                                                    <span className="capitalize  font-medium text-sm">{tab.name}</span>

                                                </Tab>
                                            ))}
                                        </nav>
                                    </Tab.List>
                                </div>
                                <Tab.Panels>
                                    <Tab.Panel>
                                        <CourseContents />
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <LiveLessonComponent />

                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <div >


                                        </div>

                                    </Tab.Panel>

                                </Tab.Panels>
                            </Tab.Group>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
